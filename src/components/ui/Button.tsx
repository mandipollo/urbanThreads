import React from "react";
import { useAppSelector } from "../../store/store";

const Button: React.FC<{
	callback?: () => void;
	text: string;
	type?: "submit" | "reset" | "button" | undefined;
}> = ({ callback, text, type }) => {
	const token = useAppSelector(state => state.tokenReducer.token);

	return (
		<button
			type={type}
			onClick={() => callback && token && callback()}
			className="bg-black hover:bg-stone-800 text-white px-2  py-4"
		>
			{text}
		</button>
	);
};

export default Button;
