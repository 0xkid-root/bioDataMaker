import { CheckCircle } from 'lucide-react';

interface ProgressIndicatorProps {
    current: number;
    total: number;
    label?: string;
}

export const ProgressIndicator = ({ current, total, label }: ProgressIndicatorProps) => {
    const percentage = Math.round((current / total) * 100);

    return (
        <div className="w-full">
            {label && (
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                    <span className="text-sm font-semibold text-blue-600">
                        {current}/{total} fields
                    </span>
                </div>
            )}

            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            {percentage === 100 && (
                <div className="flex items-center gap-1 mt-2 text-green-600 animate-fadeIn">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Section completed!</span>
                </div>
            )}
        </div>
    );
};
