import { ChangeEvent } from 'react';
import { HoroscopeDetails } from '../../types/biodata';
import { Input, TextArea } from '../FormElements';

interface HoroscopeDetailsFormProps {
  data: Partial<HoroscopeDetails>;
  onChange: (data: Partial<HoroscopeDetails>) => void;
}

export const HoroscopeDetailsForm = ({
  data,
  onChange,
}: HoroscopeDetailsFormProps) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Horoscope Details
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        All fields in this section are optional. Fill only if applicable.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Rashi (Moon Sign)"
          name="rashi"
          value={data.rashi || ''}
          onChange={handleChange}
          placeholder="e.g., Vrishabha"
        />
        <Input
          label="Nakshatra (Birth Star)"
          name="nakshatra"
          value={data.nakshatra || ''}
          onChange={handleChange}
          placeholder="e.g., Rohini"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Input
          label="Gan"
          name="gan"
          value={data.gan || ''}
          onChange={handleChange}
          placeholder="e.g., Dev"
        />
        <Input
          label="Nadi"
          name="nadi"
          value={data.nadi || ''}
          onChange={handleChange}
          placeholder="e.g., Madhya"
        />
        <Input
          label="Charan"
          name="charan"
          value={data.charan || ''}
          onChange={handleChange}
          placeholder="e.g., 2"
        />
      </div>

      <Input
        label="Birth Star"
        name="birthStar"
        value={data.birthStar || ''}
        onChange={handleChange}
        placeholder="Enter birth star"
      />

      <Input
        label="Horoscope Match Required"
        name="horoscopeMatch"
        value={data.horoscopeMatch || ''}
        onChange={handleChange}
        placeholder="e.g., Yes / No / Flexible"
      />

      <TextArea
        label="Additional Horoscope Information"
        name="additionalInfo"
        value={data.additionalInfo || ''}
        onChange={handleChange}
        placeholder="Any other astrological details or special considerations..."
        rows={3}
      />
    </div>
  );
};
