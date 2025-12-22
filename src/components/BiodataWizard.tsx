import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, X, Save, FolderOpen } from 'lucide-react';
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
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
        <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  Biodataforwedding
                </h2>
                <span className="text-gray-500 hidden sm:block text-sm">| Create Marriage Biodata</span>
              </div>
              <div className="flex items-center gap-2">
                {/* Save Template Button - Desktop */}
                <button
                  onClick={() => setShowSaveDialog(true)}
                  className="hidden md:flex items-center gap-2 px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
                {/* Load Template Button - Desktop */}
                <button
                  onClick={() => setShowTemplateManager(true)}
                  className="hidden md:flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <FolderOpen className="w-4 h-4" />
                  <span>Load</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Desktop Step Indicator */}
            <div className="hidden md:flex items-center gap-2 overflow-x-auto pb-2">
              {WIZARD_STEPS.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${currentStep === step.id
                    ? 'bg-blue-600 text-white'
                    : index < currentStepIndex
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ${currentStep === step.id
                      ? 'bg-white text-blue-600'
                      : index < currentStepIndex
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                      }`}
                  >
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium">{step.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Step Indicator - Dots */}
            <div className="flex md:hidden items-center justify-center gap-2">
              {WIZARD_STEPS.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className="group"
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all ${currentStep === step.id
                      ? 'bg-blue-600 w-8'
                      : index < currentStepIndex
                        ? 'bg-green-600'
                        : 'bg-gray-300'
                      }`}
                  />
                </button>
              ))}
            </div>
            <p className="text-center md:hidden text-sm text-gray-600 mt-2">
              {WIZARD_STEPS[currentStepIndex].label}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            {renderStepForm()}
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t shadow-lg safe-bottom">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between gap-2 mb-2">
              <button
                onClick={goToPreviousStep}
                disabled={currentStepIndex === 0}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${currentStepIndex === 0
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-gray-100 text-gray-700 active:bg-gray-200'
                  }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm">Prev</span>
              </button>

              <button
                onClick={() => setIsPreviewMode(true)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium bg-green-100 text-green-700 active:bg-green-200 transition-all"
              >
                <Eye className="w-5 h-5" />
                <span className="text-sm">Preview</span>
              </button>

              <button
                onClick={goToNextStep}
                disabled={currentStepIndex === WIZARD_STEPS.length - 1}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${currentStepIndex === WIZARD_STEPS.length - 1
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-blue-600 text-white active:bg-blue-700'
                  }`}
              >
                <span className="text-sm">Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Save/Load buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSaveDialog(true)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-lg active:bg-blue-100 transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save Template</span>
              </button>
              <button
                onClick={() => setShowTemplateManager(true)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg active:bg-gray-200 transition-colors"
              >
                <FolderOpen className="w-4 h-4" />
                <span>Load Template</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Footer Navigation */}
        <div className="hidden md:block max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
            <div className="flex items-center justify-between">
              <button
                onClick={goToPreviousStep}
                disabled={currentStepIndex === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${currentStepIndex === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <button
                onClick={() => setIsPreviewMode(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-green-100 text-green-700 hover:bg-green-200 transition-all"
              >
                <Eye className="w-5 h-5" />
                Preview
              </button>

              <button
                onClick={goToNextStep}
                disabled={currentStepIndex === WIZARD_STEPS.length - 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${currentStepIndex === WIZARD_STEPS.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
              >
                Next
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
