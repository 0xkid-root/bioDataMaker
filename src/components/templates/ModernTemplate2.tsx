import { BiodataData, TemplateCustomization } from '../../types/biodata';
import { isEmpty, formatDate } from '../../utils/helpers';

interface TemplateProps {
  data: Partial<BiodataData>;
  customization: TemplateCustomization;
}

export const ModernTemplate2 = ({ data, customization }: TemplateProps) => {
  const { personal, education, family, lifestyle, horoscope, contact } = data;

  const InfoCard = ({ icon, label, value }: { icon: string; label: string; value?: string }) => {
    if (isEmpty(value)) return null;
    return (
      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
        <span className="text-xl flex-shrink-0" style={{ color: customization.primaryColor }}>{icon}</span>
        <div className="flex-grow">
          <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
          <p className="text-sm font-medium text-gray-900 mt-0.5">{value}</p>
        </div>
      </div>
    );
  };

  const SectionTitle = ({ icon, title }: { icon: string; title: string }) => (
    <div className="flex items-center gap-3 mb-6">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg"
        style={{ backgroundColor: customization.primaryColor }}
      >
        <span className="text-white">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
  );

  const TextContent = ({ content }: { content?: string }) => {
    if (isEmpty(content)) return null;
    return (
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4" style={{ borderColor: customization.primaryColor }}>
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    );
  };

  return (
    <div
      className="max-w-5xl mx-auto bg-white shadow-2xl"
      style={{ fontFamily: customization.fontFamily }}
    >
      <div className="relative h-48 bg-gradient-to-r overflow-hidden" style={{
        background: `linear-gradient(135deg, ${customization.primaryColor} 0%, ${customization.primaryColor}dd 100%)`
      }}>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="800" height="400" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              {personal?.fullName || 'Your Name'}
            </h1>
            <div className="flex items-center justify-center gap-4 text-white text-lg">
              {personal?.age && <span>{personal.age} years</span>}
              {personal?.age && education?.profession && <span className="opacity-50">•</span>}
              {education?.profession && <span>{education.profession}</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-12">
        {customization.showPhoto && data.profilePhoto && (
          <div className="flex justify-center -mt-28 mb-12">
            <div className="relative">
              <img
                src={data.profilePhoto}
                alt="Profile"
                className="w-40 h-40 object-cover rounded-2xl border-4 border-white shadow-2xl"
              />
              <div
                className="absolute -bottom-3 -right-3 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: customization.primaryColor }}
              >
                <span className="text-white text-2xl">✨</span>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <SectionTitle icon="👤" title="Personal" />
            <div className="space-y-2">
              <InfoCard icon="📅" label="Date of Birth" value={personal?.dateOfBirth ? formatDate(personal.dateOfBirth) : ''} />
              <InfoCard icon="📍" label="Birth Place" value={personal?.placeOfBirth} />
              <InfoCard icon="📏" label="Height" value={personal?.height} />
              <InfoCard icon="💉" label="Blood Group" value={personal?.bloodGroup} />
              <InfoCard icon="💍" label="Marital Status" value={personal?.maritalStatus} />
              <InfoCard icon="🗣️" label="Mother Tongue" value={personal?.motherTongue} />
            </div>
          </div>

          <div>
            <SectionTitle icon="🕉️" title="Religious" />
            <div className="space-y-2">
              <InfoCard icon="🙏" label="Religion" value={personal?.religion} />
              <InfoCard icon="👥" label="Caste" value={personal?.caste} />
              <InfoCard icon="🏛️" label="Sub Caste" value={personal?.subCaste} />
              <InfoCard icon="🌟" label="Gotra" value={personal?.gotra} />
              <InfoCard icon="⭐" label="Manglik" value={personal?.manglik} />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <SectionTitle icon="🎓" title="Education & Career" />
          <div className="grid md:grid-cols-3 gap-3">
            <InfoCard icon="📚" label="Qualification" value={education?.highestQualification} />
            <InfoCard icon="🏫" label="Institute" value={education?.instituteName} />
            <InfoCard icon="💼" label="Profession" value={education?.profession} />
            <InfoCard icon="🏢" label="Company" value={education?.companyName} />
            <InfoCard icon="👔" label="Designation" value={education?.designation} />
            <InfoCard icon="💰" label="Annual Income" value={education?.annualIncome} />
            <InfoCard icon="🌆" label="Work Location" value={education?.workLocation} />
          </div>
          <TextContent content={education?.aboutProfession} />
        </div>

        <div className="mb-8">
          <SectionTitle icon="👨‍👩‍👧‍👦" title="Family" />
          <div className="grid md:grid-cols-2 gap-3">
            <InfoCard icon="👨" label="Father" value={family?.fatherName} />
            <InfoCard icon="💼" label="Father's Work" value={family?.fatherOccupation} />
            <InfoCard icon="👩" label="Mother" value={family?.motherName} />
            <InfoCard icon="💼" label="Mother's Work" value={family?.motherOccupation} />
            <InfoCard icon="👫" label="Siblings" value={family?.siblings} />
            <InfoCard icon="🏠" label="Family Type" value={family?.familyType} />
            <InfoCard icon="❤️" label="Family Values" value={family?.familyValues} />
          </div>
          <TextContent content={family?.aboutFamily} />
        </div>

        {horoscope && Object.values(horoscope).some(v => !isEmpty(v)) && (
          <div className="mb-8">
            <SectionTitle icon="⭐" title="Horoscope" />
            <div className="grid md:grid-cols-3 gap-3">
              <InfoCard icon="♈" label="Rashi" value={horoscope.rashi} />
              <InfoCard icon="✨" label="Nakshatra" value={horoscope.nakshatra} />
              <InfoCard icon="🌟" label="Gan" value={horoscope.gan} />
              <InfoCard icon="💫" label="Nadi" value={horoscope.nadi} />
              <InfoCard icon="⭐" label="Birth Star" value={horoscope.birthStar} />
            </div>
          </div>
        )}

        {(lifestyle?.aboutMe || lifestyle?.partnerExpectations) && (
          <div className="mb-8">
            <SectionTitle icon="💭" title="About & Preferences" />
            <div className="grid md:grid-cols-3 gap-3 mb-4">
              <InfoCard icon="🍽️" label="Diet" value={lifestyle?.diet} />
              <InfoCard icon="🎨" label="Hobbies" value={lifestyle?.hobbies} />
              <InfoCard icon="⚡" label="Interests" value={lifestyle?.interests} />
            </div>
            {lifestyle?.aboutMe && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span style={{ color: customization.primaryColor }}>•</span> About Me
                </h4>
                <TextContent content={lifestyle.aboutMe} />
              </div>
            )}
            {lifestyle?.partnerExpectations && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span style={{ color: customization.primaryColor }}>•</span> Partner Expectations
                </h4>
                <TextContent content={lifestyle.partnerExpectations} />
              </div>
            )}
          </div>
        )}

        <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: customization.primaryColor }}>
          <SectionTitle icon="📞" title="Contact" />
          <div className="grid md:grid-cols-2 gap-4 text-white">
            {!isEmpty(contact?.mobileNumber) && (
              <div className="flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="text-xs opacity-80">Mobile</p>
                  <p className="font-semibold">{contact?.mobileNumber}</p>
                </div>
              </div>
            )}
            {!isEmpty(contact?.email) && (
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-xs opacity-80">Email</p>
                  <p className="font-semibold break-all">{contact?.email}</p>
                </div>
              </div>
            )}
            {(contact?.city || contact?.state) && (
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-xs opacity-80">Location</p>
                  <p className="font-semibold">{contact?.city && contact?.state ? `${contact.city}, ${contact.state}` : contact?.city || contact?.state}</p>
                </div>
              </div>
            )}
            {!isEmpty(contact?.contactPerson) && (
              <div className="flex items-center gap-3">
                <span className="text-2xl">👤</span>
                <div>
                  <p className="text-xs opacity-80">Contact Person</p>
                  <p className="font-semibold">{contact?.contactPerson}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
