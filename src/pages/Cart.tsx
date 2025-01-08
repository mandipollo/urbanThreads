import React from "react";

// state & router
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";

// components
import CartProducts from "../components/cart/CartProducts";
import { removeProduct } from "../store/cartSlice";
import ActionSummary from "../components/cards/ActionSummary";

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
			<div className="flex flex-col md:flex-row gap-10 flex-1 relative">
				<div className=" md:w-4/6">
					<CartProducts
						handleRemoveProduct={handleRemoveProduct}
						cartItems={cartState.items}
					/>
				</div>

				<ActionSummary
					action="CONTINUE TO CHECKOUT"
					cartTotal={cartState.total}
					callback={handleCheckout}
				/>
			</div>
		</section>
	);
};

export default Cart;
