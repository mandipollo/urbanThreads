const PaymentMerchantsSection = () => {
	return (
		<div className="flex flex-row space-x-2">
			<figure className="h-10 w-10">
				<img
					src="/svg/klarna.svg"
					alt="klarna"
					className="h-full w-full object-cover"
				/>
			</figure>
			<figure className="h-10 w-10">
				<img
					src="/svg/applepay.svg"
					alt="klarna"
					className="h-full w-full object-cover"
				/>
			</figure>
			<figure className="h-10 w-10">
				<img
					src="/svg/mastercard.svg"
					alt="klarna"
					className="h-full w-full object-cover"
				/>
			</figure>
			<figure className="h-10 w-10">
				<img
					src="/svg/visa.svg"
					alt="klarna"
					className="h-full w-full object-cover"
				/>
			</figure>
			<figure className="h-10 w-10">
				<img
					src="/svg/paypal.svg"
					alt="klarna"
					className="h-full w-full object-cover"
				/>
			</figure>
		</div>
	);
};

export default PaymentMerchantsSection;
