import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BiodataData, TemplateCustomization, WizardStep } from '../types/biodata';
import { saveToDraft, loadFromDraft, clearDraft } from '../utils/helpers';

interface BiodataContextType {
  biodataData: Partial<BiodataData>;
  updateBiodataData: (section: keyof BiodataData, data: Partial<BiodataData[keyof BiodataData]>) => void;
  setProfilePhoto: (photo: string) => void;
  customization: TemplateCustomization;
  updateCustomization: (updates: Partial<TemplateCustomization>) => void;
  currentStep: WizardStep;
  setCurrentStep: (step: WizardStep) => void;
  clearAllData: () => void;
  isPreviewMode: boolean;
  setIsPreviewMode: (mode: boolean) => void;
}

const BiodataContext = createContext<BiodataContextType | undefined>(undefined);

const defaultCustomization: TemplateCustomization = {
  templateId: 'modern-1',
  primaryColor: '#2563eb',
  fontFamily: 'Inter, sans-serif',
  showPhoto: true,
  hiddenSections: [],
};

export const BiodataProvider = ({ children }: { children: ReactNode }) => {
  const [biodataData, setBiodataData] = useState<Partial<BiodataData>>({});
  const [customization, setCustomization] = useState<TemplateCustomization>(defaultCustomization);
  const [currentStep, setCurrentStep] = useState<WizardStep>('personal');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  useEffect(() => {
    const draft = loadFromDraft();
    if (draft) {
      setBiodataData(draft);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(biodataData).length > 0) {
      saveToDraft(biodataData);
    }
  }, [biodataData]);

  const updateBiodataData = (
    section: keyof BiodataData,
    data: Partial<BiodataData[keyof BiodataData]>
  ) => {
    setBiodataData((prev) => {
      const currentSection = prev[section];
      return {
        ...prev,
        [section]: {
          ...(currentSection && typeof currentSection === 'object' ? currentSection : {}),
          ...data,
        },
      };
    });
  };

  const setProfilePhoto = (photo: string) => {
    setBiodataData((prev) => ({
      ...prev,
      profilePhoto: photo,
    }));
  };

  const updateCustomization = (updates: Partial<TemplateCustomization>) => {
    setCustomization((prev) => ({ ...prev, ...updates }));
  };

  const clearAllData = () => {
    setBiodataData({});
    setCustomization(defaultCustomization);
    setCurrentStep('personal');
    clearDraft();
  };

  return (
    <BiodataContext.Provider
      value={{
        biodataData,
        updateBiodataData,
        setProfilePhoto,
        customization,
        updateCustomization,
        currentStep,
        setCurrentStep,
        clearAllData,
        isPreviewMode,
        setIsPreviewMode,
      }}
    >
      {children}
    </BiodataContext.Provider>
  );
};

export const useBiodata = () => {
  const context = useContext(BiodataContext);
  if (!context) {
    throw new Error('useBiodata must be used within BiodataProvider');
  }
  return context;
};
