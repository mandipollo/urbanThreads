import React, { useState } from "react";
// api
import signupService from "../service/signupService";
// notify
import { toast } from "react-toastify";

const Signup: React.FC<{
	signupRef: React.RefObject<HTMLDivElement>;
	signinInView: () => void;
}> = ({ signupRef, signinInView }) => {
	//
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	//

	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			if (
				!firstName ||
				lastName ||
				!email ||
				!password ||
				password.length < 8
			) {
				throw new Error(
					"Please provide valid inputs. Password must be at least 8 characters long."
				);
			}

			const response = await signupService(
				firstName,
				lastName,
				email,
				password
			);

			if (response.data.success) {
				toast("User registered successfully");
				signinInView();
			} else {
				throw new Error(
					response.data.message || "Login failed. Please try again."
				);
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
		<section
			aria-label="Sign up section"
			className="min-h-screen w-full flex flex-col gap-2 justify-center items-center text-sm"
		>
			<div ref={signupRef}>
				<form
					onSubmit={submitHandler}
					className="flex w-96 flex-col gap-4 shadow-md p-10 border"
				>
					<div className="flex flex-col gap-2">
						<label htmlFor="first_name">First name </label>
						<input
							onChange={e => setFirstName(e.target.value)}
							value={firstName}
							id="first_name"
							className="border p-2 "
							type="text"
							placeholder="Luke"
							required
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="last_name">Last name </label>
						<input
							onChange={e => setLastName(e.target.value)}
							value={lastName}
							id=" last_name"
							className="border p-2 "
							type="text"
							placeholder="Skywalker"
							required
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="email">Email </label>
						<input
							onChange={e => setEmail(e.target.value)}
							value={email}
							id="email"
							className="border p-2 "
							type="email"
							placeholder="Skywalker@gmail.com"
							required
						/>
					</div>

					<div className=" relative flex flex-col gap-2">
						<label htmlFor="password">Password</label>
						<input
							onChange={e => setPassword(e.target.value)}
							value={password}
							id="password"
							className="border p-2 "
							type={showPassword ? "text" : "password"}
							placeholder="Please enter your password"
							required
						/>
						<span
							onClick={handleShowPassword}
							className="absolute right-2 top-8"
						>
							<figure>
								{!showPassword ? (
									<img
										src="/svg/close-eye.svg"
										className="h-6 w-6"
										alt="hide password"
									/>
								) : (
									<img
										src="/svg/open-eye.svg"
										className="h-6 w-6"
										alt="show password"
									/>
								)}
							</figure>
						</span>
					</div>
					<button
						disabled={isLoading}
						type="submit"
						aria-label="sign up , new user"
						className="bg-black p-4 w-full border text-white hover:bg-stone-800 "
					>
						SIGN UP
					</button>
				</form>
			</div>
		</section>
	);
};

export default Signup;
