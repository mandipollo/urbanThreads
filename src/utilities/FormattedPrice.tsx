import React from "react";
interface FormattedPriceProps {
	price: number;
}

const FormattedPrice: React.FC<FormattedPriceProps> = ({ price }) => {
	const formattedPrice = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	}).format(price);

	return formattedPrice;
};

export default FormattedPrice;
