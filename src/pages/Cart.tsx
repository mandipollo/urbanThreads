import React from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import Button from "../components/cards/Button";
import CartProducts from "../components/cart/CartProducts";
import PriceSpan from "../components/cards/PriceSpan";
import { removeProduct } from "../store/cartSlice";
import PaymentMerchantsSection from "../components/cart/PaymentMerchantsSection";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const dispatch = useAppDispatch();
	const cartState = useAppSelector(state => state.cartReducer);

	const handleRemoveProduct = (id: string) => {
		dispatch(removeProduct(id));
	};
	// redirect user to login if user not signed in or navigaet to checkout page
	const navigate = useNavigate();
	const token = useAppSelector(state => state.tokenReducer.token);

	const handleCheckout = () => {
		if (token) {
			navigate("/checkout");
			console.log("navigate to checkout");
		} else {
			navigate("/userAuth");
			console.log("navigate to login ");
		}
	};
	return (
		<section className="flex flex-col h-full w-full p-2 min-h-screen">
			<h2 className="text-5xl font-semibold pt-10 pb-16">SHOPPING BAG</h2>
			<div className="flex flex-col md:flex-row space-y-10 flex-1 relative">
				<div className=" md:w-4/6">
					<CartProducts
						handleRemoveProduct={handleRemoveProduct}
						cartItems={cartState.items}
					/>
				</div>

				<div className="h-full md:w-2/6">
					<div className="sticky top-20 right-0 flex flex-col space-y-2">
						<div className="flex w-full justify-between">
							<p>Order value</p>
							<PriceSpan price={cartState.total} />
						</div>
						<div className="flex w-full justify-between">
							<p>Delivery fee</p>

							{cartState.total > 100 ? <p>FREE</p> : <PriceSpan price={3.99} />}
						</div>
						<div className="flex w-full justify-between text-lg">
							<p>TOTAL</p>
							<PriceSpan
								fontSize="text-xl"
								price={
									cartState.total > 100
										? cartState.total
										: cartState.total + 3.99
								}
							/>
						</div>
						<Button
							type="button"
							callback={handleCheckout}
							text="CONTINUE TO CHECKOUT"
						/>
						<PaymentMerchantsSection />
						<p className="text-sm">
							Prices and delivery costs are not confirmed until you've reached
							the checkout.<br></br> 28 days right of withdrawal. Read more
							about return and refund policy.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cart;
