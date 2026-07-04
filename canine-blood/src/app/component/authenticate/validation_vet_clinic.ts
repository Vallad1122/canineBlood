export function validateClinicName(value: string): string | null {
	const trimmedValue = value.trim();

	if (!trimmedValue) {
		return "Clinic Name is required.";
	}

	if (trimmedValue.length < 2 || trimmedValue.length > 100) {
		return "Clinic Name must be between 2 and 100 characters.";
	}

	return null;
}

export function validateClinicContactDetails(value: string): string | null {
	const trimmedValue = value.trim();
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const phonePattern = /^(?:\+61|0)\d{9,10}$/;

	if (!trimmedValue) {
		return "Clinic Contact Details are required.";
	}

	if (!emailPattern.test(trimmedValue) && !phonePattern.test(trimmedValue.replace(/\s+/g, ""))) {
		return "Clinic Contact Details must be a valid Australian phone number or email address.";
	}

	return null;
}

export function validateClinicEmail(value: string): string | null {
	const trimmedValue = value.trim();

	if (!trimmedValue) {
		return "Email Address is required.";
	}

	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
		return "Email Address must be a valid email format.";
	}

	return null;
}

export function validateClinicPassword(value: string): string | null {
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

export function validateClinicConfirmPassword(confirmPassword: string, password: string): string | null {
	const trimmedConfirmPassword = confirmPassword.trim();

	if (!trimmedConfirmPassword) {
		return "Confirm Password is required.";
	}

	if (password !== trimmedConfirmPassword) {
		return "Passwords do not match.";
	}

	return null;
}