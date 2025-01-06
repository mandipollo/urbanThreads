import React, { useState } from "react";
import { backendUrl } from "../../App";
import axios from "axios";
import { toast } from "react-toastify";

// state management
import { setToken } from "../../store/tokenSlice";
import { useAppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import Button from "../cards/Button";

const Login: React.FC<{
	signupInView: () => void;
	signinRef: React.RefObject<HTMLDivElement>;
}> = ({ signupInView, signinRef }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await axios.post(backendUrl + "/api/user/login", {
				email,
				password,
			});

			if (response.data.success) {
				const { token } = response.data;

				dispatch(setToken(token));
				navigate("/account");
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
			<div ref={signinRef}>
				<form
					onSubmit={submitHandler}
					className="flex w-80 flex-col gap-4 shadow-md p-10 border"
				>
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
							className="border p-2"
							type="password"
							placeholder="Please enter your password"
							required
						/>
					</div>

					<Button type="submit" text="Login" />
				</form>

				<button onClick={signupInView}>Sign up</button>
			</div>
		</section>
	);
};

export default Login;
