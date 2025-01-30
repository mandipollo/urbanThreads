import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//service
import loginService from "../service/loginService";

// notify
import { toast } from "react-toastify";

// state management
import { setToken } from "../../../store/tokenSlice";
import { setUser } from "../../../store/userSlice";
import { useAppDispatch } from "../../../store/store";
import { initializeCart } from "../../../store/cartSlice";

const Login: React.FC<{
	signupInView: () => void;
	signinRef: React.RefObject<HTMLDivElement | null>;
}> = ({ signupInView, signinRef }) => {
	//
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	//
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const [isLoading, setIsLoading] = useState<boolean>(false);
	//
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			if (!email || !password || password.length < 8) {
				throw new Error(
					"Please provide valid inputs. Password must be at least 8 characters long."
				);
			}
			const response = await loginService(email, password);
			if (response.data.success) {
				const { token, firstName, lastName, email, address, cart } =
					response.data;

				// modify the cart data

				const modifiedCart = cart.map((item: any) => {
					item.productId.size = item.size;
					return item.productId;
				});
				dispatch(initializeCart(modifiedCart));
				dispatch(setToken(token));
				dispatch(setUser({ firstName, lastName, email, address }));
				navigate("/account");
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

	// handle forgot password

	return (
		<section
			aria-label="Login page"
			className="min-h-screen w-full flex flex-col gap-2 justify-center items-center text-sm"
		>
			<div className="flex flex-col gap-2" ref={signinRef}>
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

					<div className="relative flex flex-col gap-2">
						<label htmlFor="password">Password</label>
						<input
							onChange={e => setPassword(e.target.value)}
							value={password}
							id="password"
							className="border p-2"
							placeholder="Please enter your password"
							required
							type={showPassword ? "text" : "password"}
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
						aria-label="Login"
						className="bg-black p-4 w-full border text-white hover:bg-stone-800 "
					>
						LOGIN
					</button>
				</form>

				<div className="flex flex-col justify-center items-center gap-2">
					<div className="flex justify-between w-full">
						<p>Dont have an Account?</p>
						<Link
							aria-label="Navigates to forgot password page"
							className="underline decoration-red-400"
							to="/forgot-password"
						>
							Forgot password?
						</Link>
					</div>

					<button
						aria-label="Navigate to sign up form"
						className="bg-white p-4 w-full border hover:shadow-md"
						onClick={signupInView}
					>
						SIGN UP
					</button>
				</div>
			</div>
		</section>
	);
};

export default Login;
