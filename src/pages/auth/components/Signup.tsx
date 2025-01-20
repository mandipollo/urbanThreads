import React, { useState } from "react";

// api
import { backendUrl } from "../../../App";
import axios from "axios";
// notify
import { toast } from "react-toastify";
// components
import Button from "../../../components/ui/Button";
import Meta from "../../../components/shared/Meta";

const Signup: React.FC<{
	signupRef: React.RefObject<HTMLDivElement>;
	signinInView: () => void;
}> = ({ signupRef, signinInView }) => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await axios.post(backendUrl + "/api/user/register", {
				name,
				email,
				password,
			});

			if (response.data.success) {
				toast("User registered successfully");
				signinInView();
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			let message;
			if (error instanceof Error) message = error.message;
			else message = String(error);
			console.error({ message });
		}
	};
	return (
		<section className="min-h-screen w-full flex flex-col gap-2 justify-center items-center text-sm">
			<Meta
				title="Sign Up - Create Your Account"
				description="Sign up to create your account. Enjoy personalized shopping, track orders, and save your favorites. Join now for a better shopping experience!"
				keywords="sign up, create account, register, user registration, join now, personalized shopping, account creation"
			/>

			<div ref={signupRef}>
				<form
					onSubmit={submitHandler}
					className="flex w-96 flex-col gap-4 shadow-md p-10 border"
				>
					<div className="flex flex-col gap-2">
						<label htmlFor="name">Name </label>
						<input
							onChange={e => setName(e.target.value)}
							value={name}
							id="name"
							className="border p-2 "
							type="text"
							placeholder="max"
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
							placeholder="max@gmail.com"
							required
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label htmlFor="password">Password</label>
						<input
							onChange={e => setPassword(e.target.value)}
							value={password}
							id="password"
							className="border p-2 "
							type="password"
							placeholder="Please enter your password"
							required
						/>
					</div>
					<Button type="submit" text="Sign up" />
				</form>
			</div>
		</section>
	);
};

export default Signup;
