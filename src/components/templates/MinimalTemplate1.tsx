import { BiodataData, TemplateCustomization } from '../../types/biodata';
import { isEmpty, formatDate } from '../../utils/helpers';

interface TemplateProps {
  data: Partial<BiodataData>;
  customization: TemplateCustomization;
}

export const MinimalTemplate1 = ({ data, customization }: TemplateProps) => {
  const { personal, education, family, lifestyle, horoscope, contact } = data;

  const InfoGrid = ({ items }: { items: Array<{ label: string; value?: string }> }) => {
    const validItems = items.filter(item => !isEmpty(item.value));
    if (validItems.length === 0) return null;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {validItems.map((item, index) => (
          <div key={index} className="flex items-baseline gap-2">
            <span className="text-gray-500 text-sm">{item.label}:</span>
            <span className="text-gray-900 font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    );
  };

  const TextBlock = ({ content }: { content?: string }) => {
    if (isEmpty(content)) return null;
    return <p className="text-gray-700 leading-relaxed mb-4">{content}</p>;
  };

  return (
    <div
      className="max-w-4xl mx-auto bg-white shadow-lg"
      style={{ fontFamily: customization.fontFamily }}
    >
      <div className="p-8 md:p-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {personal?.fullName || 'Name'}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-600">
            {personal?.age && <span>{personal.age} years</span>}
            {personal?.age && personal?.height && <span>•</span>}
            {personal?.height && <span>{personal.height}</span>}
            {(personal?.age || personal?.height) && personal?.profession && <span>•</span>}
            {education?.profession && <span>{education.profession}</span>}
          </div>
          {customization.showPhoto && data.profilePhoto && (
            <div className="flex justify-center mt-6">
              <img
                src={data.profilePhoto}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div>
            <div className="mb-4">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: customization.primaryColor }}
              >
                Personal
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-12 rounded-full" style={{ backgroundColor: customization.primaryColor }}></div>
                <div className="h-0.5 flex-1 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <InfoGrid
              items={[
                { label: 'Date of Birth', value: personal?.dateOfBirth ? formatDate(personal.dateOfBirth) : '' },
                { label: 'Place of Birth', value: personal?.placeOfBirth },
                { label: 'Religion', value: personal?.religion },
                { label: 'Caste', value: personal?.caste },
                { label: 'Mother Tongue', value: personal?.motherTongue },
                { label: 'Marital Status', value: personal?.maritalStatus },
                { label: 'Complexion', value: personal?.complexion },
                { label: 'Blood Group', value: personal?.bloodGroup },
              ]}
            />
          </div>

          <div>
            <div className="mb-4">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: customization.primaryColor }}
              >
                Education & Career
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-12 rounded-full" style={{ backgroundColor: customization.primaryColor }}></div>
                <div className="h-0.5 flex-1 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <InfoGrid
              items={[
                { label: 'Qualification', value: education?.highestQualification },
                { label: 'Institute', value: education?.instituteName },
                { label: 'Profession', value: education?.profession },
                { label: 'Company', value: education?.companyName },
                { label: 'Designation', value: education?.designation },
                { label: 'Income', value: education?.annualIncome },
                { label: 'Location', value: education?.workLocation },
              ]}
            />
            <TextBlock content={education?.aboutProfession} />
          </div>

          <div>
            <div className="mb-4">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: customization.primaryColor }}
              >
                Family
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-12 rounded-full" style={{ backgroundColor: customization.primaryColor }}></div>
                <div className="h-0.5 flex-1 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <InfoGrid
              items={[
                { label: "Father's Name", value: family?.fatherName },
                { label: "Father's Occupation", value: family?.fatherOccupation },
                { label: "Mother's Name", value: family?.motherName },
                { label: "Mother's Occupation", value: family?.motherOccupation },
                { label: 'Siblings', value: family?.siblings },
                { label: 'Family Type', value: family?.familyType },
                { label: 'Family Values', value: family?.familyValues },
              ]}
            />
            <TextBlock content={family?.aboutFamily} />
          </div>

          {lifestyle?.aboutMe && (
            <div>
              <div className="mb-4">
                <h2
                  className="text-xl font-bold mb-3"
                  style={{ color: customization.primaryColor }}
                >
                  About
                </h2>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-12 rounded-full" style={{ backgroundColor: customization.primaryColor }}></div>
                  <div className="h-0.5 flex-1 rounded-full bg-gray-200"></div>
                </div>
              </div>
              <TextBlock content={lifestyle.aboutMe} />
              <InfoGrid
                items={[
                  { label: 'Diet', value: lifestyle.diet },
                  { label: 'Hobbies', value: lifestyle.hobbies },
                  { label: 'Interests', value: lifestyle.interests },
                ]}
              />
            </div>
          )}

          {lifestyle?.partnerExpectations && (
            <div>
              <div className="mb-4">
                <h2
                  className="text-xl font-bold mb-3"
                  style={{ color: customization.primaryColor }}
                >
                  Partner Expectations
                </h2>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-12 rounded-full" style={{ backgroundColor: customization.primaryColor }}></div>
                  <div className="h-0.5 flex-1 rounded-full bg-gray-200"></div>
                </div>
              </div>
              <TextBlock content={lifestyle.partnerExpectations} />
            </div>
          )}

          {horoscope && Object.values(horoscope).some(v => !isEmpty(v)) && (
            <div>
              <div className="mb-4">
                <h2
                  className="text-xl font-bold mb-3"
                  style={{ color: customization.primaryColor }}
                >
                  Horoscope
                </h2>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-12 rounded-full" style={{ backgroundColor: customization.primaryColor }}></div>
                  <div className="h-0.5 flex-1 rounded-full bg-gray-200"></div>
                </div>
              </div>
              <InfoGrid
                items={[
                  { label: 'Rashi', value: horoscope.rashi },
                  { label: 'Nakshatra', value: horoscope.nakshatra },
                  { label: 'Gan', value: horoscope.gan },
                  { label: 'Nadi', value: horoscope.nadi },
                  { label: 'Manglik', value: personal?.manglik },
                ]}
              />
            </div>
          )}

          <div>
            <div className="mb-4">
              <h2
                className="text-xl font-bold mb-3"
                style={{ color: customization.primaryColor }}
              >
                Contact
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-12 rounded-full" style={{ backgroundColor: customization.primaryColor }}></div>
                <div className="h-0.5 flex-1 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <InfoGrid
              items={[
                { label: 'Mobile', value: contact?.mobileNumber },
                { label: 'Email', value: contact?.email },
                { label: 'Location', value: contact?.city && contact?.state ? `${contact.city}, ${contact.state}` : contact?.city || contact?.state },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
