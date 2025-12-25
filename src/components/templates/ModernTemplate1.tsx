import { BiodataData, TemplateCustomization } from '../../types/biodata';
import { isEmpty, formatDate } from '../../utils/helpers';

interface TemplateProps {
  data: Partial<BiodataData>;
  customization: TemplateCustomization;
}

export const ModernTemplate1 = ({ data, customization }: TemplateProps) => {
  const { personal, education, family, lifestyle, horoscope, contact } = data;

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
    if (!children) return null;
    return (
      <div className="mb-8">
        <div className="mb-4">
          <h3
            className="text-lg font-bold mb-2"
            style={{ color: customization.primaryColor }}
          >
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 rounded-full" style={{ backgroundColor: customization.primaryColor }}></div>
            <div className="h-1 flex-1 rounded-full bg-gray-200"></div>
          </div>
        </div>
        {children}
      </div>
    );
  };

  const Field = ({ label, value }: { label: string; value?: string }) => {
    if (isEmpty(value)) return null;
    return (
      <div className="flex mb-2">
        <span className="font-semibold text-gray-700 w-40 flex-shrink-0">{label}:</span>
        <span className="text-gray-900">{value}</span>
      </div>
    );
  };

  return (
    <div
      className="max-w-4xl mx-auto bg-white shadow-lg"
      style={{ fontFamily: customization.fontFamily }}
    >
      <div
        className="p-8 text-white text-center"
        style={{ backgroundColor: customization.primaryColor }}
      >
        <h1 className="text-3xl font-bold mb-2">Marriage Biodata</h1>
        {personal?.fullName && (
          <h2 className="text-2xl font-semibold">{personal.fullName}</h2>
        )}
      </div>

      <div className="p-8">
        {customization.showPhoto && data.profilePhoto && (
          <div className="flex justify-center mb-6">
            <img
              src={data.profilePhoto}
              alt="Profile"
              className="w-48 h-48 object-cover rounded-lg border-4"
              style={{ borderColor: customization.primaryColor }}
            />
          </div>
        )}

        <Section title="Personal Details">
          <Field label="Full Name" value={personal?.fullName} />
          <Field label="Date of Birth" value={personal?.dateOfBirth ? formatDate(personal.dateOfBirth) : ''} />
          <Field label="Time of Birth" value={personal?.timeOfBirth} />
          <Field label="Place of Birth" value={personal?.placeOfBirth} />
          <Field label="Age" value={personal?.age} />
          <Field label="Height" value={personal?.height} />
          <Field label="Weight" value={personal?.weight} />
          <Field label="Complexion" value={personal?.complexion} />
          <Field label="Blood Group" value={personal?.bloodGroup} />
          <Field label="Physical Status" value={personal?.physicalStatus} />
          <Field label="Marital Status" value={personal?.maritalStatus} />
          <Field label="Mother Tongue" value={personal?.motherTongue} />
          <Field label="Religion" value={personal?.religion} />
          <Field label="Caste" value={personal?.caste} />
          <Field label="Sub Caste" value={personal?.subCaste} />
          <Field label="Gotra" value={personal?.gotra} />
          <Field label="Manglik" value={personal?.manglik} />
        </Section>

        <Section title="Education & Profession">
          <Field label="Qualification" value={education?.highestQualification} />
          <Field label="Institute" value={education?.instituteName} />
          <Field label="Profession" value={education?.profession} />
          <Field label="Company" value={education?.companyName} />
          <Field label="Designation" value={education?.designation} />
          <Field label="Annual Income" value={education?.annualIncome} />
          <Field label="Work Location" value={education?.workLocation} />
          {education?.aboutProfession && (
            <div className="mt-3 p-3 bg-gray-50 rounded">
              <p className="text-gray-700">{education.aboutProfession}</p>
            </div>
          )}
        </Section>

        <Section title="Family Details">
          <Field label="Father's Name" value={family?.fatherName} />
          <Field label="Father's Occupation" value={family?.fatherOccupation} />
          <Field label="Mother's Name" value={family?.motherName} />
          <Field label="Mother's Occupation" value={family?.motherOccupation} />
          <Field label="Siblings" value={family?.siblings} />
          <Field label="Family Type" value={family?.familyType} />
          <Field label="Family Status" value={family?.familyStatus} />
          <Field label="Family Values" value={family?.familyValues} />
          {family?.aboutFamily && (
            <div className="mt-3 p-3 bg-gray-50 rounded">
              <p className="text-gray-700">{family.aboutFamily}</p>
            </div>
          )}
        </Section>

        <Section title="Lifestyle">
          <Field label="Diet" value={lifestyle?.diet} />
          <Field label="Drinking" value={lifestyle?.drinking} />
          <Field label="Smoking" value={lifestyle?.smoking} />
          <Field label="Hobbies" value={lifestyle?.hobbies} />
          <Field label="Interests" value={lifestyle?.interests} />
          {lifestyle?.aboutMe && (
            <div className="mt-3 p-3 bg-gray-50 rounded">
              <p className="font-semibold text-gray-700 mb-2">About Me:</p>
              <p className="text-gray-700">{lifestyle.aboutMe}</p>
            </div>
          )}
          {lifestyle?.partnerExpectations && (
            <div className="mt-3 p-3 bg-gray-50 rounded">
              <p className="font-semibold text-gray-700 mb-2">Partner Expectations:</p>
              <p className="text-gray-700">{lifestyle.partnerExpectations}</p>
            </div>
          )}
        </Section>

        {horoscope && Object.values(horoscope).some(v => !isEmpty(v)) && (
          <Section title="Horoscope Details">
            <Field label="Rashi" value={horoscope.rashi} />
            <Field label="Nakshatra" value={horoscope.nakshatra} />
            <Field label="Gan" value={horoscope.gan} />
            <Field label="Nadi" value={horoscope.nadi} />
            <Field label="Charan" value={horoscope.charan} />
            <Field label="Birth Star" value={horoscope.birthStar} />
            <Field label="Horoscope Match" value={horoscope.horoscopeMatch} />
            {horoscope.additionalInfo && (
              <div className="mt-3 p-3 bg-gray-50 rounded">
                <p className="text-gray-700">{horoscope.additionalInfo}</p>
              </div>
            )}
          </Section>
        )}

        <Section title="Contact Information">
          <Field label="Mobile" value={contact?.mobileNumber} />
          <Field label="Alternate Mobile" value={contact?.alternateNumber} />
          <Field label="Email" value={contact?.email} />
          <Field label="WhatsApp" value={contact?.whatsappNumber} />
          <Field label="Address" value={contact?.address} />
          <Field label="City" value={contact?.city} />
          <Field label="State" value={contact?.state} />
          <Field label="Pincode" value={contact?.pincode} />
          <Field label="Contact Person" value={contact?.contactPerson} />
        </Section>
      </div>
    </div>
  );
};
