import { BiodataData, TemplateCustomization } from '../../types/biodata';
import { isEmpty, formatDate } from '../../utils/helpers';

interface TemplateProps {
  data: Partial<BiodataData>;
  customization: TemplateCustomization;
}

export const TraditionalRoyalTemplate = ({ data, customization }: TemplateProps) => {
  const { personal, education, family, lifestyle, horoscope, contact } = data;

  const Field = ({ label, value }: { label: string; value?: string }) => {
    if (isEmpty(value)) return null;
    return (
      <div className="flex py-1.5">
        <span className="text-amber-100 font-medium w-48 flex-shrink-0">{label}</span>
        <span className="text-white">: {value}</span>
      </div>
    );
  };

  const TextBlock = ({ title, content }: { title: string; content?: string }) => {
    if (isEmpty(content)) return null;
    return (
      <div className="mt-4 bg-white bg-opacity-10 p-4 rounded-lg">
        <p className="text-amber-200 font-semibold mb-2">{title}:</p>
        <p className="text-white leading-relaxed">{content}</p>
      </div>
    );
  };

  return (
    <div
      className="max-w-4xl mx-auto bg-gradient-to-br shadow-2xl relative overflow-hidden"
      style={{
        backgroundColor: customization.primaryColor,
        fontFamily: customization.fontFamily,
        backgroundImage: 'linear-gradient(135deg, #8b1538 0%, #c41e3a 50%, #8b1538 100%)'
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="paisley" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.3"/>
          </pattern>
          <rect width="100" height="100" fill="url(#paisley)"/>
        </svg>
      </div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-20"></div>
      <div className="absolute top-4 left-4 right-4 flex justify-between">
        <div className="text-amber-400 text-6xl opacity-50">❦</div>
        <div className="text-amber-400 text-6xl opacity-50">❦</div>
      </div>

      <div className="relative z-10 text-center py-8 px-8">
        <div className="text-5xl mb-3 text-amber-300">🕉️</div>
        <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          Marriage Biodata
        </h1>
        <div className="text-2xl text-amber-200 mb-2">॥ श्री गणेशाय नमः ॥</div>
        {personal?.fullName && (
          <div className="mt-4 text-3xl font-semibold text-amber-100">
            {personal.fullName}
          </div>
        )}
      </div>

      <div className="relative z-10 bg-gradient-to-br from-red-900 to-red-950 mx-8 mb-8 rounded-lg p-8 shadow-2xl border border-amber-600">
        <div className="flex flex-col md:flex-row gap-8">
          {customization.showPhoto && data.profilePhoto && (
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-30"></div>
                <img
                  src={data.profilePhoto}
                  alt="Profile"
                  className="relative w-48 h-48 object-cover rounded-full border-4 border-amber-400 shadow-2xl"
                />
              </div>
            </div>
          )}

          <div className="flex-grow text-white">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-amber-300 border-b-2 border-amber-600 pb-2">
                Personal Details
              </h3>
              <Field label="Date of Birth" value={personal?.dateOfBirth ? formatDate(personal.dateOfBirth) : ''} />
              <Field label="Time of Birth" value={personal?.timeOfBirth} />
              <Field label="Place of Birth" value={personal?.placeOfBirth} />
              <Field label="Age / Height" value={personal?.age && personal?.height ? `${personal.age} years / ${personal.height}` : personal?.age || personal?.height} />
              <Field label="Complexion" value={personal?.complexion} />
              <Field label="Blood Group" value={personal?.bloodGroup} />
              <Field label="Marital Status" value={personal?.maritalStatus} />
              <Field label="Religion" value={personal?.religion} />
              <Field label="Caste" value={personal?.caste} />
              <Field label="Gotra" value={personal?.gotra} />
              <Field label="Manglik" value={personal?.manglik} />
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-amber-300 border-b-2 border-amber-600 pb-2">
                Education & Career
              </h3>
              <Field label="Qualification" value={education?.highestQualification} />
              <Field label="Profession" value={education?.profession} />
              <Field label="Company" value={education?.companyName} />
              <Field label="Income" value={education?.annualIncome} />
              <Field label="Location" value={education?.workLocation} />
              <TextBlock title="About Profession" content={education?.aboutProfession} />
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-amber-300 border-b-2 border-amber-600 pb-2">
                Family Details
              </h3>
              <Field label="Father's Name" value={family?.fatherName} />
              <Field label="Father's Occupation" value={family?.fatherOccupation} />
              <Field label="Mother's Name" value={family?.motherName} />
              <Field label="Mother's Occupation" value={family?.motherOccupation} />
              <Field label="Siblings" value={family?.siblings} />
              <Field label="Family Type" value={family?.familyType} />
              <Field label="Family Values" value={family?.familyValues} />
              <TextBlock title="About Family" content={family?.aboutFamily} />
            </div>

            {horoscope && Object.values(horoscope).some(v => !isEmpty(v)) && (
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-amber-300 border-b-2 border-amber-600 pb-2">
                  Horoscope Details
                </h3>
                <Field label="Rashi" value={horoscope.rashi} />
                <Field label="Nakshatra" value={horoscope.nakshatra} />
                <Field label="Gan" value={horoscope.gan} />
                <Field label="Nadi" value={horoscope.nadi} />
              </div>
            )}

            {lifestyle?.aboutMe && (
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-amber-300 border-b-2 border-amber-600 pb-2">
                  About Me
                </h3>
                <TextBlock title="Personal" content={lifestyle.aboutMe} />
                <TextBlock title="Partner Expectations" content={lifestyle.partnerExpectations} />
              </div>
            )}

            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-300 border-b-2 border-amber-600 pb-2">
                Contact Information
              </h3>
              <Field label="Mobile" value={contact?.mobileNumber} />
              <Field label="Email" value={contact?.email} />
              <Field label="City" value={contact?.city} />
              <Field label="State" value={contact?.state} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center pb-8 px-8">
        <div className="border-t-2 border-amber-600 pt-6">
          <div className="text-amber-300 text-xl mb-2">May Lord Ganesha Bless This Union</div>
          <div className="text-amber-400 text-3xl">🪷</div>
        </div>
      </div>
    </div>
  );
};
