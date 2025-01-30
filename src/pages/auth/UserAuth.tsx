import React, { useRef } from "react";

// components
import Login from "./components/Login";
import Signup from "./components/Signup";
import Meta from "../../components/shared/Meta";

const UserAuth: React.FC = () => {
	const signinRef = useRef<null | HTMLDivElement>(null);
	const signupRef = useRef<null | HTMLDivElement>(null);
	const signupInView = () => {
		signupRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "nearest",
		});
	};
	const signinInView = () => {
		signinRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "nearest",
		});
	};
	return (
		<section className="flex flex-col w-full relative">
			<Meta
				title="Login/Sign up - Access Your Account"
				description="Log in to your account/Sign up to create your account to view your orders, manage your details, and complete your purchase. Secure and easy login process."
				keywords="login, user login, account access, sign in, secure login, login page, user authentication , sign up, create account, register, user registration, join now, personalized shopping, account creation"
			/>
			<Login signupInView={signupInView} signinRef={signinRef} />
			<Signup signupRef={signupRef} signinInView={signinInView} />
		</section>
	);
};

export default UserAuth;
