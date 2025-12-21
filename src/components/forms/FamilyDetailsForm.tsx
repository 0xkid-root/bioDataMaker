import { ChangeEvent } from 'react';
import { FamilyDetails } from '../../types/biodata';
import { Input, Select, TextArea } from '../FormElements';
import { FAMILY_TYPE, FAMILY_STATUS, FAMILY_VALUES } from '../../utils/constants';

interface FamilyDetailsFormProps {
  data: Partial<FamilyDetails>;
  onChange: (data: Partial<FamilyDetails>) => void;
  onAiAssist?: (field: string, currentValue: string) => void;
}

export const FamilyDetailsForm = ({
  data,
  onChange,
  onAiAssist,
}: FamilyDetailsFormProps) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Family Information
      </h3>

      <Input
        label="Father's Name"
        name="fatherName"
        value={data.fatherName || ''}
        onChange={handleChange}
        placeholder="Enter father's name"
        required
      />

      <Input
        label="Father's Occupation"
        name="fatherOccupation"
        value={data.fatherOccupation || ''}
        onChange={handleChange}
        placeholder="e.g., Business Owner (Optional)"
      />

      <Input
        label="Mother's Name"
        name="motherName"
        value={data.motherName || ''}
        onChange={handleChange}
        placeholder="Enter mother's name"
        required
      />

      <Input
        label="Mother's Occupation"
        name="motherOccupation"
        value={data.motherOccupation || ''}
        onChange={handleChange}
        placeholder="e.g., Homemaker (Optional)"
      />

      <Input
        label="Siblings"
        name="siblings"
        value={data.siblings || ''}
        onChange={handleChange}
        placeholder="e.g., 1 Brother (Married), 1 Sister"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <Select
          label="Family Type"
          name="familyType"
          value={data.familyType || ''}
          onChange={handleChange}
          options={FAMILY_TYPE}
          placeholder="Select family type"
        />
        <Select
          label="Family Status"
          name="familyStatus"
          value={data.familyStatus || ''}
          onChange={handleChange}
          options={FAMILY_STATUS}
          placeholder="Select family status"
        />
      </div>

      <Select
        label="Family Values"
        name="familyValues"
        value={data.familyValues || ''}
        onChange={handleChange}
        options={FAMILY_VALUES}
        placeholder="Select family values"
      />

      <TextArea
        label="About Family"
        name="aboutFamily"
        value={data.aboutFamily || ''}
        onChange={handleChange}
        placeholder="Describe your family background, traditions, and values..."
        rows={4}
        aiAssist={true}
        onAiAssist={() =>
          onAiAssist?.('aboutFamily', data.aboutFamily || '')
        }
      />
    </div>
  );
};
