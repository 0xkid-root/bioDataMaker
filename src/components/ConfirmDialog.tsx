import { AlertTriangle, X } from 'lucide-react';

interface ConfirmDialogProps {
    isOpen: boolean;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
    variant?: 'danger' | 'warning' | 'info';
}

export const ConfirmDialog = ({
    isOpen,
    title,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    variant = 'warning',
}: ConfirmDialogProps) => {
    if (!isOpen) return null;

    const variantStyles = {
        danger: {
            icon: 'text-red-600',
            button: 'bg-red-600 hover:bg-red-700',
        },
        warning: {
            icon: 'text-yellow-600',
            button: 'bg-yellow-600 hover:bg-yellow-700',
        },
        info: {
            icon: 'text-blue-600',
            button: 'bg-blue-600 hover:bg-blue-700',
        },
    };

    const styles = variantStyles[variant];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fadeIn">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-slideUp">
                <div className="p-6">
                    <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 ${styles.icon}`}>
                            <AlertTriangle className="w-6 h-6" />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                            <p className="text-sm text-gray-600">{message}</p>
                        </div>

                        <button
                            onClick={onCancel}
                            className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50 rounded-b-lg">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors ${styles.button}`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};
