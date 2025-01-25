import React, { useState } from "react";
import forgotPasswordService from "./service/forgotPasswordService";
import { toast } from "react-toastify";
import Meta from "../../components/shared/Meta";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
	const navigate = useNavigate();

	//
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");

	const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			if (!email) {
				throw new Error("Please enter valid email");
			}
			const response = await forgotPasswordService(email);

			if (response.data.success) {
				setEmail("");
				navigate("/password-reset");
			}
		} catch (error) {
			let message = "An error occurred.";
			if (error instanceof Error) message = error.message;
			else message = String(error);
			toast.error(message);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="w-full h-full flex flex-col gap-4 justify-center items-center">
			<Meta
				title="Forgot Password - Reset Your Account Access"
				description="Reset your password securely to regain access to your account. Follow the simple and secure steps to create a new password and continue managing your details and purchases."
				keywords="forgot password, reset password, account recovery, password assistance, secure password reset, regain access, account recovery process, secure account login"
			/>

			<h2 className="text-xl md:text-2xl">Forgot your password?</h2>
			<form
				onSubmit={handleForgotPassword}
				className="flex w-96 flex-col gap-4 shadow-md p-10 border"
			>
				<div className="flex flex-col gap-2">
					<label htmlFor="email">Enter your email </label>
					<input
						onChange={e => setEmail(e.target.value)}
						value={email}
						id="email"
						className="border p-2 "
						type="email"
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

export default ForgotPassword;
