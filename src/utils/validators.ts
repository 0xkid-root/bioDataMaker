// Validation utility functions for form fields

export interface ValidationResult {
    isValid: boolean;
    error?: string;
}

// Name validation - allows letters, spaces, and common name characters
export const validateName = (value: string, fieldName: string = 'Name'): ValidationResult => {
    if (!value || value.trim().length === 0) {
        return { isValid: false, error: `${fieldName} is required` };
    }

    if (value.trim().length < 2) {
        return { isValid: false, error: `${fieldName} must be at least 2 characters` };
    }

    if (value.length > 100) {
        return { isValid: false, error: `${fieldName} must be less than 100 characters` };
    }

    const nameRegex = /^[a-zA-Z\s'.,-]+$/;
    if (!nameRegex.test(value)) {
        return { isValid: false, error: `${fieldName} contains invalid characters` };
    }

    return { isValid: true };
};

// Email validation
export const validateEmail = (value: string): ValidationResult => {
    if (!value || value.trim().length === 0) {
        return { isValid: true }; // Email is optional in most cases
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return { isValid: false, error: 'Please enter a valid email address' };
    }

    return { isValid: true };
};

// Phone number validation (supports Indian and international formats)
export const validatePhone = (value: string, required: boolean = true): ValidationResult => {
    if (!value || value.trim().length === 0) {
        if (required) {
            return { isValid: false, error: 'Phone number is required' };
        }
        return { isValid: true };
    }

    // Remove spaces, hyphens, parentheses for validation
    const cleaned = value.replace(/[\s\-()]/g, '');

    // Check for valid characters (digits and +)
    if (!/^[+\d]+$/.test(cleaned)) {
        return { isValid: false, error: 'Phone number can only contain digits, spaces, hyphens, and +' };
    }

    // Indian phone number (10 digits)
    const indianRegex = /^[6-9]\d{9}$/;
    // International format
    const internationalRegex = /^\+?\d{10,15}$/;

    if (!indianRegex.test(cleaned) && !internationalRegex.test(cleaned)) {
        return { isValid: false, error: 'Please enter a valid phone number (10 digits for Indian numbers)' };
    }

    return { isValid: true };
};

// Date validation (for date of birth)
export const validateDateOfBirth = (value: string): ValidationResult => {
    if (!value || value.trim().length === 0) {
        return { isValid: false, error: 'Date of birth is required' };
    }

    const date = new Date(value);
    const today = new Date();

    if (isNaN(date.getTime())) {
        return { isValid: false, error: 'Please enter a valid date' };
    }

    // Check if date is in the future
    if (date > today) {
        return { isValid: false, error: 'Date of birth cannot be in the future' };
    }

    // Check minimum age (18 years)
    const minAgeDate = new Date();
    minAgeDate.setFullYear(today.getFullYear() - 18);

    if (date > minAgeDate) {
        return { isValid: false, error: 'Age must be at least 18 years' };
    }

    // Check maximum age (100 years)
    const maxAgeDate = new Date();
    maxAgeDate.setFullYear(today.getFullYear() - 100);

    if (date < maxAgeDate) {
        return { isValid: false, error: 'Please enter a valid date of birth' };
    }

    return { isValid: true };
};

// Age validation
export const validateAge = (value: string): ValidationResult => {
    if (!value || value.trim().length === 0) {
        return { isValid: false, error: 'Age is required' };
    }

    const age = parseInt(value, 10);

    if (isNaN(age)) {
        return { isValid: false, error: 'Please enter a valid age' };
    }

    if (age < 18) {
        return { isValid: false, error: 'Age must be at least 18 years' };
    }

    if (age > 100) {
        return { isValid: false, error: 'Please enter a valid age' };
    }

    return { isValid: true };
};

// Height validation (supports both feet-inches and cm)
export const validateHeight = (value: string): ValidationResult => {
    if (!value || value.trim().length === 0) {
        return { isValid: false, error: 'Height is required' };
    }

    // Check for feet-inches format (e.g., 5'6", 5'6, 5.6)
    const feetInchesRegex = /^(\d)['.](\d{1,2})("|'')?$/;
    // Check for cm format (e.g., 168cm, 168 cm, 168)
    const cmRegex = /^(\d{2,3})\s?(cm)?$/i;

    if (feetInchesRegex.test(value.trim())) {
        const match = value.trim().match(feetInchesRegex);
        if (match) {
            const feet = parseInt(match[1], 10);
            const inches = parseInt(match[2], 10);

            if (feet < 3 || feet > 7) {
                return { isValid: false, error: 'Height must be between 3 and 7 feet' };
            }

            if (inches >= 12) {
                return { isValid: false, error: 'Inches must be less than 12' };
            }
        }
        return { isValid: true };
    }

    if (cmRegex.test(value.trim())) {
        const match = value.trim().match(cmRegex);
        if (match) {
            const cm = parseInt(match[1], 10);

            if (cm < 90 || cm > 250) {
                return { isValid: false, error: 'Height must be between 90cm and 250cm' };
            }
        }
        return { isValid: true };
    }

    return { isValid: false, error: 'Please enter height in format: 5\'6" or 168cm' };
};

// Required field validation
export const validateRequired = (value: string | undefined, fieldName: string): ValidationResult => {
    if (!value || value.trim().length === 0) {
        return { isValid: false, error: `${fieldName} is required` };
    }

    return { isValid: true };
};

// Text length validation
export const validateTextLength = (
    value: string,
    minLength: number,
    maxLength: number,
    fieldName: string
): ValidationResult => {
    if (!value || value.trim().length === 0) {
        return { isValid: true }; // Optional field
    }

    if (value.trim().length < minLength) {
        return { isValid: false, error: `${fieldName} must be at least ${minLength} characters` };
    }

    if (value.length > maxLength) {
        return { isValid: false, error: `${fieldName} must be less than ${maxLength} characters` };
    }

    return { isValid: true };
};

// Calculate age from date of birth
export const calculateAge = (dateOfBirth: string): number => {
    const dob = new Date(dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    return age;
};

// Validate select field
export const validateSelect = (value: string | undefined, fieldName: string): ValidationResult => {
    if (!value || value.trim().length === 0) {
        return { isValid: false, error: `Please select ${fieldName}` };
    }

    return { isValid: true };
};
