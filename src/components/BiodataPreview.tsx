import { Download, Share2, X, Edit, Palette, AlertCircle } from 'lucide-react';
import { useState, useCallback } from 'react';
import { useBiodata } from '../context/BiodataContext';
import { getTemplateComponent } from './templates';
import { TemplateCustomizer } from './TemplateCustomizer';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { toast } from 'react-hot-toast';

interface BiodataPreviewProps {
  onClose: () => void;
  onShare: () => void;
  onDownload?: () => void;
}

export const BiodataPreview = ({
  onClose,
  onShare,
  onDownload,
}: BiodataPreviewProps) => {
  const { biodataData, customization, setIsPreviewMode } = useBiodata();
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Recalculate template component when templateId changes
  const TemplateComponent = getTemplateComponent(customization.templateId);

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const downloadPDF = async () => {
    const element = document.getElementById('biodata-preview');
    if (!element) return;

    try {
      setIsDownloading(true);
      const toastId = toast.loading('Preparing your professional PDF...');

      // Optimize for high quality
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(`${biodataData.personal?.fullName || 'biodata'}.pdf`);

      toast.success('Biodata downloaded successfully!', { id: toastId });
    } catch (error) {
      console.error('Download failed:', error);
      toast.error('Failed to download PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

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
      className="fixed inset-0 bg-stone-900/60 z-50 overflow-y-auto print:relative print:bg-transparent print:z-0"
      onClick={handleBackdropClick}
    >
      <div className="min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#fffcf9] rounded-2xl shadow-xl mb-6 p-4 sticky top-4 z-10 print:hidden border border-rose-100/50 bg-white/90">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-serif">Final Preview</h2>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setShowCustomizer(!showCustomizer)}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-xl hover:bg-amber-100 transition-all font-bold border border-amber-200"
                  aria-label="Customize template"
                >
                  <Palette className="w-4 h-4" />
                  <span className="hidden sm:inline">Change Style</span>
                </button>

                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-700 rounded-xl hover:bg-rose-100 transition-all font-bold border border-rose-200"
                  aria-label="Edit biodata"
                >
                  <Edit className="w-4 h-4" />
                  <span className="hidden sm:inline">Modify</span>
                </button>

                <button
                  onClick={onDownload || downloadPDF}
                  disabled={isDownloading}
                  className={`flex items-center gap-2 px-6 py-2 bg-rose-700 text-white rounded-xl hover:bg-rose-800 transition-all font-bold shadow-md ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  aria-label="Download PDF"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline font-serif uppercase tracking-wider">{isDownloading ? 'Preparing...' : 'Download PDF'}</span>
                </button>

                <button
                  onClick={onShare}
                  className="flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 rounded-xl hover:bg-stone-200 transition-all font-bold border border-stone-200"
                  aria-label="Share biodata"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share</span>
                </button>

                <div className="w-px h-8 bg-rose-100 mx-2 hidden sm:block" />

                <button
                  onClick={onClose}
                  className="p-2 hover:bg-rose-50 rounded-full transition-colors group"
                  aria-label="Close preview"
                >
                  <X className="w-6 h-6 text-gray-400 group-hover:text-rose-600" />
                </button>
              </div>
            </div>
          </div>

          {showCustomizer && (
            <div className="bg-white rounded-lg shadow-xl mb-4 p-4 print:hidden">
              <TemplateCustomizer />
            </div>
          )}

          <div className="bg-[#fcfaf7] p-8 md:p-16 rounded-[3rem] print:bg-transparent print:p-0 border border-rose-50 shadow-inner min-h-[85vh] flex items-center justify-center relative overflow-hidden">


            <div
              id="biodata-preview"
              className="bg-white shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] print:shadow-none rounded-sm relative z-10 border-8 border-double transition-all duration-700"
              style={{ borderColor: customization.primaryColor + '20' }}
              onClick={(e) => e.stopPropagation()}
              key={customization.templateId}
            >
              {/* Internal decorative border */}
              <div className="absolute inset-2 border border-rose-100/30 pointer-events-none" />
              <TemplateComponent data={biodataData} customization={customization} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
