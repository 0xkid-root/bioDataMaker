import { BiodataData, TemplateCustomization } from '../../types/biodata';
import { isEmpty, formatDate } from '../../utils/helpers';

interface TemplateProps {
  data: Partial<BiodataData>;
  customization: TemplateCustomization;
}

export const MinimalTemplate2 = ({ data, customization }: TemplateProps) => {
  const { personal, education, family, lifestyle, horoscope, contact } = data;

  const DataRow = ({ label, value }: { label: string; value?: string }) => {
    if (isEmpty(value)) return null;
    return (
      <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100 last:border-0">
        <span className="text-gray-500 text-sm col-span-1">{label}</span>
        <span className="text-gray-900 font-medium col-span-2">{value}</span>
      </div>
    );
  };

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
      <div className="mb-8">
        <div className="mb-4">
          <h3
            className="text-lg font-bold mb-3 tracking-wide uppercase"
            style={{ color: customization.primaryColor }}
          >
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-16 rounded-full" style={{ backgroundColor: customization.primaryColor }}></div>
            <div className="h-0.5 flex-1 rounded-full bg-gray-200"></div>
          </div>
        </div>
        {children}
      </div>
    );
  };

  const TextBlock = ({ content }: { content?: string }) => {
    if (isEmpty(content)) return null;
    return (
      <div className="mt-4 pl-4 border-l-2" style={{ borderColor: customization.primaryColor }}>
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    );
  };

  return (
    <div
      className="max-w-4xl mx-auto bg-white shadow-lg"
      style={{ fontFamily: customization.fontFamily }}
    >
      <div className="border-b-4" style={{ borderColor: customization.primaryColor }}>
        <div className="p-12 text-center">
          {customization.showPhoto && data.profilePhoto && (
            <div className="flex justify-center mb-6">
              <img
                src={data.profilePhoto}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
              />
            </div>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {personal?.fullName || 'Your Name'}
          </h1>
          <div className="flex items-center justify-center gap-6 text-gray-600">
            {personal?.age && <span className="text-lg">{personal.age} years</span>}
            {personal?.height && <span className="text-lg">{personal.height}</span>}
            {education?.profession && <span className="text-lg">{education.profession}</span>}
          </div>
        </div>
      </div>

      <div className="p-12">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <Section title="Personal Information">
              <DataRow label="Date of Birth" value={personal?.dateOfBirth ? formatDate(personal.dateOfBirth) : ''} />
              <DataRow label="Birth Place" value={personal?.placeOfBirth} />
              <DataRow label="Birth Time" value={personal?.timeOfBirth} />
              <DataRow label="Height" value={personal?.height} />
              <DataRow label="Weight" value={personal?.weight} />
              <DataRow label="Complexion" value={personal?.complexion} />
              <DataRow label="Blood Group" value={personal?.bloodGroup} />
              <DataRow label="Marital Status" value={personal?.maritalStatus} />
            </Section>
          </div>

          <div>
            <Section title="Religious Background">
              <DataRow label="Religion" value={personal?.religion} />
              <DataRow label="Caste" value={personal?.caste} />
              <DataRow label="Sub Caste" value={personal?.subCaste} />
              <DataRow label="Gotra" value={personal?.gotra} />
              <DataRow label="Mother Tongue" value={personal?.motherTongue} />
              <DataRow label="Manglik" value={personal?.manglik} />
            </Section>
          </div>
        </div>

        <Section title="Education & Career">
          <div className="grid md:grid-cols-2 gap-x-8">
            <DataRow label="Qualification" value={education?.highestQualification} />
            <DataRow label="Institute" value={education?.instituteName} />
            <DataRow label="Profession" value={education?.profession} />
            <DataRow label="Company" value={education?.companyName} />
            <DataRow label="Designation" value={education?.designation} />
            <DataRow label="Income" value={education?.annualIncome} />
            <DataRow label="Location" value={education?.workLocation} />
          </div>
          <TextBlock content={education?.aboutProfession} />
        </Section>

        <Section title="Family Background">
          <div className="grid md:grid-cols-2 gap-x-8">
            <DataRow label="Father's Name" value={family?.fatherName} />
            <DataRow label="Father's Work" value={family?.fatherOccupation} />
            <DataRow label="Mother's Name" value={family?.motherName} />
            <DataRow label="Mother's Work" value={family?.motherOccupation} />
            <DataRow label="Siblings" value={family?.siblings} />
            <DataRow label="Family Type" value={family?.familyType} />
            <DataRow label="Family Status" value={family?.familyStatus} />
            <DataRow label="Values" value={family?.familyValues} />
          </div>
          <TextBlock content={family?.aboutFamily} />
        </Section>

        {(lifestyle?.aboutMe || lifestyle?.partnerExpectations || lifestyle?.diet) && (
          <Section title="Lifestyle & Preferences">
            <div className="grid md:grid-cols-3 gap-x-8">
              <DataRow label="Diet" value={lifestyle?.diet} />
              <DataRow label="Drinking" value={lifestyle?.drinking} />
              <DataRow label="Smoking" value={lifestyle?.smoking} />
              <DataRow label="Hobbies" value={lifestyle?.hobbies} />
              <DataRow label="Interests" value={lifestyle?.interests} />
            </div>
            {lifestyle?.aboutMe && (
              <>
                <h4 className="font-semibold text-gray-900 mt-6 mb-2">About</h4>
                <TextBlock content={lifestyle.aboutMe} />
              </>
            )}
            {lifestyle?.partnerExpectations && (
              <>
                <h4 className="font-semibold text-gray-900 mt-6 mb-2">Partner Expectations</h4>
                <TextBlock content={lifestyle.partnerExpectations} />
              </>
            )}
          </Section>
        )}

        {horoscope && Object.values(horoscope).some(v => !isEmpty(v)) && (
          <Section title="Horoscope Details">
            <div className="grid md:grid-cols-3 gap-x-8">
              <DataRow label="Rashi" value={horoscope.rashi} />
              <DataRow label="Nakshatra" value={horoscope.nakshatra} />
              <DataRow label="Gan" value={horoscope.gan} />
              <DataRow label="Nadi" value={horoscope.nadi} />
              <DataRow label="Charan" value={horoscope.charan} />
              <DataRow label="Birth Star" value={horoscope.birthStar} />
            </div>
          </Section>
        )}

        <div className="mt-12 pt-8 border-t-2" style={{ borderColor: customization.primaryColor }}>
          <Section title="Contact Details">
            <div className="grid md:grid-cols-2 gap-x-8">
              <DataRow label="Mobile" value={contact?.mobileNumber} />
              <DataRow label="Alternate" value={contact?.alternateNumber} />
              <DataRow label="Email" value={contact?.email} />
              <DataRow label="WhatsApp" value={contact?.whatsappNumber} />
              <DataRow label="Address" value={contact?.address} />
              <DataRow label="City" value={contact?.city} />
              <DataRow label="State" value={contact?.state} />
              <DataRow label="Pincode" value={contact?.pincode} />
              <DataRow label="Contact Person" value={contact?.contactPerson} />
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};
