import { Download, Share2, X, Edit, Palette } from 'lucide-react';
import { useState } from 'react';
import { useBiodata } from '../context/BiodataContext';
import { getTemplateComponent } from './templates';
import { TemplateCustomizer } from './TemplateCustomizer';

interface BiodataPreviewProps {
  onClose: () => void;
  onDownload: () => void;
  onShare: () => void;
}

export const BiodataPreview = ({
  onClose,
  onDownload,
  onShare,
}: BiodataPreviewProps) => {
  const { biodataData, customization, setIsPreviewMode } = useBiodata();
  const [showCustomizer, setShowCustomizer] = useState(false);
  const TemplateComponent = getTemplateComponent(customization.templateId);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl mb-4 p-4 sticky top-4 z-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-xl font-bold text-gray-900">Biodata Preview</h2>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setShowCustomizer(!showCustomizer)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
                >
                  <Palette className="w-4 h-4" />
                  <span className="hidden sm:inline">Customize</span>
                </button>

                <button
                  onClick={() => {
                    setIsPreviewMode(false);
                    onClose();
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  <Edit className="w-4 h-4" />
                  <span className="hidden sm:inline">Edit</span>
                </button>

                <button
                  onClick={onDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download PDF</span>
                </button>

                <button
                  onClick={onShare}
                  className="flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {showCustomizer && (
            <div className="bg-white rounded-lg shadow-xl mb-4 p-4">
              <TemplateCustomizer />
            </div>
          )}

          <div className="bg-gray-100 p-4 rounded-lg">
            <div id="biodata-preview" className="mx-auto">
              <TemplateComponent data={biodataData} customization={customization} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
