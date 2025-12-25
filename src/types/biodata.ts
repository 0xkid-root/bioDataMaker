export interface PersonalDetails {
  fullName: string;
  dateOfBirth: string;
  timeOfBirth?: string;
  placeOfBirth: string;
  age: string;
  height: string;
  weight?: string;
  complexion?: string;
  bloodGroup?: string;
  physicalStatus?: string;
  maritalStatus: string;
  motherTongue: string;
  religion: string;
  caste?: string;
  subCaste?: string;
  gotra?: string;
  manglik?: string;
}

export interface EducationProfession {
  highestQualification: string;
  instituteName?: string;
  profession: string;
  companyName?: string;
  designation?: string;
  annualIncome?: string;
  workLocation?: string;
  aboutProfession?: string;
}

export interface FamilyDetails {
  fatherName: string;
  fatherOccupation?: string;
  motherName: string;
  motherOccupation?: string;
  siblings?: string;
  familyType?: string;
  familyStatus?: string;
  familyValues?: string;
  aboutFamily?: string;
}

export interface LifestylePreferences {
  diet?: string;
  drinking?: string;
  smoking?: string;
  hobbies?: string;
  interests?: string;
  aboutMe?: string;
  partnerExpectations?: string;
}

export interface HoroscopeDetails {
  rashi?: string;
  nakshatra?: string;
  gan?: string;
  nadi?: string;
  charan?: string;
  birthStar?: string;
  horoscopeMatch?: string;
  additionalInfo?: string;
}

export interface ContactInformation {
  mobileNumber: string;
  alternateNumber?: string;
  email?: string;
  whatsappNumber?: string;
  address?: string;
  city: string;
  state: string;
  pincode?: string;
  contactPerson?: string;
}

export interface BiodataData {
  personal: PersonalDetails;
  education: EducationProfession;
  family: FamilyDetails;
  lifestyle: LifestylePreferences;
  horoscope: HoroscopeDetails;
  contact: ContactInformation;
  profilePhoto?: string;
}

export interface TemplateCustomization {
  templateId: string;
  primaryColor: string;
  fontFamily: string;
  showPhoto: boolean;
  hiddenSections: string[];
}

export interface Template {
  id: string;
  name: string;
  category: 'simple' | 'modern' | 'traditional' | 'minimal' | 'decorative' | 'islamic' | 'premium' | 'job';
  thumbnail: string;
  isPremium: boolean;
}

export interface ShareOptions {
  expiryHours: 24 | 168;
  allowDownload: boolean;
}

export interface SharedBiodata {
  id: string;
  data: BiodataData;
  templateId: string;
  customization: TemplateCustomization;
  expiresAt: string;
  viewCount: number;
}

export type WizardStep = 'personal' | 'education' | 'family' | 'lifestyle' | 'horoscope' | 'contact';

export const WIZARD_STEPS: { id: WizardStep; label: string; icon: string }[] = [
  { id: 'personal', label: 'Personal Details', icon: 'user' },
  { id: 'education', label: 'Education & Career', icon: 'graduation-cap' },
  { id: 'family', label: 'Family Details', icon: 'users' },
  { id: 'lifestyle', label: 'Lifestyle', icon: 'heart' },
  { id: 'horoscope', label: 'Horoscope', icon: 'star' },
  { id: 'contact', label: 'Contact', icon: 'phone' },
];
