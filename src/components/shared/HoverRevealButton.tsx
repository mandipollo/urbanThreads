import React from "react";

const HoverRevealButton: React.FC<{ text: string }> = ({ text }) => {
	return (
		<button
			type="button"
			className=" h-full w-20 inline-flex items-center justify-center group relative overflow-hidden"
		>
			<span className="absolute inset-0 flex transform transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
				{text}
			</span>
			<span className=" absolute inset-0 flex  transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
				{text}
			</span>
		</button>
	);
};

export default HoverRevealButton;
