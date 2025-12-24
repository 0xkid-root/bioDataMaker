import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import toast from 'react-hot-toast';
import { BiodataData } from './types/biodata';
import { BiodataProvider, useBiodata } from './context/BiodataContext';
import { LandingPage } from './components/LandingPage';
import { BiodataWizard } from './components/BiodataWizard';
import { BiodataPreview } from './components/BiodataPreview';
import { ShareDialog } from './components/ShareDialog';
import { PrivacyControls } from './components/PrivacyControls';
import { SharedBiodataView } from './components/SharedBiodataView';
import { ToastContainer } from './components/Toast';
import { useAiAssist } from './hooks/useAiAssist';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { BiodataCreator } from './components/BiodataCreator';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function AppContent() {
  const [shareId, setShareId] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/view/')) {
      const id = path.split('/view/')[1];
      if (id) {
        setShareId(id);
      }
    }
  }, [location]);

  const AppRoutes = () => {
    // Check if we're on a shared view route
    if (location.pathname.startsWith('/view/')) {
      const id = location.pathname.split('/view/')[1];
      if (id) {
        return <SharedBiodataView shareId={id} />;
      }
    }
    
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <LandingPage onGetStarted={() => {}} />
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
                <AboutPage />
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <ContactPage />
                <Footer />
              </>
            } />
            <Route path="/create" element={
              <>
                <BiodataCreator />
                <Footer />
              </>
            } />
            <Route path="/create/*" element={
              <>
                <BiodataCreator />
                <Footer />
              </>
            } />
          </Routes>
        </main>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

function App() {
  return (
    <Router>
      <BiodataProvider>
        <ToastContainer />
        <AppContent />
      </BiodataProvider>
    </Router>
  );
}

export default App;
