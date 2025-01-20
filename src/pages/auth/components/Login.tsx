import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// api
import { backendUrl } from "../../../App";
import axios from "axios";

// notify
import { toast } from "react-toastify";
// components
import Button from "../../../components/ui/Button";
// state management
import { setToken } from "../../../store/tokenSlice";
import { setUser } from "../../../store/userSlice";
import { useAppDispatch } from "../../../store/store";
import { initializeCart } from "../../../store/cartSlice";
import Meta from "../../../components/shared/Meta";

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
				const { token, name, email, address, cart } = response.data;

				// modify the cart data

				const modifiedCart = cart.map((item: any) => {
					item.productId.size = item.size;
					return item.productId;
				});
				dispatch(initializeCart(modifiedCart));
				dispatch(setToken(token));
				dispatch(setUser({ name, email, address }));
				navigate("/account");
				console.log("logged in ");
			} else {
				toast.error(response.data.message);
				console.log("problem with log");
			}
		} catch (error) {
			let message;
			if (error instanceof Error) message = error.message;
			else message = String(error);
			console.error({ message });
			toast.error(message);
		}
	};
	return (
		<section className="min-h-screen w-full flex flex-col gap-2 justify-center items-center text-sm">
			<Meta
				title="Login - Access Your Account"
				description="Log in to your account to view your orders, manage your details, and complete your purchase. Secure and easy login process."
				keywords="login, user login, account access, sign in, secure login, login page, user authentication"
			/>
			<div ref={signinRef}>
				<form
					onSubmit={submitHandler}
					className="flex w-96 flex-col gap-4 shadow-md p-10 border"
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
