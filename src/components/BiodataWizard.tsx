import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, X, Save, FolderOpen, Heart } from 'lucide-react';
import { useBiodata } from '../context/BiodataContext';
import { WIZARD_STEPS } from '../types/biodata';
import { PersonalDetailsForm } from './forms/PersonalDetailsForm';
import { EducationProfessionForm } from './forms/EducationProfessionForm';
import { FamilyDetailsForm } from './forms/FamilyDetailsForm';
import { LifestylePreferencesForm } from './forms/LifestylePreferencesForm';
import { HoroscopeDetailsForm } from './forms/HoroscopeDetailsForm';
import { ContactInformationForm } from './forms/ContactInformationForm';
import { SaveTemplateDialog } from './SaveTemplateDialog';
import { TemplateManager } from './TemplateManager';

interface BiodataWizardProps {
  onClose: () => void;
  onAiAssist: (field: string, currentValue: string) => void;
}

export const BiodataWizard = ({ onClose, onAiAssist }: BiodataWizardProps) => {
  const {
    biodataData,
    updateBiodataData,
    setProfilePhoto,
    currentStep,
    setCurrentStep,
    setIsPreviewMode,
    customization,
  } = useBiodata();

  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [showTemplateManager, setShowTemplateManager] = useState(false);

  const currentStepIndex = WIZARD_STEPS.findIndex(
    (step) => step.id === currentStep
  );

  const goToNextStep = () => {
    if (currentStepIndex < WIZARD_STEPS.length - 1) {
      setCurrentStep(WIZARD_STEPS[currentStepIndex + 1].id);
      // Scroll to top on mobile
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(WIZARD_STEPS[currentStepIndex - 1].id);
      // Scroll to top on mobile
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLoadTemplate = (template: any) => {
    // Load biodata data
    Object.keys(template.biodata_data).forEach((key) => {
      if (key === 'profilePhoto') {
        // Handle profilePhoto separately
        setProfilePhoto(template.biodata_data[key]);
      } else {
        updateBiodataData(key as any, template.biodata_data[key]);
      }
    });
  };

  const renderStepForm = () => {
    switch (currentStep) {
      case 'personal':
        return (
          <PersonalDetailsForm
            data={biodataData.personal || {}}
            onChange={(data) => updateBiodataData('personal', data)}
          />
        );
      case 'education':
        return (
          <EducationProfessionForm
            data={biodataData.education || {}}
            onChange={(data) => updateBiodataData('education', data)}
            onAiAssist={onAiAssist}
          />
        );
      case 'family':
        return (
          <FamilyDetailsForm
            data={biodataData.family || {}}
            onChange={(data) => updateBiodataData('family', data)}
            onAiAssist={onAiAssist}
          />
        );
      case 'lifestyle':
        return (
          <LifestylePreferencesForm
            data={biodataData.lifestyle || {}}
            onChange={(data) => updateBiodataData('lifestyle', data)}
            onAiAssist={onAiAssist}
          />
        );
      case 'horoscope':
        return (
          <HoroscopeDetailsForm
            data={biodataData.horoscope || {}}
            onChange={(data) => updateBiodataData('horoscope', data)}
          />
        );
      case 'contact':
        return (
          <ContactInformationForm
            data={biodataData.contact || {}}
            onChange={(data) => updateBiodataData('contact', data)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#fffcf9] pb-20 md:pb-8">
        <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-rose-600 fill-rose-600" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-serif">
                  Biodataforwedding
                </h2>
                <span className="text-gray-500 hidden sm:block text-sm font-medium">| Traditional Marriage Profile</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowSaveDialog(true)}
                  className="hidden md:flex items-center gap-2 px-4 py-2 text-sm bg-rose-50 text-rose-700 rounded-lg hover:bg-rose-100 transition-colors font-medium border border-rose-100"
                >
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button
                  onClick={() => setShowTemplateManager(true)}
                  className="hidden md:flex items-center gap-2 px-4 py-2 text-sm bg-stone-100 text-stone-700 rounded-lg hover:bg-stone-200 transition-colors font-medium"
                >
                  <FolderOpen className="w-4 h-4" />
                  <span>Load</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-rose-50 rounded-full transition-colors group"
                >
                  <X className="w-6 h-6 text-gray-400 group-hover:text-rose-600" />
                </button>
              </div>
            </div>

            {/* Desktop Step Indicator */}
            <div className="hidden md:flex items-center gap-2 overflow-x-auto pb-2">
              {WIZARD_STEPS.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className={`flex items-center gap-3 px-5 py-2.5 rounded-xl whitespace-nowrap transition-all border ${currentStep === step.id
                    ? 'bg-rose-700 text-white border-rose-700 shadow-md'
                    : index < currentStepIndex
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                      : 'bg-white text-gray-400 border-gray-100 hover:border-rose-200 hover:text-rose-400'
                    }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${currentStep === step.id
                      ? 'bg-white text-rose-700'
                      : index < currentStepIndex
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-400'
                      }`}
                  >
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold">{step.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Step Indicator - Dots */}
            <div className="flex md:hidden items-center justify-center gap-2">
              {WIZARD_STEPS.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className="group p-1"
                >
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentStep === step.id
                      ? 'bg-rose-600 w-10'
                      : index < currentStepIndex
                        ? 'bg-emerald-500 w-4'
                        : 'bg-gray-200 w-4'
                      }`}
                  />
                </button>
              ))}
            </div>
            <p className="text-center md:hidden text-sm font-bold text-rose-700 mt-2 font-serif uppercase tracking-wider">
              {WIZARD_STEPS[currentStepIndex].label}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <div className="bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-5 sm:p-8 md:p-10 border border-rose-50/50">
            {renderStepForm()}
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-rose-100 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] safe-bottom z-20">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between gap-3 mb-4">
              <button
                onClick={goToPreviousStep}
                disabled={currentStepIndex === 0}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-bold transition-all ${currentStepIndex === 0
                  ? 'bg-gray-50 text-gray-300 border border-gray-100'
                  : 'bg-stone-50 text-stone-700 border border-stone-200 active:bg-stone-100'
                  }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm">Back</span>
              </button>

              <button
                onClick={() => setIsPreviewMode(true)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 active:bg-emerald-100 transition-all"
              >
                <Eye className="w-5 h-5" />
                <span className="text-sm">Preview</span>
              </button>

              <button
                onClick={goToNextStep}
                disabled={currentStepIndex === WIZARD_STEPS.length - 1}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-bold transition-all shadow-md ${currentStepIndex === WIZARD_STEPS.length - 1
                  ? 'bg-gray-100 text-gray-400 border border-gray-200'
                  : 'wedding-gradient text-white active:opacity-90'
                  }`}
              >
                <span className="text-sm">Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Save/Load buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowSaveDialog(true)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold bg-rose-50 text-rose-700 rounded-xl border border-rose-100 active:bg-rose-100 transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Offline</span>
              </button>
              <button
                onClick={() => setShowTemplateManager(true)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold bg-stone-50 text-stone-700 rounded-xl border border-stone-200 active:bg-stone-100 transition-colors"
              >
                <FolderOpen className="w-3.5 h-3.5" />
                <span>Load Existing</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Footer Navigation */}
        <div className="hidden md:block max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 mt-6 border border-rose-50/50">
            <div className="flex items-center justify-between">
              <button
                onClick={goToPreviousStep}
                disabled={currentStepIndex === 0}
                className={`flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold transition-all border ${currentStepIndex === 0
                  ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous Step
              </button>

              <button
                onClick={() => setIsPreviewMode(true)}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-all shadow-sm"
              >
                <Eye className="w-5 h-5" />
                See Live Preview
              </button>

              <button
                onClick={goToNextStep}
                className={`flex items-center gap-2 px-10 py-3.5 rounded-xl font-bold transition-all shadow-md ${currentStepIndex === WIZARD_STEPS.length - 1
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'wedding-gradient text-white hover:shadow-xl transform hover:-translate-y-0.5'
                  }`}
              >
                {currentStepIndex === WIZARD_STEPS.length - 1 ? 'Finish Profile' : 'Next Category'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dialogs */}
      {showSaveDialog && (
        <SaveTemplateDialog
          isOpen={showSaveDialog}
          onClose={() => setShowSaveDialog(false)}
          biodataData={biodataData}
          templateId={customization.templateId}
          customization={customization}
        />
      )}

      {showTemplateManager && (
        <TemplateManager
          onClose={() => setShowTemplateManager(false)}
          onLoadTemplate={handleLoadTemplate}
        />
      )}
    </>
  );
};
