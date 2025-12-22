import { ChangeEvent, useState } from 'react';
import { PersonalDetails } from '../../types/biodata';
import { Input, Select } from '../FormElements';
import { ProgressIndicator } from '../ProgressIndicator';
import { PhotoUpload } from '../PhotoUpload';
import { useBiodata } from '../../context/BiodataContext';
import { MARITAL_STATUS, COMPLEXION, RELIGIONS, MANGLIK_OPTIONS } from '../../utils/constants';
import {
  validateName,
  validateDateOfBirth,
  validateAge,
  validateHeight,
  validateRequired,
  validateSelect,
  calculateAge,
} from '../../utils/validators';

interface PersonalDetailsFormProps {
  data: Partial<PersonalDetails>;
  onChange: (data: Partial<PersonalDetails>) => void;
}

interface ValidationErrors {
  [key: string]: string | undefined;
}

export const PersonalDetailsForm = ({ data, onChange }: PersonalDetailsFormProps) => {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const { biodataData, setProfilePhoto } = useBiodata();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });

    // Auto-calculate age from date of birth
    if (name === 'dateOfBirth' && value) {
      const calculatedAge = calculateAge(value);
      if (calculatedAge > 0) {
        onChange({ ...data, [name]: value, age: calculatedAge.toString() });
      }
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => new Set(prev).add(name));
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let validation;

    switch (name) {
      case 'fullName':
        validation = validateName(value, 'Full name');
        break;
      case 'dateOfBirth':
        validation = validateDateOfBirth(value);
        break;
      case 'placeOfBirth':
        validation = validateRequired(value, 'Place of birth');
        break;
      case 'age':
        validation = validateAge(value);
        break;
      case 'height':
        validation = validateHeight(value);
        break;
      case 'motherTongue':
        validation = validateRequired(value, 'Mother tongue');
        break;
      case 'maritalStatus':
        validation = validateSelect(value, 'marital status');
        break;
      case 'religion':
        validation = validateSelect(value, 'religion');
        break;
      default:
        validation = { isValid: true };
    }

    setErrors((prev) => ({
      ...prev,
      [name]: validation.isValid ? undefined : validation.error,
    }));
  };

  // Calculate completion progress
  const requiredFields = ['fullName', 'dateOfBirth', 'placeOfBirth', 'age', 'height', 'motherTongue', 'maritalStatus', 'religion'];
  const completedFields = requiredFields.filter((field) => {
    const value = data[field as keyof PersonalDetails];
    return value && value.toString().trim().length > 0;
  }).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
        <ProgressIndicator
          current={completedFields}
          total={requiredFields.length}
        />
      </div>

      {/* Profile Photo Upload */}
      <PhotoUpload
        value={biodataData.profilePhoto}
        onChange={setProfilePhoto}
        onRemove={() => setProfilePhoto('')}
      />

      <Input
        label="Full Name"
        name="fullName"
        value={data.fullName || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter full name"
        required
        error={touched.has('fullName') ? errors.fullName : undefined}
        success={!!data.fullName && !errors.fullName}
        maxLength={100}
      />

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          value={data.dateOfBirth || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          error={touched.has('dateOfBirth') ? errors.dateOfBirth : undefined}
          success={!!data.dateOfBirth && !errors.dateOfBirth}
          helperText="Age will be auto-calculated"
        />
        <Input
          label="Time of Birth"
          name="timeOfBirth"
          type="time"
          value={data.timeOfBirth || ''}
          onChange={handleChange}
          placeholder="Optional"
          helperText="Required for horoscope matching"
        />
      </div>

      <Input
        label="Place of Birth"
        name="placeOfBirth"
        value={data.placeOfBirth || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="City, State"
        required
        error={touched.has('placeOfBirth') ? errors.placeOfBirth : undefined}
        success={!!data.placeOfBirth && !errors.placeOfBirth}
      />

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Age"
          name="age"
          type="number"
          value={data.age || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g., 28"
          required
          error={touched.has('age') ? errors.age : undefined}
          success={!!data.age && !errors.age}
          helperText="Auto-filled from date of birth"
        />
        <Input
          label="Height"
          name="height"
          value={data.height || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g., 5'6&quot; or 168 cm"
          required
          error={touched.has('height') ? errors.height : undefined}
          success={!!data.height && !errors.height}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Weight"
          name="weight"
          value={data.weight || ''}
          onChange={handleChange}
          placeholder="e.g., 65 kg (Optional)"
          helperText="Optional field"
        />
        <Select
          label="Complexion"
          name="complexion"
          value={data.complexion || ''}
          onChange={handleChange}
          options={COMPLEXION}
          placeholder="Select complexion"
          helperText="Optional field"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Blood Group"
          name="bloodGroup"
          value={data.bloodGroup || ''}
          onChange={handleChange}
          placeholder="e.g., O+ (Optional)"
          helperText="Optional field"
          maxLength={5}
        />
        <Input
          label="Physical Status"
          name="physicalStatus"
          value={data.physicalStatus || ''}
          onChange={handleChange}
          placeholder="e.g., Normal (Optional)"
          helperText="Optional field"
        />
      </div>

      <Select
        label="Marital Status"
        name="maritalStatus"
        value={data.maritalStatus || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        options={MARITAL_STATUS}
        placeholder="Select marital status"
        required
        error={touched.has('maritalStatus') ? errors.maritalStatus : undefined}
        success={!!data.maritalStatus && !errors.maritalStatus}
      />

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Mother Tongue"
          name="motherTongue"
          value={data.motherTongue || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g., Hindi"
          required
          error={touched.has('motherTongue') ? errors.motherTongue : undefined}
          success={!!data.motherTongue && !errors.motherTongue}
        />
        <Select
          label="Religion"
          name="religion"
          value={data.religion || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          options={RELIGIONS}
          placeholder="Select religion"
          required
          error={touched.has('religion') ? errors.religion : undefined}
          success={!!data.religion && !errors.religion}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Caste"
          name="caste"
          value={data.caste || ''}
          onChange={handleChange}
          placeholder="Optional"
          helperText="Optional field"
        />
        <Input
          label="Sub Caste"
          name="subCaste"
          value={data.subCaste || ''}
          onChange={handleChange}
          placeholder="Optional"
          helperText="Optional field"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Gotra"
          name="gotra"
          value={data.gotra || ''}
          onChange={handleChange}
          placeholder="Optional"
          helperText="Optional field"
        />
        <Select
          label="Manglik"
          name="manglik"
          value={data.manglik || ''}
          onChange={handleChange}
          options={MANGLIK_OPTIONS}
          placeholder="Select option"
          helperText="Optional field"
        />
      </div>
    </div>
  );
};
