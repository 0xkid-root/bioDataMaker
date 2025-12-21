import { Trash2, Shield, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { useBiodata } from '../context/BiodataContext';

interface PrivacyControlsProps {
  onClose: () => void;
}

export const PrivacyControls = ({ onClose }: PrivacyControlsProps) => {
  const { clearAllData } = useBiodata();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClearData = () => {
    clearAllData();
    setShowConfirm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full">
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Privacy & Data</h2>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">
              Your Privacy Matters
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Your data is stored only in your browser</li>
              <li>• No accounts or personal tracking</li>
              <li>• Shared links expire automatically</li>
              <li>• No permanent server storage of your biodata</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Data Storage</h3>
            <p className="text-sm text-gray-600">
              Your biodata is saved in your browser's local storage as a draft.
              It will remain until you:
            </p>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• Clear your browser data</li>
              <li>• Use the "Clear All Data" button below</li>
              <li>• Manually delete it</li>
            </ul>
          </div>

          {!showConfirm ? (
            <button
              onClick={() => setShowConfirm(true)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all"
            >
              <Trash2 className="w-5 h-5" />
              Clear All Data
            </button>
          ) : (
            <div className="space-y-3">
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-1">
                      Are you sure?
                    </h4>
                    <p className="text-sm text-red-800">
                      This will permanently delete all your biodata information
                      from this browser. This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClearData}
                  className="flex-1 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all"
                >
                  Yes, Delete All
                </button>
              </div>
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
