import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
    message?: string;
    className?: string;
}

export const ErrorMessage = ({ message, className = '' }: ErrorMessageProps) => {
    if (!message) return null;

    return (
        <div
            className={`flex items-start gap-2 mt-1 text-sm text-red-600 animate-fadeIn ${className}`}
            role="alert"
        >
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{message}</span>
        </div>
    );
};
