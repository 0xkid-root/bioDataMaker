import { useState } from 'react';
import { Save, Trash2, Star, Copy, Download, X, Calendar, Image as ImageIcon } from 'lucide-react';
import { useSavedTemplates, SavedTemplate } from '../hooks/useSavedTemplates';
import { ConfirmDialog } from './ConfirmDialog';
import toast from 'react-hot-toast';

interface TemplateManagerProps {
    onClose: () => void;
    onLoadTemplate?: (template: SavedTemplate) => void;
}

export const TemplateManager = ({ onClose, onLoadTemplate }: TemplateManagerProps) => {
    const { templates, isLoading, deleteTemplate, toggleFavorite, duplicateTemplate } = useSavedTemplates();
    const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

    const handleLoadTemplate = (template: SavedTemplate) => {
        if (onLoadTemplate) {
            onLoadTemplate(template);
            toast.success(`Loaded template: ${template.template_name}`);
            onClose();
        }
    };

    const handleDelete = async (id: string) => {
        await deleteTemplate(id);
        setDeleteConfirm(null);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fadeIn">
                <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col animate-slideUp">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Saved Templates</h2>
                            <p className="text-sm text-gray-600 mt-1">
                                Manage your saved biodata templates
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <X className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {isLoading ? (
                            <div className="flex items-center justify-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                            </div>
                        ) : templates.length === 0 ? (
                            <div className="text-center py-12">
                                <Save className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    No saved templates yet
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Save your first template to reuse it later
                                </p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-4">
                                {templates.map((template) => (
                                    <div
                                        key={template.id}
                                        className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all group"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-start gap-3 flex-1">
                                                {/* Profile Photo Thumbnail */}
                                                {template.biodata_data.profilePhoto ? (
                                                    <img
                                                        src={template.biodata_data.profilePhoto}
                                                        alt="Profile"
                                                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                                                    />
                                                ) : (
                                                    <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
                                                        <ImageIcon className="w-6 h-6 text-gray-400" />
                                                    </div>
                                                )}
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-900 mb-1">
                                                        {template.template_name}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                                        <Calendar className="w-3 h-3" />
                                                        <span>{formatDate(template.created_at)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => toggleFavorite(template.id, template.is_favorite)}
                                                className="p-1 hover:bg-gray-100 rounded transition-colors"
                                            >
                                                <Star
                                                    className={`w-5 h-5 ${template.is_favorite
                                                        ? 'text-yellow-500 fill-yellow-500'
                                                        : 'text-gray-400'
                                                        }`}
                                                />
                                            </button>
                                        </div>

                                        <div className="text-sm text-gray-600 mb-4">
                                            <p>Template: {template.template_id}</p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => handleLoadTemplate(template)}
                                                className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Download className="w-4 h-4" />
                                                <span>Load</span>
                                            </button>
                                            <button
                                                onClick={() => duplicateTemplate(template)}
                                                className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
                                                title="Duplicate"
                                            >
                                                <Copy className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => setDeleteConfirm(template.id)}
                                                className="px-3 py-2 bg-red-100 text-red-700 text-sm rounded-lg hover:bg-red-200 transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50 border-t rounded-b-lg">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Dialog */}
            <ConfirmDialog
                isOpen={deleteConfirm !== null}
                title="Delete Template?"
                message="Are you sure you want to delete this template? This action cannot be undone."
                confirmText="Delete"
                cancelText="Cancel"
                variant="danger"
                onConfirm={() => deleteConfirm && handleDelete(deleteConfirm)}
                onCancel={() => setDeleteConfirm(null)}
            />
        </>
    );
};
