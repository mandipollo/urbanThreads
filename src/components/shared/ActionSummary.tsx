import React from "react";

// components
import PriceSpan from "../ui/PriceSpan";
import PaymentMerchantsSection from "./PaymentMerchantsSection";
import Button from "../ui/Button";

interface ActionSummaryProps {
	cartTotal: number;
	callback?: () => void;
	action: string;
}
const ActionSummary: React.FC<ActionSummaryProps> = ({
	cartTotal,
	callback,
	action,
}) => {
	const totalPrice = cartTotal > 100 ? cartTotal : cartTotal + 3.99;
	return (
		<div className="h-full md:w-2/5">
			<div className="sticky top-20 right-0 flex flex-col space-y-2">
				<div className="flex w-full justify-between">
					<p>Order value</p>
					<PriceSpan price={cartTotal} />
				</div>
				<div className="flex w-full justify-between">
					<p>Delivery fee</p>

					{cartTotal > 100 ? <p>FREE</p> : <PriceSpan price={3.99} />}
				</div>
				<div className="flex w-full justify-between text-lg">
					<p aria-label={`Total price ${totalPrice}`}>TOTAL</p>
					<PriceSpan fontSize="text-xl" price={totalPrice} />
				</div>
				<Button type="button" callback={callback} text={action} />
				<PaymentMerchantsSection />
				<p className="text-sm">
					Prices and delivery costs are not confirmed until you've reached the
					checkout.<br></br> 28 days right of withdrawal. Read more about return
					and refund policy.
				</p>
			</div>
		</div>
	);
};

export default ActionSummary;
