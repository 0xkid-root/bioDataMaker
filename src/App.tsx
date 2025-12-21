import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { BiodataProvider, useBiodata } from './context/BiodataContext';
import { LandingPage } from './components/LandingPage';
import { BiodataWizard } from './components/BiodataWizard';
import { BiodataPreview } from './components/BiodataPreview';
import { ShareDialog } from './components/ShareDialog';
import { PrivacyControls } from './components/PrivacyControls';
import { SharedBiodataView } from './components/SharedBiodataView';
import { useAiAssist } from './hooks/useAiAssist';

function AppContent() {
  const [view, setView] = useState<'landing' | 'wizard' | 'shared'>('landing');
  const [shareId, setShareId] = useState<string>('');
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const { isPreviewMode, setIsPreviewMode, updateBiodataData, biodataData } = useBiodata();
  const { improveText, remainingUses, isProcessing } = useAiAssist();

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/view/')) {
      const id = path.split('/view/')[1];
      if (id) {
        setShareId(id);
        setView('shared');
      }
    }
  }, []);

  const handleGetStarted = () => {
    setView('wizard');
  };

  const handleBackToLanding = () => {
    setView('landing');
    setIsPreviewMode(false);
  };

  const handleDownload = () => {
    window.print();
  };

  const handleShare = () => {
    setShowShareDialog(true);
  };

  const handleAiAssist = async (field: string, currentValue: string) => {
    if (!currentValue.trim()) {
      alert('Please enter some text first.');
      return;
    }

    if (remainingUses <= 0) {
      alert('Daily AI assist limit reached. Try again tomorrow!');
      return;
    }

    try {
      const improved = await improveText(currentValue, field);

      const section = field.includes('Profession')
        ? 'education'
        : field.includes('Family')
        ? 'family'
        : 'lifestyle';

      const fieldName = field.replace('about', '').toLowerCase();
      const key =
        field === 'partnerExpectations'
          ? 'partnerExpectations'
          : field === 'aboutMe'
          ? 'aboutMe'
          : field === 'aboutProfession'
          ? 'aboutProfession'
          : 'aboutFamily';

      updateBiodataData(section as any, {
        ...biodataData[section as keyof typeof biodataData],
        [key]: improved,
      } as any);

      alert(`AI improved your text! (${remainingUses - 1} uses remaining today)`);
    } catch (error: any) {
      alert(error.message || 'Failed to improve text. Please try again.');
    }
  };

  if (view === 'shared' && shareId) {
    return <SharedBiodataView shareId={shareId} />;
  }

  return (
    <>
      {view === 'landing' && <LandingPage onGetStarted={handleGetStarted} />}

      {view === 'wizard' && !isPreviewMode && (
        <>
          <BiodataWizard onClose={handleBackToLanding} onAiAssist={handleAiAssist} />
          <div className="fixed bottom-4 right-4 z-20">
            <button
              onClick={() => setShowPrivacy(true)}
              className="flex items-center gap-2 px-4 py-3 bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
            >
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Privacy</span>
            </button>
          </div>
        </>
      )}

      {isPreviewMode && (
        <BiodataPreview
          onClose={handleBackToLanding}
          onDownload={handleDownload}
          onShare={handleShare}
        />
      )}

      {showShareDialog && <ShareDialog onClose={() => setShowShareDialog(false)} />}

      {showPrivacy && <PrivacyControls onClose={() => setShowPrivacy(false)} />}
    </>
  );
}

function App() {
  return (
    <BiodataProvider>
      <AppContent />
    </BiodataProvider>
  );
}

export default App;
