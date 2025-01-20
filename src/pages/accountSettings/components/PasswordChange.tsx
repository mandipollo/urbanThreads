import React, { SetStateAction, useState } from "react";
// components
import Button from "../../../components/ui/Button";

interface PasswordChangeProps {
	error: string;
	editPassword: boolean;
	newPassword: string;
	confirmPassword: string;
	currentPassword: string;
	setNewPassword: React.Dispatch<SetStateAction<string>>;
	setConfirmPassword: React.Dispatch<SetStateAction<string>>;
	setCurrentPassword: React.Dispatch<SetStateAction<string>>;
	setEditPassword: React.Dispatch<SetStateAction<boolean>>;
	handlePasswordChange: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
const PasswordChange: React.FC<PasswordChangeProps> = ({
	error,
	setEditPassword,
	editPassword,
	newPassword,
	confirmPassword,
	setNewPassword,
	setConfirmPassword,
	currentPassword,
	setCurrentPassword,
	handlePasswordChange,
}) => {
	const [showPassword, setShowPassword] = useState({
		password: false,
		newPassword: false,
		confirmPassword: false,
	});

	const handleShowPassword = (field: keyof typeof showPassword) => {
		setShowPassword(prev => ({
			...prev,
			[field]: !prev[field],
		}));
	};

	return (
		<div className="border-b flex p-4 items-center w-full">
			{!editPassword ? (
				<button
					onClick={() => setEditPassword(!editPassword)}
					className="underline"
				>
					CHANGE PASSWORD
				</button>
			) : (
				<form
					onSubmit={handlePasswordChange}
					className="flex flex-col w-full space-y-2"
				>
					{error && (
						<span className="border p-4 border-red-400">
							<p className="text-red-400">{error}</p>
						</span>
					)}

					<div className="flex flex-col gap-2 relative">
						<label htmlFor="current-password">CURRENT PASSWORD</label>
						<input
							value={currentPassword}
							onChange={e => setCurrentPassword(e.target.value)}
							id="current-password"
							type={showPassword.password ? "text" : "password"}
							className="p-4 border focus:outline-black "
						/>
						<span
							onClick={() => handleShowPassword("password")}
							className="absolute right-2 top-12"
						>
							<figure>
								{!showPassword.password ? (
									<img src="/svg/close-eye.svg" className="h-6 w-6" alt="" />
								) : (
									<img src="/svg/open-eye.svg" className="h-6 w-6" alt="" />
								)}
							</figure>
						</span>
					</div>
					<div className="flex flex-col gap-2 relative">
						<label htmlFor="new-password">NEW PASSWORD</label>
						<input
							value={newPassword}
							onChange={e => setNewPassword(e.target.value)}
							id="new-password"
							type={showPassword.newPassword ? "text" : "password"}
							className="p-4 border focus:outline-black "
						/>
						<span
							onClick={() => handleShowPassword("newPassword")}
							className="absolute right-2 top-12"
						>
							<figure>
								{!showPassword.newPassword ? (
									<img src="/svg/close-eye.svg" className="h-6 w-6" alt="" />
								) : (
									<img src="/svg/open-eye.svg" className="h-6 w-6" alt="" />
								)}
							</figure>
						</span>
					</div>
					<div className="flex flex-col gap-2 relative">
						<label htmlFor="confirm-password">CONFIRM PASSWORD</label>
						<input
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}
							id="confirm-password"
							type={showPassword.confirmPassword ? "text" : "password"}
							className="p-4 border focus:outline-black "
						/>
						<span
							onClick={() => handleShowPassword("confirmPassword")}
							className="absolute right-2 top-12"
						>
							<figure>
								{!showPassword.confirmPassword ? (
									<img src="/svg/close-eye.svg" className="h-6 w-6" alt="" />
								) : (
									<img src="/svg/open-eye.svg" className="h-6 w-6" alt="" />
								)}
							</figure>
						</span>
					</div>
					<Button text="SAVE" type="submit" />
					<button
						onClick={() => setEditPassword(false)}
						className="border border-black p-4 hover:text-gray-600"
						type="button"
					>
						CANCEL
					</button>
				</form>
			)}
		</div>
	);
};

export default PasswordChange;
