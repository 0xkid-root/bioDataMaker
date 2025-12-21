import { ChangeEvent } from 'react';
import { EducationProfession } from '../../types/biodata';
import { Input, TextArea } from '../FormElements';

interface EducationProfessionFormProps {
  data: Partial<EducationProfession>;
  onChange: (data: Partial<EducationProfession>) => void;
  onAiAssist?: (field: string, currentValue: string) => void;
}

export const EducationProfessionForm = ({
  data,
  onChange,
  onAiAssist,
}: EducationProfessionFormProps) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Education & Career
      </h3>

      <Input
        label="Highest Qualification"
        name="highestQualification"
        value={data.highestQualification || ''}
        onChange={handleChange}
        placeholder="e.g., B.Tech in Computer Science"
        required
      />

      <Input
        label="Institute/University Name"
        name="instituteName"
        value={data.instituteName || ''}
        onChange={handleChange}
        placeholder="e.g., IIT Delhi (Optional)"
      />

      <Input
        label="Profession/Occupation"
        name="profession"
        value={data.profession || ''}
        onChange={handleChange}
        placeholder="e.g., Software Engineer"
        required
      />

      <Input
        label="Company Name"
        name="companyName"
        value={data.companyName || ''}
        onChange={handleChange}
        placeholder="e.g., Google (Optional)"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Designation"
          name="designation"
          value={data.designation || ''}
          onChange={handleChange}
          placeholder="e.g., Senior Developer"
        />
        <Input
          label="Annual Income"
          name="annualIncome"
          value={data.annualIncome || ''}
          onChange={handleChange}
          placeholder="e.g., 15 LPA"
        />
      </div>

      <Input
        label="Work Location"
        name="workLocation"
        value={data.workLocation || ''}
        onChange={handleChange}
        placeholder="e.g., Bangalore, Karnataka"
      />

      <TextArea
        label="About Profession"
        name="aboutProfession"
        value={data.aboutProfession || ''}
        onChange={handleChange}
        placeholder="Brief description of your career, achievements, and future plans..."
        rows={4}
        aiAssist={true}
        onAiAssist={() =>
          onAiAssist?.('aboutProfession', data.aboutProfession || '')
        }
      />
    </div>
  );
};
