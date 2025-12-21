import { BiodataData, TemplateCustomization } from '../../types/biodata';
import { isEmpty, formatDate } from '../../utils/helpers';

interface TemplateProps {
  data: Partial<BiodataData>;
  customization: TemplateCustomization;
}

export const TraditionalElegantTemplate = ({ data, customization }: TemplateProps) => {
  const { personal, education, family, lifestyle, horoscope, contact } = data;

  const Field = ({ label, value }: { label: string; value?: string }) => {
    if (isEmpty(value)) return null;
    return (
      <div className="flex py-1.5">
        <span className="font-semibold w-48 flex-shrink-0" style={{ color: customization.primaryColor }}>{label}</span>
        <span className="text-gray-700">: {value}</span>
      </div>
    );
  };

  const TextBlock = ({ title, content }: { title: string; content?: string }) => {
    if (isEmpty(content)) return null;
    return (
      <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border-l-4" style={{ borderColor: customization.primaryColor }}>
        <p className="font-semibold mb-2" style={{ color: customization.primaryColor }}>{title}:</p>
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    );
  };

  return (
    <div
      className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 via-white to-red-50 shadow-2xl relative"
      style={{ fontFamily: customization.fontFamily }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-9xl">🕉️</div>
        <div className="absolute bottom-10 right-10 text-9xl">🪷</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl">🕉️</div>
      </div>

      <div className="relative z-10 border-8 border-double" style={{ borderColor: customization.primaryColor }}>
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-center py-8 px-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-4 left-4 w-16 h-16 border-4 border-amber-400 rounded-full"></div>
            <div className="absolute top-4 right-4 w-16 h-16 border-4 border-amber-400 rounded-full"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-amber-400 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-4xl text-amber-300">🕉️</div>
              <div className="text-5xl">🪔</div>
              <div className="text-4xl text-amber-300">🕉️</div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Marriage Biodata
            </h1>
            <div className="text-2xl text-amber-200 font-semibold">॥ श्री गणेशाय नमः ॥</div>
          </div>
        </div>

        <div className="p-10">
          {personal?.fullName && (
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold" style={{ color: customization.primaryColor }}>
                {personal.fullName}
              </h2>
              <div className="mt-2 flex items-center justify-center gap-3 text-gray-600">
                {personal?.age && <span>{personal.age} years</span>}
                {personal?.age && personal?.height && <span>•</span>}
                {personal?.height && <span>{personal.height}</span>}
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-grow">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 flex items-center gap-2" style={{ borderColor: customization.primaryColor, color: customization.primaryColor }}>
                  <span>📋</span> Personal Details
                </h3>
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

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 flex items-center gap-2" style={{ borderColor: customization.primaryColor, color: customization.primaryColor }}>
                  <span>🎓</span> Education & Career
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

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 flex items-center gap-2" style={{ borderColor: customization.primaryColor, color: customization.primaryColor }}>
                  <span>👨‍👩‍👧</span> Family Details
                </h3>
                <Field label="Father's Name" value={family?.fatherName} />
                <Field label="Father's Occupation" value={family?.fatherOccupation} />
                <Field label="Mother's Name" value={family?.motherName} />
                <Field label="Mother's Occupation" value={family?.motherOccupation} />
                <Field label="Siblings" value={family?.siblings} />
                <Field label="Family Type" value={family?.familyType} />
                <Field label="Family Status" value={family?.familyStatus} />
                <Field label="Family Values" value={family?.familyValues} />
                <TextBlock title="About Family" content={family?.aboutFamily} />
              </div>

              {horoscope && Object.values(horoscope).some(v => !isEmpty(v)) && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 flex items-center gap-2" style={{ borderColor: customization.primaryColor, color: customization.primaryColor }}>
                    <span>⭐</span> Horoscope Details
                  </h3>
                  <Field label="Rashi" value={horoscope.rashi} />
                  <Field label="Nakshatra" value={horoscope.nakshatra} />
                  <Field label="Gan" value={horoscope.gan} />
                  <Field label="Nadi" value={horoscope.nadi} />
                  <Field label="Birth Star" value={horoscope.birthStar} />
                  <TextBlock title="Additional Info" content={horoscope.additionalInfo} />
                </div>
              )}

              {(lifestyle?.aboutMe || lifestyle?.partnerExpectations) && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 flex items-center gap-2" style={{ borderColor: customization.primaryColor, color: customization.primaryColor }}>
                    <span>💭</span> About & Expectations
                  </h3>
                  <Field label="Diet" value={lifestyle?.diet} />
                  <Field label="Hobbies" value={lifestyle?.hobbies} />
                  <TextBlock title="About Me" content={lifestyle.aboutMe} />
                  <TextBlock title="Partner Expectations" content={lifestyle.partnerExpectations} />
                </div>
              )}

              <div className="border-t-4 pt-6" style={{ borderColor: customization.primaryColor }}>
                <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 flex items-center gap-2" style={{ borderColor: customization.primaryColor, color: customization.primaryColor }}>
                  <span>📞</span> Contact Information
                </h3>
                <Field label="Mobile" value={contact?.mobileNumber} />
                <Field label="Alternate Number" value={contact?.alternateNumber} />
                <Field label="Email" value={contact?.email} />
                <Field label="WhatsApp" value={contact?.whatsappNumber} />
                <Field label="Address" value={contact?.address} />
                <Field label="City" value={contact?.city} />
                <Field label="State" value={contact?.state} />
                <Field label="Pincode" value={contact?.pincode} />
                <Field label="Contact Person" value={contact?.contactPerson} />
              </div>
            </div>

            {customization.showPhoto && data.profilePhoto && (
              <div className="flex-shrink-0 md:w-64">
                <div className="sticky top-8">
                  <div className="relative p-2 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg">
                    <div className="absolute -top-3 -left-3 w-6 h-6 border-l-4 border-t-4 rounded-tl-lg" style={{ borderColor: customization.primaryColor }}></div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 border-r-4 border-t-4 rounded-tr-lg" style={{ borderColor: customization.primaryColor }}></div>
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-4 border-b-4 rounded-bl-lg" style={{ borderColor: customization.primaryColor }}></div>
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-4 border-b-4 rounded-br-lg" style={{ borderColor: customization.primaryColor }}></div>
                    <img
                      src={data.profilePhoto}
                      alt="Profile"
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
