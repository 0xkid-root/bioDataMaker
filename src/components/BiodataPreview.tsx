import { Download, Share2, X, Edit, Palette, AlertCircle } from 'lucide-react';
import { useState, useCallback } from 'react';
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
  // Recalculate template component when templateId changes
  const TemplateComponent = getTemplateComponent(customization.templateId);

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const handleEdit = useCallback(() => {
    setIsPreviewMode(false);
    onClose();
  }, [setIsPreviewMode, onClose]);

  // Check if template component exists
  if (!TemplateComponent) {
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 overflow-y-auto" onClick={handleBackdropClick}>
        <div className="min-h-screen p-4 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-bold text-gray-900">Template Not Found</h2>
            </div>
            <p className="text-gray-600 mb-6">
              The selected template could not be loaded. Please select a different template.
            </p>
            <button
              onClick={handleEdit}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Go Back to Edit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 overflow-y-auto print:relative print:bg-transparent print:z-0"
      onClick={handleBackdropClick}
    >
      <div className="min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl mb-4 p-4 sticky top-4 z-10 print:hidden">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-xl font-bold text-gray-900">Biodata Preview</h2>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setShowCustomizer(!showCustomizer)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
                  aria-label="Customize template"
                >
                  <Palette className="w-4 h-4" />
                  <span className="hidden sm:inline">Customize</span>
                </button>

                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                  aria-label="Edit biodata"
                >
                  <Edit className="w-4 h-4" />
                  <span className="hidden sm:inline">Edit</span>
                </button>

                <button
                  onClick={onDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                  aria-label="Download PDF"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download PDF</span>
                </button>

                <button
                  onClick={onShare}
                  className="flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all"
                  aria-label="Share biodata"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close preview"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {showCustomizer && (
            <div className="bg-white rounded-lg shadow-xl mb-4 p-4 print:hidden">
              <TemplateCustomizer />
            </div>
          )}

          <div className="bg-gray-100 p-4 rounded-lg print:bg-transparent print:p-0">
            <div 
              id="biodata-preview" 
              className="mx-auto bg-white shadow-lg print:shadow-none print:mx-0"
              onClick={(e) => e.stopPropagation()}
              key={customization.templateId}
            >
              <TemplateComponent data={biodataData} customization={customization} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
