import { ChangeEvent } from 'react';
import { ContactInformation } from '../../types/biodata';
import { Input, TextArea } from '../FormElements';

interface ContactInformationFormProps {
  data: Partial<ContactInformation>;
  onChange: (data: Partial<ContactInformation>) => void;
}

export const ContactInformationForm = ({
  data,
  onChange,
}: ContactInformationFormProps) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Contact Information
      </h3>

      <Input
        label="Mobile Number"
        name="mobileNumber"
        type="tel"
        value={data.mobileNumber || ''}
        onChange={handleChange}
        placeholder="+91 XXXXX XXXXX"
        required
      />

      <Input
        label="Alternate Number"
        name="alternateNumber"
        type="tel"
        value={data.alternateNumber || ''}
        onChange={handleChange}
        placeholder="Optional"
      />

      <Input
        label="Email Address"
        name="email"
        type="email"
        value={data.email || ''}
        onChange={handleChange}
        placeholder="your.email@example.com"
      />

      <Input
        label="WhatsApp Number"
        name="whatsappNumber"
        type="tel"
        value={data.whatsappNumber || ''}
        onChange={handleChange}
        placeholder="If different from mobile"
      />

      <TextArea
        label="Address"
        name="address"
        value={data.address || ''}
        onChange={handleChange}
        placeholder="House/Flat No, Street, Area"
        rows={2}
      />

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="City"
          name="city"
          value={data.city || ''}
          onChange={handleChange}
          placeholder="Enter city"
          required
        />
        <Input
          label="State"
          name="state"
          value={data.state || ''}
          onChange={handleChange}
          placeholder="Enter state"
          required
        />
      </div>

      <Input
        label="Pincode"
        name="pincode"
        value={data.pincode || ''}
        onChange={handleChange}
        placeholder="6-digit pincode"
      />

      <Input
        label="Contact Person Name"
        name="contactPerson"
        value={data.contactPerson || ''}
        onChange={handleChange}
        placeholder="Name of person to contact (if different)"
      />
    </div>
  );
};
