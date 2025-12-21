import { BiodataData, TemplateCustomization } from '../../types/biodata';
import { isEmpty, formatDate } from '../../utils/helpers';

interface TemplateProps {
  data: Partial<BiodataData>;
  customization: TemplateCustomization;
}

export const TraditionalTemplate3 = ({ data, customization }: TemplateProps) => {
  const { personal, education, family, lifestyle, horoscope, contact } = data;

  const Field = ({ label, value }: { label: string; value?: string }) => {
    if (isEmpty(value)) return null;
    return (
      <div className="flex py-1.5 border-b border-amber-200 border-opacity-30">
        <span className="font-semibold w-48 flex-shrink-0" style={{ color: '#8B4513' }}>{label}</span>
        <span className="text-gray-800">: {value}</span>
      </div>
    );
  };

  const TextBlock = ({ title, content }: { title: string; content?: string }) => {
    if (isEmpty(content)) return null;
    return (
      <div className="mt-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-l-4 border-amber-600">
        <p className="font-semibold mb-2" style={{ color: '#8B4513' }}>{title}:</p>
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    );
  };

  return (
    <div
      className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 shadow-2xl relative overflow-hidden"
      style={{ fontFamily: customization.fontFamily }}
    >
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-amber-600">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line key={i} x1="100" y1="100" x2={100 + 80 * Math.cos(angle * Math.PI / 180)} y2={100 + 80 * Math.sin(angle * Math.PI / 180)} stroke="currentColor" strokeWidth="0.5"/>
          ))}
        </svg>
      </div>

      <div className="absolute top-20 right-0 w-48 h-48 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-600">
          <path d="M50,30 L65,50 L85,50 L70,65 L75,85 L50,70 L25,85 L30,65 L15,50 L35,50 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative">
        <div className="border-8 border-double border-amber-700 m-4">
          <div className="bg-gradient-to-r from-red-800 via-red-700 to-red-800 py-8 px-8 text-center relative overflow-hidden">
            <div className="absolute top-2 left-8">
              <svg width="60" height="60" viewBox="0 0 100 100" className="text-amber-400 opacity-40">
                <path d="M10,50 Q25,25 50,10 Q75,25 90,50 Q75,75 50,90 Q25,75 10,50" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute top-2 right-8">
              <svg width="60" height="60" viewBox="0 0 100 100" className="text-amber-400 opacity-40">
                <path d="M10,50 Q25,25 50,10 Q75,25 90,50 Q75,75 50,90 Q25,75 10,50" fill="currentColor"/>
              </svg>
            </div>

            <div className="text-6xl mb-3 text-amber-300 drop-shadow-lg">🪷</div>
            <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg tracking-wide">Marriage Biodata</h1>
            <div className="flex items-center justify-center gap-3 text-amber-200 text-xl">
              <span className="text-2xl">✦</span>
              <p className="font-semibold">॥ श्री गणेशाय नमः ॥</p>
              <span className="text-2xl">✦</span>
            </div>
          </div>

          <div className="p-8 bg-white bg-opacity-80 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              {customization.showPhoto && data.profilePhoto && (
                <div className="flex-shrink-0 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-red-400 rounded-full opacity-20"></div>
                    <img
                      src={data.profilePhoto}
                      alt="Profile"
                      className="relative w-44 h-44 object-cover rounded-full border-4 border-white shadow-2xl ring-4 ring-amber-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-br from-amber-400 to-red-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                      ✦
                    </div>
                  </div>
                </div>
              )}

              <div className="flex-grow">
                {personal?.fullName && (
                  <div className="text-center md:text-left mb-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">
                      {personal.fullName}
                    </h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-red-500 mt-2 mx-auto md:mx-0"></div>
                  </div>
                )}

                <div className="bg-white rounded-lg p-6 shadow-lg border border-amber-200 mb-6">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent flex items-center gap-2">
                    <span className="text-2xl">👤</span> Personal Details
                  </h3>
                  <Field label="Date of Birth" value={personal?.dateOfBirth ? formatDate(personal.dateOfBirth) : ''} />
                  <Field label="Time of Birth" value={personal?.timeOfBirth} />
                  <Field label="Place of Birth" value={personal?.placeOfBirth} />
                  <Field label="Age / Height" value={personal?.age && personal?.height ? `${personal.age} years / ${personal.height}` : personal?.age || personal?.height} />
                  <Field label="Complexion" value={personal?.complexion} />
                  <Field label="Blood Group" value={personal?.bloodGroup} />
                  <Field label="Marital Status" value={personal?.maritalStatus} />
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg border border-amber-200">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent flex items-center gap-2">
                    <span className="text-2xl">🕉</span> Religious Details
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

            <div className="bg-white rounded-lg p-6 shadow-lg border border-amber-200 mb-6">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent flex items-center gap-2">
                <span className="text-2xl">🎓</span> Education & Profession
              </h3>
              <div className="grid md:grid-cols-2 gap-x-8">
                <Field label="Qualification" value={education?.highestQualification} />
                <Field label="Institute" value={education?.instituteName} />
                <Field label="Profession" value={education?.profession} />
                <Field label="Company" value={education?.companyName} />
                <Field label="Designation" value={education?.designation} />
                <Field label="Annual Income" value={education?.annualIncome} />
              </div>
              <Field label="Work Location" value={education?.workLocation} />
              <TextBlock title="About Profession" content={education?.aboutProfession} />
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-amber-200 mb-6">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent flex items-center gap-2">
                <span className="text-2xl">👨‍👩‍👧‍👦</span> Family Details
              </h3>
              <div className="grid md:grid-cols-2 gap-x-8">
                <Field label="Father's Name" value={family?.fatherName} />
                <Field label="Father's Occupation" value={family?.fatherOccupation} />
                <Field label="Mother's Name" value={family?.motherName} />
                <Field label="Mother's Occupation" value={family?.motherOccupation} />
                <Field label="Siblings" value={family?.siblings} />
                <Field label="Family Type" value={family?.familyType} />
              </div>
              <Field label="Family Values" value={family?.familyValues} />
              <TextBlock title="About Family" content={family?.aboutFamily} />
            </div>

            {horoscope && Object.values(horoscope).some(v => !isEmpty(v)) && (
              <div className="bg-white rounded-lg p-6 shadow-lg border border-amber-200 mb-6">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent flex items-center gap-2">
                  <span className="text-2xl">⭐</span> Horoscope Details
                </h3>
                <div className="grid md:grid-cols-3 gap-x-6">
                  <Field label="Rashi" value={horoscope.rashi} />
                  <Field label="Nakshatra" value={horoscope.nakshatra} />
                  <Field label="Gan" value={horoscope.gan} />
                  <Field label="Nadi" value={horoscope.nadi} />
                  <Field label="Birth Star" value={horoscope.birthStar} />
                  <Field label="Horoscope Match" value={horoscope.horoscopeMatch} />
                </div>
              </div>
            )}

            {(lifestyle?.aboutMe || lifestyle?.partnerExpectations) && (
              <div className="bg-white rounded-lg p-6 shadow-lg border border-amber-200 mb-6">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent flex items-center gap-2">
                  <span className="text-2xl">💭</span> About & Expectations
                </h3>
                <Field label="Diet" value={lifestyle?.diet} />
                <Field label="Hobbies" value={lifestyle?.hobbies} />
                <TextBlock title="About Me" content={lifestyle?.aboutMe} />
                <TextBlock title="Partner Expectations" content={lifestyle?.partnerExpectations} />
              </div>
            )}

            <div className="bg-gradient-to-r from-red-700 to-amber-700 rounded-lg p-6 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b-2 border-white border-opacity-30 pb-2">
                <span className="text-2xl">📞</span> Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {!isEmpty(contact?.mobileNumber) && (
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Mobile:</span>
                    <span>{contact?.mobileNumber}</span>
                  </div>
                )}
                {!isEmpty(contact?.email) && (
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Email:</span>
                    <span>{contact?.email}</span>
                  </div>
                )}
                {!isEmpty(contact?.address) && (
                  <div className="flex items-center gap-2 md:col-span-2">
                    <span className="font-semibold">Address:</span>
                    <span>{contact?.address}</span>
                  </div>
                )}
                {(contact?.city || contact?.state) && (
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Location:</span>
                    <span>{contact?.city && contact?.state ? `${contact.city}, ${contact.state}` : contact?.city || contact?.state}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
