import React from "react";

// components
import PriceSpan from "../ui/PriceSpan";
import PaymentMerchantsSection from "./PaymentMerchantsSection";
import { useLocation } from "react-router-dom";

interface ActionSummaryProps {
	cartTotal: number;
	callback?: () => void;
	action: string;
	token: string | null;
}
const ActionSummary: React.FC<ActionSummaryProps> = ({
	cartTotal,
	callback,
	action,
	token,
}) => {
	const { pathname } = useLocation();
	const totalPrice = cartTotal > 100 ? cartTotal : cartTotal + 3.99;
	return (
		<div className="h-full md:w-2/5">
			<div className="sticky top-20 right-0 flex flex-col space-y-2">
				<div className="flex w-full justify-between">
					<p>Order value</p>
					<PriceSpan price={cartTotal} />
				</div>
				<div
					className={`${
						pathname === "/cart" ? "hidden" : "flex"
					}  w-full justify-between`}
				>
					<p>Delivery fee</p>

					{cartTotal > 100 ? <p>FREE</p> : <PriceSpan price={3.99} />}
				</div>
				<div
					className={`${
						pathname === "/cart" ? "hidden" : "flex"
					}  w-full justify-between text-lg`}
				>
					<p aria-label={`Total price ${totalPrice}`}>TOTAL</p>
					<PriceSpan fontSize="text-xl" price={totalPrice} />
				</div>

				<button
					type="button"
					onClick={() => callback && callback()}
					className="bg-black hover:bg-stone-800 text-white px-2  py-4"
				>
					{action}
				</button>
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
