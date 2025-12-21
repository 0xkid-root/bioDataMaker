import { BiodataData, TemplateCustomization } from '../../types/biodata';
import { isEmpty, formatDate } from '../../utils/helpers';

interface TemplateProps {
  data: Partial<BiodataData>;
  customization: TemplateCustomization;
}

export const TraditionalTemplate2 = ({ data, customization }: TemplateProps) => {
  const { personal, education, family, lifestyle, horoscope, contact } = data;

  const Field = ({ label, value }: { label: string; value?: string }) => {
    if (isEmpty(value)) return null;
    return (
      <div className="flex py-1.5">
        <span className="font-semibold text-amber-100 w-48 flex-shrink-0">{label}</span>
        <span className="text-amber-50">: {value}</span>
      </div>
    );
  };

  const TextBlock = ({ title, content }: { title: string; content?: string }) => {
    if (isEmpty(content)) return null;
    return (
      <div className="mt-3 p-4 bg-white bg-opacity-10 rounded-lg">
        <p className="font-semibold text-amber-100 mb-2">{title}:</p>
        <p className="text-amber-50 leading-relaxed">{content}</p>
      </div>
    );
  };

  return (
    <div
      className="max-w-4xl mx-auto bg-gradient-to-br from-red-900 via-red-800 to-red-900 shadow-2xl relative overflow-hidden"
      style={{ fontFamily: customization.fontFamily }}
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 1200">
          <pattern id="paisley" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M50,100 Q30,80 40,60 Q50,40 70,50 Q90,60 80,80 Q70,100 50,100 Z" fill="currentColor" opacity="0.3"/>
          </pattern>
          <rect width="800" height="1200" fill="url(#paisley)"/>
        </svg>
      </div>

      <div className="relative">
        <div className="bg-gradient-to-r from-amber-600 to-amber-500 py-6 px-8 text-center shadow-lg">
          <div className="text-5xl mb-3 text-white drop-shadow-lg">🕉</div>
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Marriage Biodata</h1>
          <p className="text-2xl text-amber-100 font-semibold">॥ श्री गणेशाय नमः ॥</p>
        </div>

        <div className="p-8 text-amber-50">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {customization.showPhoto && data.profilePhoto && (
              <div className="flex-shrink-0 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500 rounded-full blur-xl opacity-30"></div>
                  <img
                    src={data.profilePhoto}
                    alt="Profile"
                    className="relative w-48 h-48 object-cover rounded-full border-4 border-amber-400 shadow-xl"
                  />
                </div>
              </div>
            )}

            <div className="flex-grow">
              {personal?.fullName && (
                <h2 className="text-3xl font-bold mb-6 text-amber-100 text-center md:text-left">
                  {personal.fullName}
                </h2>
              )}

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 shadow-xl mb-6">
                <h3 className="text-2xl font-bold mb-4 text-amber-300 border-b-2 border-amber-500 pb-2">
                  Personal Details
                </h3>
                <Field label="Date of Birth" value={personal?.dateOfBirth ? formatDate(personal.dateOfBirth) : ''} />
                <Field label="Time of Birth" value={personal?.timeOfBirth} />
                <Field label="Place of Birth" value={personal?.placeOfBirth} />
                <Field label="Age" value={personal?.age} />
                <Field label="Height" value={personal?.height} />
                <Field label="Complexion" value={personal?.complexion} />
                <Field label="Blood Group" value={personal?.bloodGroup} />
                <Field label="Marital Status" value={personal?.maritalStatus} />
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-amber-300 border-b-2 border-amber-500 pb-2">
                  Religious Details
                </h3>
                <Field label="Religion" value={personal?.religion} />
                <Field label="Caste" value={personal?.caste} />
                <Field label="Sub Caste" value={personal?.subCaste} />
                <Field label="Gotra" value={personal?.gotra} />
                <Field label="Mother Tongue" value={personal?.motherTongue} />
                <Field label="Manglik" value={personal?.manglik} />
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 shadow-xl mb-6">
            <h3 className="text-2xl font-bold mb-4 text-amber-300 border-b-2 border-amber-500 pb-2">
              Education & Profession
            </h3>
            <Field label="Qualification" value={education?.highestQualification} />
            <Field label="Institute" value={education?.instituteName} />
            <Field label="Profession" value={education?.profession} />
            <Field label="Company" value={education?.companyName} />
            <Field label="Designation" value={education?.designation} />
            <Field label="Annual Income" value={education?.annualIncome} />
            <Field label="Work Location" value={education?.workLocation} />
            <TextBlock title="About Profession" content={education?.aboutProfession} />
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 shadow-xl mb-6">
            <h3 className="text-2xl font-bold mb-4 text-amber-300 border-b-2 border-amber-500 pb-2">
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
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 shadow-xl mb-6">
              <h3 className="text-2xl font-bold mb-4 text-amber-300 border-b-2 border-amber-500 pb-2">
                Horoscope Details
              </h3>
              <div className="grid md:grid-cols-2 gap-x-8">
                <Field label="Rashi" value={horoscope.rashi} />
                <Field label="Nakshatra" value={horoscope.nakshatra} />
                <Field label="Gan" value={horoscope.gan} />
                <Field label="Nadi" value={horoscope.nadi} />
                <Field label="Birth Star" value={horoscope.birthStar} />
                <Field label="Horoscope Match" value={horoscope.horoscopeMatch} />
              </div>
              <TextBlock title="Additional Information" content={horoscope.additionalInfo} />
            </div>
          )}

          {(lifestyle?.aboutMe || lifestyle?.partnerExpectations) && (
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 shadow-xl mb-6">
              <h3 className="text-2xl font-bold mb-4 text-amber-300 border-b-2 border-amber-500 pb-2">
                Lifestyle & Expectations
              </h3>
              <Field label="Diet" value={lifestyle?.diet} />
              <Field label="Hobbies" value={lifestyle?.hobbies} />
              <Field label="Interests" value={lifestyle?.interests} />
              <TextBlock title="About Me" content={lifestyle?.aboutMe} />
              <TextBlock title="Partner Expectations" content={lifestyle?.partnerExpectations} />
            </div>
          )}

          <div className="bg-amber-600 rounded-lg p-6 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-white border-b-2 border-amber-400 pb-2">
              Contact Information
            </h3>
            <Field label="Mobile" value={contact?.mobileNumber} />
            <Field label="Email" value={contact?.email} />
            <Field label="Address" value={contact?.address} />
            <Field label="City / State" value={contact?.city && contact?.state ? `${contact.city}, ${contact.state}` : contact?.city || contact?.state} />
            <Field label="Contact Person" value={contact?.contactPerson} />
          </div>
        </div>
      </div>
    </div>
  );
};
