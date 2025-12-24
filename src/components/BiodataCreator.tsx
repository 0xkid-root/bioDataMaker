import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { useBiodata } from '../context/BiodataContext';
import { BiodataWizard } from './BiodataWizard';
import { BiodataPreview } from './BiodataPreview';
import { ShareDialog } from './ShareDialog';
import { PrivacyControls } from './PrivacyControls';
import { useAiAssist } from '../hooks/useAiAssist';
import { toast } from 'react-hot-toast';
import { BiodataData } from '../types/biodata';

export const BiodataCreator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    isPreviewMode,
    setIsPreviewMode,
    updateBiodataData,
    biodataData
  } = useBiodata();
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const { improveText, remainingUses, isProcessing } = useAiAssist();

  const handleBackToLanding = () => {
    setIsPreviewMode(false);
    navigate('/');
  };

  const handleDownload = () => {
    window.print();
  };

  const handleShare = () => {
    setShowShareDialog(true);
  };

  const handleAiAssist = async (field: string, currentValue: string) => {
    if (!currentValue.trim()) {
      toast.error('Please enter some text first.');
      return;
    }

    if (remainingUses <= 0) {
      toast.error('Daily AI assist limit reached. Try again tomorrow!');
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

      const currentSectionData = biodataData[section as keyof BiodataData];
      updateBiodataData(section as any, {
        ...(currentSectionData && typeof currentSectionData === 'object' ? currentSectionData : {}),
        [key]: improved,
      } as any);

      toast.success(`AI improved your text! (${remainingUses - 1} uses remaining today)`);
    } catch (error: any) {
      toast.error(error.message || 'Failed to improve text. Please try again.');
    }
  };

  return (
    <>
      {!isPreviewMode && (
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
};