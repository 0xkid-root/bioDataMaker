import { ChangeEvent } from 'react';
import { PersonalDetails } from '../../types/biodata';
import { Input, Select } from '../FormElements';
import { MARITAL_STATUS, COMPLEXION, RELIGIONS, MANGLIK_OPTIONS } from '../../utils/constants';

interface PersonalDetailsFormProps {
  data: Partial<PersonalDetails>;
  onChange: (data: Partial<PersonalDetails>) => void;
}

export const PersonalDetailsForm = ({ data, onChange }: PersonalDetailsFormProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>

      <Input
        label="Full Name"
        name="fullName"
        value={data.fullName || ''}
        onChange={handleChange}
        placeholder="Enter full name"
        required
      />

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          value={data.dateOfBirth || ''}
          onChange={handleChange}
          required
        />
        <Input
          label="Time of Birth"
          name="timeOfBirth"
          type="time"
          value={data.timeOfBirth || ''}
          onChange={handleChange}
          placeholder="Optional"
        />
      </div>

      <Input
        label="Place of Birth"
        name="placeOfBirth"
        value={data.placeOfBirth || ''}
        onChange={handleChange}
        placeholder="City, State"
        required
      />

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Age"
          name="age"
          type="number"
          value={data.age || ''}
          onChange={handleChange}
          placeholder="e.g., 28"
          required
        />
        <Input
          label="Height"
          name="height"
          value={data.height || ''}
          onChange={handleChange}
          placeholder="e.g., 5'6&quot; or 168 cm"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Weight"
          name="weight"
          value={data.weight || ''}
          onChange={handleChange}
          placeholder="e.g., 65 kg (Optional)"
        />
        <Select
          label="Complexion"
          name="complexion"
          value={data.complexion || ''}
          onChange={handleChange}
          options={COMPLEXION}
          placeholder="Select complexion"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Blood Group"
          name="bloodGroup"
          value={data.bloodGroup || ''}
          onChange={handleChange}
          placeholder="e.g., O+ (Optional)"
        />
        <Input
          label="Physical Status"
          name="physicalStatus"
          value={data.physicalStatus || ''}
          onChange={handleChange}
          placeholder="e.g., Normal (Optional)"
        />
      </div>

      <Select
        label="Marital Status"
        name="maritalStatus"
        value={data.maritalStatus || ''}
        onChange={handleChange}
        options={MARITAL_STATUS}
        placeholder="Select marital status"
        required
      />

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Mother Tongue"
          name="motherTongue"
          value={data.motherTongue || ''}
          onChange={handleChange}
          placeholder="e.g., Hindi"
          required
        />
        <Select
          label="Religion"
          name="religion"
          value={data.religion || ''}
          onChange={handleChange}
          options={RELIGIONS}
          placeholder="Select religion"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Caste"
          name="caste"
          value={data.caste || ''}
          onChange={handleChange}
          placeholder="Optional"
        />
        <Input
          label="Sub Caste"
          name="subCaste"
          value={data.subCaste || ''}
          onChange={handleChange}
          placeholder="Optional"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Gotra"
          name="gotra"
          value={data.gotra || ''}
          onChange={handleChange}
          placeholder="Optional"
        />
        <Select
          label="Manglik"
          name="manglik"
          value={data.manglik || ''}
          onChange={handleChange}
          options={MANGLIK_OPTIONS}
          placeholder="Select option"
        />
      </div>
    </div>
  );
};
