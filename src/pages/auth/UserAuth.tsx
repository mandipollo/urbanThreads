import React, { useRef } from "react";

// components
import Login from "./components/Login";
import Signup from "./components/Signup";

const UserAuth: React.FC = () => {
	const signinRef = useRef<HTMLDivElement>(null);
	const signupRef = useRef<HTMLDivElement>(null);
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
			<Login signupInView={signupInView} signinRef={signinRef} />
			<Signup signupRef={signupRef} signinInView={signinInView} />
		</section>
	);
};

export default UserAuth;
