import React from "react";

const ActionButton: React.FC<{ action: string }> = ({ action }) => {
	return (
		<button
			aria-label={action}
			className="bg-white px-4 py-4 rounded-3xl text-xs"
		>
			{action}
		</button>
	);
};

export default ActionButton;
