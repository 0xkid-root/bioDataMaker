import { ChangeEvent } from 'react';
import { LifestylePreferences } from '../../types/biodata';
import { Input, Select, TextArea } from '../FormElements';
import { DIET, HABITS } from '../../utils/constants';

interface LifestylePreferencesFormProps {
  data: Partial<LifestylePreferences>;
  onChange: (data: Partial<LifestylePreferences>) => void;
  onAiAssist?: (field: string, currentValue: string) => void;
}

export const LifestylePreferencesForm = ({
  data,
  onChange,
  onAiAssist,
}: LifestylePreferencesFormProps) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Lifestyle & Preferences
      </h3>

      <div className="grid md:grid-cols-3 gap-4">
        <Select
          label="Diet"
          name="diet"
          value={data.diet || ''}
          onChange={handleChange}
          options={DIET}
          placeholder="Select diet"
        />
        <Select
          label="Drinking"
          name="drinking"
          value={data.drinking || ''}
          onChange={handleChange}
          options={HABITS}
          placeholder="Select option"
        />
        <Select
          label="Smoking"
          name="smoking"
          value={data.smoking || ''}
          onChange={handleChange}
          options={HABITS}
          placeholder="Select option"
        />
      </div>

      <Input
        label="Hobbies"
        name="hobbies"
        value={data.hobbies || ''}
        onChange={handleChange}
        placeholder="e.g., Reading, Traveling, Music"
      />

      <Input
        label="Interests"
        name="interests"
        value={data.interests || ''}
        onChange={handleChange}
        placeholder="e.g., Photography, Cooking, Sports"
      />

      <TextArea
        label="About Me"
        name="aboutMe"
        value={data.aboutMe || ''}
        onChange={handleChange}
        placeholder="Tell about yourself, your personality, values, and what makes you unique..."
        rows={4}
        aiAssist={true}
        onAiAssist={() => onAiAssist?.('aboutMe', data.aboutMe || '')}
      />

      <TextArea
        label="Partner Expectations"
        name="partnerExpectations"
        value={data.partnerExpectations || ''}
        onChange={handleChange}
        placeholder="Describe your ideal life partner, their qualities, background, and expectations..."
        rows={4}
        aiAssist={true}
        onAiAssist={() =>
          onAiAssist?.('partnerExpectations', data.partnerExpectations || '')
        }
      />
    </div>
  );
};
