import { BiodataData, TemplateCustomization } from '../../types/biodata';
import { isEmpty, formatDate } from '../../utils/helpers';

interface TemplateProps {
  data: Partial<BiodataData>;
  customization: TemplateCustomization;
}

export const SimpleTemplate = ({ data, customization }: TemplateProps) => {
  const { personal, education, family, lifestyle, horoscope, contact } = data;
  const templateId = customization.templateId;

  const Field = ({ label, value }: { label: string; value?: string }) => {
    if (isEmpty(value)) return null;
    return (
      <div className="flex items-baseline mb-2 flex-wrap print:flex-nowrap">
        <span className="font-semibold text-gray-700 flex-shrink-0 mr-2 whitespace-nowrap">{label}:</span>
        <span className="text-gray-900 break-words">{value}</span>
      </div>
    );
  };

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
    if (!children) return null;
    return (
      <div className="mb-8">
        <h3
          className="text-lg font-bold mb-4 text-gray-900"
        >
          {title}
        </h3>
        {children}
      </div>
    );
  };

  return (
    <div
      className="max-w-4xl mx-auto bg-white shadow-lg"
      style={{ fontFamily: customization.fontFamily }}
    >
      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          {customization.showPhoto && data.profilePhoto && (
            <div className="flex justify-center mb-4">
              <img
                src={data.profilePhoto}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full border-4"
                style={{ borderColor: customization.primaryColor }}
              />
            </div>
          )}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {personal?.fullName || 'Your Name'}
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            {personal?.age && <span>{personal.age} years</span>}
            {personal?.age && personal?.height && <span>•</span>}
            {personal?.height && <span>{personal.height}</span>}
            {(personal?.age || personal?.height) && education?.profession && <span>•</span>}
            {education?.profession && <span>{education.profession}</span>}
          </div>
        </div>

        {/* Personal Details */}
        <Section title="Personal">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Field label="Date of Birth" value={personal?.dateOfBirth ? formatDate(personal.dateOfBirth) : ''} />
              <Field label="Place of Birth" value={personal?.placeOfBirth} />
              <Field label="Time of Birth" value={personal?.timeOfBirth} />
              <Field label="Height" value={personal?.height} />
              <Field label="Weight" value={personal?.weight} />
              <Field label="Complexion" value={personal?.complexion} />
              <Field label="Blood Group" value={personal?.bloodGroup} />
              <Field label="Marital Status" value={personal?.maritalStatus} />
            </div>
            <div>
              <Field label="Religion" value={personal?.religion} />
              <Field label="Caste" value={personal?.caste} />
              <Field label="Sub Caste" value={personal?.subCaste} />
              <Field label="Gotra" value={personal?.gotra} />
              <Field label="Mother Tongue" value={personal?.motherTongue} />
              <Field label="Manglik" value={personal?.manglik} />
              <Field label="Physical Status" value={personal?.physicalStatus} />
            </div>
          </div>
        </Section>

        {/* Education & Career */}
        <Section title="Education & Career">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Field label="Qualification" value={education?.highestQualification} />
              <Field label="Institute" value={education?.instituteName} />
              <Field label="Profession" value={education?.profession} />
            </div>
            <div>
              <Field label="Company" value={education?.companyName} />
              <Field label="Designation" value={education?.designation} />
              <Field label="Annual Income" value={education?.annualIncome} />
              <Field label="Work Location" value={education?.workLocation} />
            </div>
          </div>
          {education?.aboutProfession && (
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p className="text-gray-700">{education.aboutProfession}</p>
            </div>
          )}
        </Section>

        {/* Family Details */}
        <Section title="Family Details">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Field label="Father's Name" value={family?.fatherName} />
              <Field label="Father's Occupation" value={family?.fatherOccupation} />
              <Field label="Mother's Name" value={family?.motherName} />
              <Field label="Mother's Occupation" value={family?.motherOccupation} />
            </div>
            <div>
              <Field label="Siblings" value={family?.siblings} />
              <Field label="Family Type" value={family?.familyType} />
              <Field label="Family Status" value={family?.familyStatus} />
              <Field label="Family Values" value={family?.familyValues} />
            </div>
          </div>
          {family?.aboutFamily && (
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p className="text-gray-700">{family.aboutFamily}</p>
            </div>
          )}
        </Section>

        {/* Lifestyle */}
        {(lifestyle?.diet || lifestyle?.aboutMe || lifestyle?.hobbies) && (
          <Section title="Lifestyle">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Diet" value={lifestyle?.diet} />
              <Field label="Drinking" value={lifestyle?.drinking} />
              <Field label="Smoking" value={lifestyle?.smoking} />
              <Field label="Hobbies" value={lifestyle?.hobbies} />
            </div>
            {lifestyle?.aboutMe && (
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <p className="font-semibold text-gray-700 mb-2">About Me:</p>
                <p className="text-gray-700">{lifestyle.aboutMe}</p>
              </div>
            )}
            {lifestyle?.partnerExpectations && (
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <p className="font-semibold text-gray-700 mb-2">Partner Expectations:</p>
                <p className="text-gray-700">{lifestyle.partnerExpectations}</p>
              </div>
            )}
          </Section>
        )}

        {/* Horoscope */}
        {horoscope && Object.values(horoscope).some(v => !isEmpty(v)) && (
          <Section title="Horoscope Details">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Rashi" value={horoscope.rashi} />
              <Field label="Nakshatra" value={horoscope.nakshatra} />
              <Field label="Gan" value={horoscope.gan} />
              <Field label="Nadi" value={horoscope.nadi} />
              <Field label="Charan" value={horoscope.charan} />
              <Field label="Birth Star" value={horoscope.birthStar} />
            </div>
            {horoscope.additionalInfo && (
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <p className="text-gray-700">{horoscope.additionalInfo}</p>
              </div>
            )}
          </Section>
        )}

        {/* Contact Information */}
        <Section title="Contact Information">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Field label="Mobile" value={contact?.mobileNumber} />
              <Field label="Alternate Mobile" value={contact?.alternateNumber} />
              <Field label="Email" value={contact?.email} />
              <Field label="WhatsApp" value={contact?.whatsappNumber} />
            </div>
            <div>
              <Field label="Address" value={contact?.address} />
              <Field label="City" value={contact?.city} />
              <Field label="State" value={contact?.state} />
              <Field label="Pincode" value={contact?.pincode} />
              <Field label="Contact Person" value={contact?.contactPerson} />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

