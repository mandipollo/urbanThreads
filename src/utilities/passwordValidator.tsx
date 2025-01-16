const passwordValidator = (
	currentPassword: string,
	newPassword: string,
	confirmPassword: string
) => {
	if (
		currentPassword.length <= 8 ||
		newPassword.length <= 8 ||
		confirmPassword.length <= 8
	) {
		throw new Error("Password must be longer then 8 character");
	}

	if (newPassword !== confirmPassword) {
		throw new Error("Passwords do not match");
	}

	return true;
};

export default passwordValidator;
