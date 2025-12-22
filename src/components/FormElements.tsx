import { ChangeEvent } from 'react';
import { CheckCircle } from 'lucide-react';
import { ErrorMessage } from './ErrorMessage';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  success?: boolean;
  helperText?: string;
  maxLength?: number;
  disabled?: boolean;
}

export const Input = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  required,
  error,
  success,
  helperText,
  maxLength,
  disabled,
}: InputProps) => {
  const hasError = !!error;
  const showSuccess = success && !hasError && value.length > 0;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          className={`w-full px-4 py-2.5 border rounded-lg transition-all ${hasError
              ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500'
              : showSuccess
                ? 'border-green-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${showSuccess ? 'pr-10' : ''
            }`}
        />
        {showSuccess && (
          <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
        )}
      </div>
      {error && <ErrorMessage message={error} />}
      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
      {maxLength && (
        <p className="mt-1 text-xs text-gray-400 text-right">
          {value.length}/{maxLength}
        </p>
      )}
    </div>
  );
};

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  aiAssist?: boolean;
  onAiAssist?: () => void;
  error?: string;
  helperText?: string;
  maxLength?: number;
  required?: boolean;
}

export const TextArea = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  rows = 3,
  aiAssist,
  onAiAssist,
  error,
  helperText,
  maxLength,
  required,
}: TextAreaProps) => {
  const hasError = !!error;

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
        {aiAssist && onAiAssist && (
          <button
            type="button"
            onClick={onAiAssist}
            className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors"
          >
            <span>✨</span> AI Assist
          </button>
        )}
      </div>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className={`w-full px-4 py-2.5 border rounded-lg transition-all resize-none ${hasError
            ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
      />
      {error && <ErrorMessage message={error} />}
      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
      {maxLength && (
        <p className="mt-1 text-xs text-gray-400 text-right">
          {value.length}/{maxLength}
        </p>
      )}
    </div>
  );
};

interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
  error?: string;
  success?: boolean;
  helperText?: string;
  disabled?: boolean;
}

export const Select = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  required,
  error,
  success,
  helperText,
  disabled,
}: SelectProps) => {
  const hasError = !!error;
  const showSuccess = success && !hasError && value.length > 0;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={`w-full px-4 py-2.5 border rounded-lg transition-all appearance-none ${hasError
              ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500'
              : showSuccess
                ? 'border-green-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${showSuccess ? 'pr-10' : 'pr-10'
            }`}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-2">
          {showSuccess && <CheckCircle className="w-5 h-5 text-green-500" />}
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && <ErrorMessage message={error} />}
      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
    </div>
  );
};
