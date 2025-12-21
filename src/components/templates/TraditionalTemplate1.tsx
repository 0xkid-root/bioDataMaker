import { BiodataData, TemplateCustomization } from '../../types/biodata';
import { isEmpty, formatDate } from '../../utils/helpers';

interface TemplateProps {
  data: Partial<BiodataData>;
  customization: TemplateCustomization;
}

export const TraditionalTemplate1 = ({ data, customization }: TemplateProps) => {
  const { personal, education, family, lifestyle, horoscope, contact } = data;

  const Field = ({ label, value }: { label: string; value?: string }) => {
    if (isEmpty(value)) return null;
    return (
      <tr>
        <td className="font-semibold text-gray-700 py-2 pr-4 align-top whitespace-nowrap">
          {label}
        </td>
        <td className="text-gray-900 py-2">: {value}</td>
      </tr>
    );
  };

  const TextBlock = ({ title, content }: { title: string; content?: string }) => {
    if (isEmpty(content)) return null;
    return (
      <div className="mt-4">
        <p className="font-semibold text-gray-700 mb-2">{title}:</p>
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    );
  };

  return (
    <div
      className="max-w-4xl mx-auto bg-white shadow-lg border-8"
      style={{ borderColor: customization.primaryColor, fontFamily: customization.fontFamily }}
    >
      <div
        className="py-6 text-center border-b-4"
        style={{ borderColor: customization.primaryColor }}
      >
        <div className="text-4xl mb-2">॥ शुभ विवाह ॥</div>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: customization.primaryColor }}
        >
          विवाह बायोडाटा
        </h1>
        <h2 className="text-xl text-gray-600">Marriage Biodata</h2>
      </div>

      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {customization.showPhoto && data.profilePhoto && (
            <div className="flex-shrink-0">
              <img
                src={data.profilePhoto}
                alt="Profile"
                className="w-40 h-40 object-cover border-4"
                style={{ borderColor: customization.primaryColor }}
              />
            </div>
          )}

          <div className="flex-grow">
            {personal?.fullName && (
              <h2
                className="text-2xl font-bold mb-4 text-center md:text-left"
                style={{ color: customization.primaryColor }}
              >
                {personal.fullName}
              </h2>
            )}

            <div className="mb-6">
              <h3
                className="text-lg font-bold mb-3 uppercase tracking-wide"
                style={{ color: customization.primaryColor }}
              >
                Personal Details
              </h3>
              <table className="w-full">
                <tbody>
                  <Field label="Date of Birth" value={personal?.dateOfBirth ? formatDate(personal.dateOfBirth) : ''} />
                  <Field label="Time of Birth" value={personal?.timeOfBirth} />
                  <Field label="Place of Birth" value={personal?.placeOfBirth} />
                  <Field label="Age / Height" value={personal?.age && personal?.height ? `${personal.age} years / ${personal.height}` : personal?.age || personal?.height} />
                  <Field label="Complexion" value={personal?.complexion} />
                  <Field label="Blood Group" value={personal?.bloodGroup} />
                  <Field label="Marital Status" value={personal?.maritalStatus} />
                </tbody>
              </table>
            </div>

            <div className="mb-6">
              <h3
                className="text-lg font-bold mb-3 uppercase tracking-wide"
                style={{ color: customization.primaryColor }}
              >
                Religious Details
              </h3>
              <table className="w-full">
                <tbody>
                  <Field label="Religion" value={personal?.religion} />
                  <Field label="Caste" value={personal?.caste} />
                  <Field label="Sub Caste" value={personal?.subCaste} />
                  <Field label="Gotra" value={personal?.gotra} />
                  <Field label="Mother Tongue" value={personal?.motherTongue} />
                  <Field label="Manglik" value={personal?.manglik} />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3
            className="text-lg font-bold mb-3 uppercase tracking-wide"
            style={{ color: customization.primaryColor }}
          >
            Education & Profession
          </h3>
          <table className="w-full">
            <tbody>
              <Field label="Qualification" value={education?.highestQualification} />
              <Field label="Institute" value={education?.instituteName} />
              <Field label="Profession" value={education?.profession} />
              <Field label="Company" value={education?.companyName} />
              <Field label="Designation" value={education?.designation} />
              <Field label="Annual Income" value={education?.annualIncome} />
              <Field label="Work Location" value={education?.workLocation} />
            </tbody>
          </table>
          <TextBlock title="About Profession" content={education?.aboutProfession} />
        </div>

        <div className="mb-6">
          <h3
            className="text-lg font-bold mb-3 uppercase tracking-wide"
            style={{ color: customization.primaryColor }}
          >
            Family Details
          </h3>
          <table className="w-full">
            <tbody>
              <Field label="Father's Name" value={family?.fatherName} />
              <Field label="Father's Occupation" value={family?.fatherOccupation} />
              <Field label="Mother's Name" value={family?.motherName} />
              <Field label="Mother's Occupation" value={family?.motherOccupation} />
              <Field label="Siblings" value={family?.siblings} />
              <Field label="Family Type" value={family?.familyType} />
              <Field label="Family Status" value={family?.familyStatus} />
              <Field label="Family Values" value={family?.familyValues} />
            </tbody>
          </table>
          <TextBlock title="About Family" content={family?.aboutFamily} />
        </div>

        {horoscope && Object.values(horoscope).some(v => !isEmpty(v)) && (
          <div className="mb-6">
            <h3
              className="text-lg font-bold mb-3 uppercase tracking-wide"
              style={{ color: customization.primaryColor }}
            >
              Horoscope Details
            </h3>
            <table className="w-full">
              <tbody>
                <Field label="Rashi" value={horoscope.rashi} />
                <Field label="Nakshatra" value={horoscope.nakshatra} />
                <Field label="Gan" value={horoscope.gan} />
                <Field label="Nadi" value={horoscope.nadi} />
                <Field label="Birth Star" value={horoscope.birthStar} />
                <Field label="Horoscope Match" value={horoscope.horoscopeMatch} />
              </tbody>
            </table>
            <TextBlock title="Additional Information" content={horoscope.additionalInfo} />
          </div>
        )}

        <div className="mb-6">
          <h3
            className="text-lg font-bold mb-3 uppercase tracking-wide"
            style={{ color: customization.primaryColor }}
          >
            Lifestyle
          </h3>
          <table className="w-full">
            <tbody>
              <Field label="Diet" value={lifestyle?.diet} />
              <Field label="Drinking" value={lifestyle?.drinking} />
              <Field label="Smoking" value={lifestyle?.smoking} />
              <Field label="Hobbies" value={lifestyle?.hobbies} />
              <Field label="Interests" value={lifestyle?.interests} />
            </tbody>
          </table>
          <TextBlock title="About Me" content={lifestyle?.aboutMe} />
          <TextBlock title="Partner Expectations" content={lifestyle?.partnerExpectations} />
        </div>

        <div
          className="border-t-2 pt-6"
          style={{ borderColor: customization.primaryColor }}
        >
          <h3
            className="text-lg font-bold mb-3 uppercase tracking-wide"
            style={{ color: customization.primaryColor }}
          >
            Contact Information
          </h3>
          <table className="w-full">
            <tbody>
              <Field label="Mobile" value={contact?.mobileNumber} />
              <Field label="Alternate Mobile" value={contact?.alternateNumber} />
              <Field label="Email" value={contact?.email} />
              <Field label="WhatsApp" value={contact?.whatsappNumber} />
              <Field label="Address" value={contact?.address} />
              <Field label="City / State" value={contact?.city && contact?.state ? `${contact.city}, ${contact.state}` : contact?.city || contact?.state} />
              <Field label="Pincode" value={contact?.pincode} />
              <Field label="Contact Person" value={contact?.contactPerson} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
