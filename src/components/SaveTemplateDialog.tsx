import { useState } from 'react';
import { Save, X } from 'lucide-react';
import { useSavedTemplates } from '../hooks/useSavedTemplates';
import { BiodataData, TemplateCustomization } from '../types/biodata';

interface SaveTemplateDialogProps {
    isOpen: boolean;
    onClose: () => void;
    biodataData: Partial<BiodataData>;
    templateId: string;
    customization: TemplateCustomization;
}

export const SaveTemplateDialog = ({
    isOpen,
    onClose,
    biodataData,
    templateId,
    customization,
}: SaveTemplateDialogProps) => {
    const [templateName, setTemplateName] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const { saveTemplate } = useSavedTemplates();

    if (!isOpen) return null;

    const handleSave = async () => {
        if (!templateName.trim()) {
            return;
        }

        setIsSaving(true);
        const success = await saveTemplate(
            templateName.trim(),
            biodataData,
            templateId,
            customization
        );

        setIsSaving(false);
        if (success) {
            setTemplateName('');
            onClose();
        }
    };

    const handleClose = () => {
        setTemplateName('');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fadeIn">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-slideUp">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 rounded-full p-2">
                                <Save className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Save Template</h3>
                        </div>
                        <button
                            onClick={handleClose}
                            disabled={isSaving}
                            className="p-1 hover:bg-gray-100 rounded transition-colors disabled:opacity-50"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">
                        Save your current biodata as a template to reuse later.
                    </p>

                    <div className="mb-6">
                        <label
                            htmlFor="templateName"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Template Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                            id="templateName"
                            type="text"
                            value={templateName}
                            onChange={(e) => setTemplateName(e.target.value)}
                            placeholder="e.g., My Wedding Biodata"
                            maxLength={100}
                            disabled={isSaving}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            {templateName.length}/100 characters
                        </p>
                    </div>

                    <div className="flex items-center justify-end gap-3">
                        <button
                            onClick={handleClose}
                            disabled={isSaving}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={!templateName.trim() || isSaving}
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isSaving ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                    <span>Saving...</span>
                                </>
                            ) : (
                                <>
                                    <Save className="w-4 h-4" />
                                    <span>Save Template</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
