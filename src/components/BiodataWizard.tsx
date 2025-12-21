import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';
import { useBiodata } from '../context/BiodataContext';
import { WIZARD_STEPS } from '../types/biodata';
import { PersonalDetailsForm } from './forms/PersonalDetailsForm';
import { EducationProfessionForm } from './forms/EducationProfessionForm';
import { FamilyDetailsForm } from './forms/FamilyDetailsForm';
import { LifestylePreferencesForm } from './forms/LifestylePreferencesForm';
import { HoroscopeDetailsForm } from './forms/HoroscopeDetailsForm';
import { ContactInformationForm } from './forms/ContactInformationForm';

interface BiodataWizardProps {
  onClose: () => void;
  onAiAssist: (field: string, currentValue: string) => void;
}

export const BiodataWizard = ({ onClose, onAiAssist }: BiodataWizardProps) => {
  const {
    biodataData,
    updateBiodataData,
    currentStep,
    setCurrentStep,
    setIsPreviewMode,
  } = useBiodata();

  const currentStepIndex = WIZARD_STEPS.findIndex(
    (step) => step.id === currentStep
  );

  const goToNextStep = () => {
    if (currentStepIndex < WIZARD_STEPS.length - 1) {
      setCurrentStep(WIZARD_STEPS[currentStepIndex + 1].id);
    }
  };

  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(WIZARD_STEPS[currentStepIndex - 1].id);
    }
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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-bold text-gray-900">
                Biodataforwedding
              </h2>
              <span className="text-gray-500 hidden sm:block">| Create Marriage Biodata</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {WIZARD_STEPS.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  currentStep === step.id
                    ? 'bg-blue-600 text-white'
                    : index < currentStepIndex
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep === step.id
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
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {renderStepForm()}

          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <button
              onClick={goToPreviousStep}
              disabled={currentStepIndex === 0}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${
                currentStepIndex === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <button
              onClick={() => setIsPreviewMode(true)}
              className="flex items-center gap-2 px-6 py-2 rounded-lg font-medium bg-green-100 text-green-700 hover:bg-green-200 transition-all"
            >
              <Eye className="w-5 h-5" />
              Preview
            </button>

            <button
              onClick={goToNextStep}
              disabled={currentStepIndex === WIZARD_STEPS.length - 1}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${
                currentStepIndex === WIZARD_STEPS.length - 1
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
  );
};
