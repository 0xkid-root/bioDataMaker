import { useState } from 'react';
import { Upload } from 'lucide-react';
import { useBiodata } from '../context/BiodataContext';
import { TEMPLATES } from './templates';
import { COLORS, FONTS } from '../utils/constants';
import { compressImage } from '../utils/helpers';

export const TemplateCustomizer = () => {
  const { customization, updateCustomization, biodataData, updateBiodataData } =
    useBiodata();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'modern', 'traditional', 'minimal', 'simple'];

  const filteredTemplates =
    selectedCategory === 'all'
      ? TEMPLATES
      : TEMPLATES.filter((t) => t.category === selectedCategory);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const compressed = await compressImage(file);
      updateBiodataData('profilePhoto' as any, compressed as any);
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Choose Template
        </h3>

        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg capitalize whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => updateCustomization({ templateId: template.id })}
              className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                customization.templateId === template.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded mb-2 flex items-center justify-center">
                <span className="text-3xl">📄</span>
              </div>
              <p className="text-sm font-medium text-gray-900 text-center">
                {template.name}
              </p>
              <p className="text-xs text-gray-500 text-center capitalize">
                {template.category}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Primary Color
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {COLORS.map((color) => (
              <button
                key={color.value}
                onClick={() => updateCustomization({ primaryColor: color.value })}
                className={`p-2 rounded-lg border-2 transition-all hover:scale-105 ${
                  customization.primaryColor === color.value
                    ? 'border-gray-900'
                    : 'border-gray-200'
                }`}
              >
                <div
                  className="w-full h-12 rounded"
                  style={{ backgroundColor: color.value }}
                />
                <p className="text-xs text-gray-600 mt-1 text-center">
                  {color.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Font Style</h3>
          <div className="space-y-2">
            {FONTS.map((font) => (
              <button
                key={font.value}
                onClick={() => updateCustomization({ fontFamily: font.value })}
                className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                  customization.fontFamily === font.value
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                style={{ fontFamily: font.value }}
              >
                {font.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Profile Photo
        </h3>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-all">
            <Upload className="w-4 h-4" />
            Upload Photo
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={customization.showPhoto}
              onChange={(e) =>
                updateCustomization({ showPhoto: e.target.checked })
              }
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-sm text-gray-700">Show photo in biodata</span>
          </label>
        </div>

        {biodataData.profilePhoto && (
          <div className="mt-4">
            <img
              src={biodataData.profilePhoto}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200"
            />
          </div>
        )}
      </div>
    </div>
  );
};
