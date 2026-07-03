import type { FormEvent } from "react";

export function validateFirstName(value: string): string | null {
	const trimmedValue = value.trim();

	if (!trimmedValue) {
		return "First Name is required.";
	}

	if (!/^[A-Za-z]+$/.test(trimmedValue)) {
		return "First Name must contain alphabetic characters only.";
	}

	if (trimmedValue.length < 2 || trimmedValue.length > 50) {
		return "First Name must be between 2 and 50 characters.";
	}

	return null;
}

export function validateLastName(value: string): string | null {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
        return "Last Name is required.";
    }

    if (!/^[A-Za-z]+$/.test(trimmedValue)) {
        return "Last Name must contain alphabetic characters only.";
    }

    if (trimmedValue.length < 2 || trimmedValue.length > 50) {
        return "Last Name must be between 2 and 50 characters.";
    }

    return null;
}

export function validateMobileNumber(value: string): string | null {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
        return "Mobile Number is required.";
    }

    if (!/^04\d{8}$/.test(trimmedValue)) {
        return "Mobile Number must be a valid Australian format (10 digits, starts with 04).";
    }

    if (trimmedValue.length !== 10) {
        return "Mobile Number must be exactly 10 digits.";
    }

    return null;
}

export function validateEmail(value: string): string | null {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
        return "Email Address is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
        return "Email Address must be a valid email format.";
    }
    return null;
}

export function validateHomeAddress(value: string): string | null {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
        return "Home Address is required.";
    }

    if (trimmedValue.length < 5 || trimmedValue.length > 100) {
        return "Home Address must be between 5 and 100 characters.";
    }

    return null;
}

export function validatePassword(value: string): string | null {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
        return "Password is required.";
    }

    if (trimmedValue.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    if (!/[A-Z]/.test(trimmedValue)) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(trimmedValue)) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!/[0-9]/.test(trimmedValue)) {
        return "Password must contain at least one number.";
    }       

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(trimmedValue)) {
        return "Password must contain at least one special character.";
    }
    return null;
}

export function validateConfirmPassword(password: string, confirmPassword: string): string | null {
    const trimmedConfirmPassword = confirmPassword.trim();

    if (!trimmedConfirmPassword) {
        return "Confirm Password is required.";
    }

    if (password !== trimmedConfirmPassword) {
        return "Passwords do not match.";
    }

    return null;
}