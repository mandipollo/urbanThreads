import React from "react";

const Button: React.FC<{
	callback?: () => void;
	text: string;
	type?: "submit" | "reset" | "button" | undefined;
}> = ({ callback, text, type }) => {
	return (
		<button
			type={type}
			onClick={callback}
			className="bg-black hover:bg-stone-800 text-white px-2  py-4"
		>
			{text}
		</button>
	);
};

export default Button;
