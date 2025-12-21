import { useState } from 'react';
import { X, Copy, Check, QrCode } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useBiodata } from '../context/BiodataContext';
import { copyToClipboard, getShareUrl, generateQRCode } from '../utils/helpers';

interface ShareDialogProps {
  onClose: () => void;
}

export const ShareDialog = ({ onClose }: ShareDialogProps) => {
  const { biodataData, customization } = useBiodata();
  const [expiryHours, setExpiryHours] = useState<24 | 168>(168);
  const [shareUrl, setShareUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const generateShareLink = async () => {
    setIsGenerating(true);
    try {
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + expiryHours);

      const { data, error } = await supabase
        .from('shared_biodata')
        .insert({
          data: biodataData,
          template_id: customization.templateId,
          customization: customization,
          expires_at: expiresAt.toISOString(),
        })
        .select('id')
        .maybeSingle();

      if (error) throw error;

      if (data) {
        const url = getShareUrl(data.id);
        setShareUrl(url);
      }
    } catch (error) {
      console.error('Failed to generate share link:', error);
      alert('Failed to generate share link. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(shareUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Share Biodata</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {!shareUrl ? (
            <>
              <div>
                <p className="text-gray-600 mb-4">
                  Create a secure shareable link for your biodata. Choose how
                  long the link should remain active.
                </p>

                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50">
                    <input
                      type="radio"
                      name="expiry"
                      value="24"
                      checked={expiryHours === 24}
                      onChange={() => setExpiryHours(24)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">24 Hours</p>
                      <p className="text-sm text-gray-600">
                        Link expires after 1 day
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50">
                    <input
                      type="radio"
                      name="expiry"
                      value="168"
                      checked={expiryHours === 168}
                      onChange={() => setExpiryHours(168)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">7 Days</p>
                      <p className="text-sm text-gray-600">
                        Link expires after 1 week
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <button
                onClick={generateShareLink}
                disabled={isGenerating}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
              >
                {isGenerating ? 'Generating...' : 'Generate Share Link'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Your biodata will be stored temporarily and automatically deleted
                after the selected time period.
              </p>
            </>
          ) : (
            <>
              <div>
                <p className="text-green-600 font-semibold mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Share link generated successfully!
                </p>

                <div className="bg-gray-50 p-4 rounded-lg break-all text-sm text-gray-700 mb-4">
                  {shareUrl}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        Copy Link
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setShowQR(!showQR)}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all"
                  >
                    <QrCode className="w-5 h-5" />
                    QR
                  </button>
                </div>
              </div>

              {showQR && (
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    Scan QR code to view biodata
                  </p>
                  <img
                    src={generateQRCode(shareUrl)}
                    alt="QR Code"
                    className="mx-auto rounded-lg border-2 border-gray-200"
                  />
                </div>
              )}

              <p className="text-xs text-gray-500 text-center">
                This link will expire in {expiryHours === 24 ? '24 hours' : '7 days'}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
