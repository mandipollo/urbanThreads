const PaymentMerchantsSection = () => {
	return (
		<div
			aria-label="various payment method accepted"
			className="flex flex-row space-x-2"
		>
			<figure>
				<img src="/svg/klarna.svg" alt="klarna" className="h-10 w-10" />
			</figure>
			<figure>
				<img src="/svg/applepay.svg" alt="apple pay" className="h-10 w-10" />
			</figure>
			<figure>
				<img src="/svg/mastercard.svg" alt="mastercard" className="h-10 w-10" />
			</figure>
			<figure>
				<img src="/svg/visa.svg" alt="visa" className="h-10 w-10" />
			</figure>
			<figure>
				<img src="/svg/paypal.svg" alt="paypal" className="h-10 w-10" />
			</figure>
		</div>
	);
};

export default PaymentMerchantsSection;
