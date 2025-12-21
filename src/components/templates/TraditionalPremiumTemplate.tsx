import { BiodataData, TemplateCustomization } from '../../types/biodata';
import { isEmpty, formatDate } from '../../utils/helpers';

interface TemplateProps {
  data: Partial<BiodataData>;
  customization: TemplateCustomization;
}

export const TraditionalPremiumTemplate = ({ data, customization }: TemplateProps) => {
  const { personal, education, family, lifestyle, horoscope, contact } = data;

  const Field = ({ label, value }: { label: string; value?: string }) => {
    if (isEmpty(value)) return null;
    return (
      <div className="flex py-2 border-b border-orange-200 last:border-0">
        <span className="font-semibold w-52 flex-shrink-0" style={{ color: customization.primaryColor }}>
          {label}
        </span>
        <span className="text-gray-800">: {value}</span>
      </div>
    );
  };

  const TextBlock = ({ content }: { content?: string }) => {
    if (isEmpty(content)) return null;
    return (
      <div className="mt-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    );
  };

  return (
    <div
      className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 shadow-2xl relative"
      style={{ fontFamily: customization.fontFamily }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50,10 Q30,30 50,50 Q70,30 50,10" fill="currentColor"/>
            <path d="M10,50 Q30,30 50,50 Q30,70 10,50" fill="currentColor"/>
            <path d="M50,90 Q70,70 50,50 Q30,70 50,90" fill="currentColor"/>
            <path d="M90,50 Q70,70 50,50 Q70,30 90,50" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50,10 Q30,30 50,50 Q70,30 50,10" fill="currentColor"/>
            <path d="M10,50 Q30,30 50,50 Q30,70 10,50" fill="currentColor"/>
            <path d="M50,90 Q70,70 50,50 Q30,70 50,90" fill="currentColor"/>
            <path d="M90,50 Q70,70 50,50 Q70,30 90,50" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        <div className="border-8 rounded-t-3xl border-orange-300 border-b-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 px-8 py-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-8 text-6xl text-orange-300 opacity-30">☸</div>
            <div className="absolute top-4 right-8 text-6xl text-orange-300 opacity-30">☸</div>
          </div>

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="w-16 h-1 bg-amber-300"></div>
              <div className="text-5xl">🕉️</div>
              <div className="w-16 h-1 bg-amber-300"></div>
            </div>

            <h1 className="text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Marriage Biodata
            </h1>
            <div className="text-2xl text-amber-200 font-semibold mb-3">॥ श्री गणेशाय नमः ॥</div>

            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="text-3xl text-amber-300">🪷</div>
              <div className="h-12 w-12 rounded-full bg-amber-400 flex items-center justify-center text-2xl">
                🕉️
              </div>
              <div className="text-3xl text-amber-300">🪷</div>
            </div>
          </div>
        </div>

        <div className="border-8 rounded-b-3xl border-orange-300 border-t-0 bg-white p-10">
          {personal?.fullName && (
            <div className="text-center mb-10 pb-6 border-b-4 border-double border-orange-300">
              <h2 className="text-4xl font-bold mb-2" style={{ color: customization.primaryColor }}>
                {personal.fullName}
              </h2>
              <div className="flex items-center justify-center gap-4 text-lg text-gray-600">
                {personal?.age && <span className="font-medium">{personal.age} years</span>}
                {personal?.age && personal?.height && <span className="text-orange-500">•</span>}
                {personal?.height && <span className="font-medium">{personal.height}</span>}
                {(personal?.age || personal?.height) && education?.profession && <span className="text-orange-500">•</span>}
                {education?.profession && <span className="font-medium">{education.profession}</span>}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {customization.showPhoto && data.profilePhoto && (
              <div className="md:col-span-1">
                <div className="sticky top-8">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl opacity-20 blur-xl"></div>
                    <div className="relative border-4 rounded-2xl overflow-hidden" style={{ borderColor: customization.primaryColor }}>
                      <img
                        src={data.profilePhoto}
                        alt="Profile"
                        className="w-full h-96 object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border-2" style={{ borderColor: customization.primaryColor }}>
                      <div className="text-2xl">🪷</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className={customization.showPhoto && data.profilePhoto ? 'md:col-span-2' : 'md:col-span-3'}>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4" style={{ borderColor: customization.primaryColor }}>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ color: customization.primaryColor }}>
                    <span className="text-3xl">📋</span> Personal Details
                  </h3>
                  <div className="space-y-1">
                    <Field label="Date of Birth" value={personal?.dateOfBirth ? formatDate(personal.dateOfBirth) : ''} />
                    <Field label="Time of Birth" value={personal?.timeOfBirth} />
                    <Field label="Place of Birth" value={personal?.placeOfBirth} />
                    <Field label="Complexion" value={personal?.complexion} />
                    <Field label="Blood Group" value={personal?.bloodGroup} />
                    <Field label="Marital Status" value={personal?.maritalStatus} />
                    <Field label="Religion" value={personal?.religion} />
                    <Field label="Caste" value={personal?.caste} />
                    <Field label="Sub Caste" value={personal?.subCaste} />
                    <Field label="Gotra" value={personal?.gotra} />
                    <Field label="Mother Tongue" value={personal?.motherTongue} />
                    <Field label="Manglik" value={personal?.manglik} />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4" style={{ borderColor: customization.primaryColor }}>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ color: customization.primaryColor }}>
                    <span className="text-3xl">🎓</span> Education & Career
                  </h3>
                  <div className="space-y-1">
                    <Field label="Qualification" value={education?.highestQualification} />
                    <Field label="Institute" value={education?.instituteName} />
                    <Field label="Profession" value={education?.profession} />
                    <Field label="Company" value={education?.companyName} />
                    <Field label="Designation" value={education?.designation} />
                    <Field label="Annual Income" value={education?.annualIncome} />
                    <Field label="Work Location" value={education?.workLocation} />
                  </div>
                  <TextBlock content={education?.aboutProfession} />
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4" style={{ borderColor: customization.primaryColor }}>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ color: customization.primaryColor }}>
                    <span className="text-3xl">👨‍👩‍👧‍👦</span> Family Details
                  </h3>
                  <div className="space-y-1">
                    <Field label="Father's Name" value={family?.fatherName} />
                    <Field label="Father's Occupation" value={family?.fatherOccupation} />
                    <Field label="Mother's Name" value={family?.motherName} />
                    <Field label="Mother's Occupation" value={family?.motherOccupation} />
                    <Field label="Siblings" value={family?.siblings} />
                    <Field label="Family Type" value={family?.familyType} />
                    <Field label="Family Status" value={family?.familyStatus} />
                    <Field label="Family Values" value={family?.familyValues} />
                  </div>
                  <TextBlock content={family?.aboutFamily} />
                </div>

                {horoscope && Object.values(horoscope).some(v => !isEmpty(v)) && (
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4" style={{ borderColor: customization.primaryColor }}>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ color: customization.primaryColor }}>
                      <span className="text-3xl">⭐</span> Horoscope
                    </h3>
                    <div className="space-y-1">
                      <Field label="Rashi" value={horoscope.rashi} />
                      <Field label="Nakshatra" value={horoscope.nakshatra} />
                      <Field label="Gan" value={horoscope.gan} />
                      <Field label="Nadi" value={horoscope.nadi} />
                      <Field label="Birth Star" value={horoscope.birthStar} />
                    </div>
                    <TextBlock content={horoscope.additionalInfo} />
                  </div>
                )}

                {(lifestyle?.aboutMe || lifestyle?.partnerExpectations) && (
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4" style={{ borderColor: customization.primaryColor }}>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ color: customization.primaryColor }}>
                      <span className="text-3xl">💭</span> Personal & Expectations
                    </h3>
                    {lifestyle.aboutMe && (
                      <div className="mb-4">
                        <p className="font-semibold mb-2 text-gray-700">About Me:</p>
                        <TextBlock content={lifestyle.aboutMe} />
                      </div>
                    )}
                    {lifestyle.partnerExpectations && (
                      <div>
                        <p className="font-semibold mb-2 text-gray-700">Partner Expectations:</p>
                        <TextBlock content={lifestyle.partnerExpectations} />
                      </div>
                    )}
                  </div>
                )}

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4" style={{ borderColor: customization.primaryColor }}>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ color: customization.primaryColor }}>
                    <span className="text-3xl">📞</span> Contact Information
                  </h3>
                  <div className="space-y-1">
                    <Field label="Mobile" value={contact?.mobileNumber} />
                    <Field label="Alternate Number" value={contact?.alternateNumber} />
                    <Field label="Email" value={contact?.email} />
                    <Field label="WhatsApp" value={contact?.whatsappNumber} />
                    <Field label="Address" value={contact?.address} />
                    <Field label="City" value={contact?.city} />
                    <Field label="State" value={contact?.state} />
                    <Field label="Pincode" value={contact?.pincode} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
