import React from "react";

const PriceSpan: React.FC<{ price: number; fontSize?: string }> = ({
	price,
	fontSize,
}) => {
	return (
		<span className="flex">
			£ <p className={`font-normal ${fontSize}`}>{price}</p>
		</span>
	);
};

export default PriceSpan;
