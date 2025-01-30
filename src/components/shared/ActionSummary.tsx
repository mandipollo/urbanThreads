import React from "react";

// components
import PriceSpan from "../ui/PriceSpan";
import PaymentMerchantsSection from "./PaymentMerchantsSection";
import { Link, useLocation } from "react-router-dom";

interface ActionSummaryProps {
	cartTotal: number;
	callback?: () => void;
	action: string;
	token: string | null;
	isSubmitting: boolean;
}
const ActionSummary: React.FC<ActionSummaryProps> = ({
	cartTotal,
	callback,
	action,
	token,
	isSubmitting,
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
					disabled={isSubmitting}
					type="button"
					onClick={() => callback && callback()}
					className="bg-black hover:bg-stone-800 text-white px-2  py-4"
				>
					{action}
				</button>

				{pathname === "/cart" && !token && (
					<Link to="/user-auth" className="border px-2 text-center py-4">
						LOG IN
					</Link>
				)}

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
