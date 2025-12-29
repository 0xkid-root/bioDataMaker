import { BiodataData, TemplateCustomization } from '../../types/biodata';
import { isEmpty, formatDate } from '../../utils/helpers';

interface TemplateProps {
    data: Partial<BiodataData>;
    customization: TemplateCustomization;
}

// Template image mapping
const TEMPLATE_IMAGES: { [key: string]: string } = {
    'islamic-1': '/images/Islamic-blue-golden-731x1024.webp',
    'islamic-2': '/images/green-yellow-muslim-731x1024.webp',
    'decorative-1': '/images/red-and-gold-731x1024.webp',
    'decorative-2': '/images/Perfect-maroon-731x1024.png',
    'decorative-3': '/images/glowing-703x1024.webp',
    'premium-1': '/images/blue-classic-731x1024.webp',
    'premium-2': '/images/classical-703x1024.webp',
    'premium-3': '/images/premium-white-721x1024.png',
    'modern-6': '/images/nuture-735x1024.png',
    'job-1': '/images/premium-white-721x1024.png',
};

export const ImageBasedTemplate = ({ data, customization }: TemplateProps) => {
    const { personal, education, family, lifestyle, horoscope, contact } = data;
    const backgroundImage = TEMPLATE_IMAGES[customization.templateId] || '';

    const Field = ({ label, value }: { label: string; value?: string }) => {
        if (isEmpty(value)) return null;
        return (
            <div className="flex items-baseline mb-1.5 text-sm">
                <span className="font-semibold mr-2 whitespace-nowrap" style={{ color: customization.primaryColor }}>
                    {label}:
                </span>
                <span className="text-gray-800">{value}</span>
            </div>
        );
    };

    const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
        if (!children) return null;
        return (
            <div className="mb-4">
                <h3
                    className="text-base font-bold mb-2 pb-1 border-b-2"
                    style={{
                        color: customization.primaryColor,
                        borderColor: customization.primaryColor
                    }}
                >
                    {title}
                </h3>
                {children}
            </div>
        );
    };

    return (
        <div
            className="relative w-full mx-auto bg-white shadow-2xl overflow-hidden"
            style={{
                fontFamily: customization.fontFamily,
                maxWidth: '731px',
                aspectRatio: '731/1024'
            }}
        >
            {/* Background Image */}
            {backgroundImage && (
                <img
                    src={backgroundImage}
                    alt="Template Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}

            {/* Content Overlay with solid/high-opacity background for readability */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header Section with stronger background */}
                <div className="bg-white/95 p-6 text-center border-b-4" style={{ borderColor: customization.primaryColor }}>
                    {customization.showPhoto && data.profilePhoto && (
                        <div className="flex justify-center mb-3">
                            <div className="relative">
                                <img
                                    src={data.profilePhoto}
                                    alt="Profile"
                                    className="w-24 h-24 object-cover rounded-full border-4 shadow-lg"
                                    style={{ borderColor: customization.primaryColor }}
                                />
                            </div>
                        </div>
                    )}
                    <h1 className="text-2xl font-bold mb-1" style={{ color: customization.primaryColor }}>
                        {personal?.fullName || 'Your Name'}
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                        {personal?.age && <span>{personal.age} years</span>}
                        {personal?.age && personal?.height && <span>•</span>}
                        {personal?.height && <span>{personal.height}</span>}
                        {(personal?.age || personal?.height) && education?.profession && <span>•</span>}
                        {education?.profession && <span>{education.profession}</span>}
                    </div>
                </div>

                {/* Main Content with scrollable area */}
                <div className="flex-1 overflow-y-auto bg-white/95 p-6">
                    {/* Personal Details */}
                    <Section title="Personal Details">
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="space-y-1">
                                <Field label="Date of Birth" value={personal?.dateOfBirth ? formatDate(personal.dateOfBirth) : ''} />
                                <Field label="Place of Birth" value={personal?.placeOfBirth} />
                                <Field label="Height" value={personal?.height} />
                                <Field label="Complexion" value={personal?.complexion} />
                                <Field label="Blood Group" value={personal?.bloodGroup} />
                                <Field label="Marital Status" value={personal?.maritalStatus} />
                            </div>
                            <div className="space-y-1">
                                <Field label="Religion" value={personal?.religion} />
                                <Field label="Caste" value={personal?.caste} />
                                <Field label="Sub Caste" value={personal?.subCaste} />
                                <Field label="Gotra" value={personal?.gotra} />
                                <Field label="Mother Tongue" value={personal?.motherTongue} />
                                <Field label="Manglik" value={personal?.manglik} />
                            </div>
                        </div>
                    </Section>

                    {/* Education & Career */}
                    <Section title="Education & Career">
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="space-y-1">
                                <Field label="Qualification" value={education?.highestQualification} />
                                <Field label="Institute" value={education?.instituteName} />
                                <Field label="Profession" value={education?.profession} />
                            </div>
                            <div className="space-y-1">
                                <Field label="Company" value={education?.companyName} />
                                <Field label="Designation" value={education?.designation} />
                                <Field label="Annual Income" value={education?.annualIncome} />
                                <Field label="Work Location" value={education?.workLocation} />
                            </div>
                        </div>
                        {education?.aboutProfession && (
                            <div className="mt-2 p-2 bg-white rounded text-sm text-gray-700 border-l-4" style={{ borderColor: customization.primaryColor }}>
                                <p className="font-semibold text-gray-800 mb-1">About Profession:</p>
                                {education.aboutProfession}
                            </div>
                        )}
                    </Section>

                    {/* Family Details */}
                    <Section title="Family Details">
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="space-y-1">
                                <Field label="Father's Name" value={family?.fatherName} />
                                <Field label="Father's Occupation" value={family?.fatherOccupation} />
                                <Field label="Mother's Name" value={family?.motherName} />
                                <Field label="Mother's Occupation" value={family?.motherOccupation} />
                            </div>
                            <div className="space-y-1">
                                <Field label="Siblings" value={family?.siblings} />
                                <Field label="Family Type" value={family?.familyType} />
                                <Field label="Family Status" value={family?.familyStatus} />
                                <Field label="Family Values" value={family?.familyValues} />
                            </div>
                        </div>
                        {family?.aboutFamily && (
                            <div className="mt-2 p-2 bg-white rounded text-sm text-gray-700 border-l-4" style={{ borderColor: customization.primaryColor }}>
                                {family.aboutFamily}
                            </div>
                        )}
                    </Section>

                    {/* Lifestyle */}
                    {(lifestyle?.diet || lifestyle?.aboutMe || lifestyle?.hobbies) && (
                        <Section title="Lifestyle & Preferences">
                            <div className="grid grid-cols-2 gap-x-4">
                                <Field label="Diet" value={lifestyle?.diet} />
                                <Field label="Hobbies" value={lifestyle?.hobbies} />
                                <Field label="Drinking" value={lifestyle?.drinking} />
                                <Field label="Smoking" value={lifestyle?.smoking} />
                            </div>
                            {lifestyle?.aboutMe && (
                                <div className="mt-2 p-2 bg-white rounded text-sm border-l-4" style={{ borderColor: customization.primaryColor }}>
                                    <p className="font-semibold text-gray-800 mb-1">About Me:</p>
                                    <p className="text-gray-700">{lifestyle.aboutMe}</p>
                                </div>
                            )}
                            {lifestyle?.partnerExpectations && (
                                <div className="mt-2 p-2 bg-white rounded text-sm border-l-4" style={{ borderColor: customization.primaryColor }}>
                                    <p className="font-semibold text-gray-800 mb-1">Partner Expectations:</p>
                                    <p className="text-gray-700">{lifestyle.partnerExpectations}</p>
                                </div>
                            )}
                        </Section>
                    )}

                    {/* Horoscope */}
                    {horoscope && Object.values(horoscope).some(v => !isEmpty(v)) && (
                        <Section title="Horoscope Details">
                            <div className="grid grid-cols-2 gap-x-4">
                                <div className="space-y-1">
                                    <Field label="Rashi" value={horoscope.rashi} />
                                    <Field label="Nakshatra" value={horoscope.nakshatra} />
                                    <Field label="Gan" value={horoscope.gan} />
                                </div>
                                <div className="space-y-1">
                                    <Field label="Nadi" value={horoscope.nadi} />
                                    <Field label="Charan" value={horoscope.charan} />
                                    <Field label="Birth Star" value={horoscope.birthStar} />
                                </div>
                            </div>
                        </Section>
                    )}

                    {/* Contact Information */}
                    <Section title="Contact Information">
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="space-y-1">
                                <Field label="Mobile" value={contact?.mobileNumber} />
                                <Field label="Email" value={contact?.email} />
                                <Field label="WhatsApp" value={contact?.whatsappNumber} />
                            </div>
                            <div className="space-y-1">
                                <Field label="City" value={contact?.city} />
                                <Field label="State" value={contact?.state} />
                                <Field label="Contact Person" value={contact?.contactPerson} />
                            </div>
                        </div>
                        {contact?.address && (
                            <div className="mt-2 text-sm text-gray-700">
                                <span className="font-semibold" style={{ color: customization.primaryColor }}>Address: </span>
                                {contact.address}
                            </div>
                        )}
                    </Section>
                </div>
            </div>
        </div>
    );
};
