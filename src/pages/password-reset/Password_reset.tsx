import React, { useState } from "react";
import { toast } from "react-toastify";
import Meta from "../../components/shared/Meta";
import passwordResetService from "./service/passwordResetService";
import { useLocation, useNavigate } from "react-router-dom";

const Password_reset = () => {
	const navigate = useNavigate();
	// retreive the token if navigated from link
	const { pathname } = useLocation();
	const tokenUrl = pathname.split("/")[2];

	const [token, setToken] = useState<string>(tokenUrl || "");

	//
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [newPassword, setNewPassword] = useState<string>("");

	const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			if (!token || !newPassword) {
				throw new Error("Please enter a valid token or password");
			}

			if (newPassword.trim().length < 8) {
				throw new Error("Passwords needs to be atleast 8 characters long!");
			}
			const response = await passwordResetService(token, newPassword);
			if (response.data.success) {
				toast(response.data.message);
				setNewPassword("");
				navigate("/user-auth");
			}
		} catch (error) {
			let message = "An error occurred.";
			if (error instanceof Error) message = error.message;
			else message = String(error);
			toast.error(message);
		} finally {
			setIsLoading(false);
			setNewPassword("");
		}
	};
	return (
		<div className="w-full h-full flex flex-col gap-4 justify-center items-center">
			<Meta
				title="Forgot Password - Reset Your Account Access"
				description="Reset your password securely to regain access to your account. Follow the simple and secure steps to create a new password and continue managing your details and purchases."
				keywords="forgot password, reset password, account recovery, password assistance, secure password reset, regain access, account recovery process, secure account login"
			/>
			<div>
				<h2 className="text-md md:text-xl">Reset your password</h2>
				<p className="text-xs md:text-sm">
					Copy the reset code from your email and paste it below.
				</p>
			</div>

			<form
				onSubmit={handlePasswordReset}
				className="flex w-96 flex-col gap-4 shadow-md p-10 border"
			>
				<div className="flex flex-col gap-2">
					<label className="text-gray-600" htmlFor="token">
						Reset token
					</label>
					<input
						onChange={e => setToken(e.target.value)}
						value={token}
						id="token"
						className="border p-2 "
						type="text"
						required
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-gray-600" htmlFor="email">
						New password
					</label>
					<input
						onChange={e => setNewPassword(e.target.value)}
						value={newPassword}
						id="email"
						className="border p-2 "
						type="password"
						required
					/>
				</div>

				<button
					disabled={isLoading}
					type="submit"
					aria-label="Login"
					className="bg-black p-4 w-full border text-white hover:bg-stone-800 "
				>
					SEND
				</button>
			</form>
		</div>
	);
};

export default Password_reset;
