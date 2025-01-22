import React from "react";

// state & router
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";

// components
import CartProducts from "./components/CartProducts";
import ActionSummary from "../../components/shared/ActionSummary";
import Meta from "../../components/shared/Meta";

const Cart: React.FC = () => {
	const cartState = useAppSelector(state => state.cartReducer);

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
		<section
			aria-label="Cart page renders all your cart items"
			className="flex flex-col h-full w-full p-2 min-h-screen"
		>
			<Meta
				title="Shopping Cart - Review Your Items"
				description="Review the items in your shopping cart. Modify quantities, remove items, and proceed to checkout to complete your purchase."
				keywords="shopping cart, review items, modify cart, add to cart, proceed to checkout, cart summary, online shopping"
			/>
			<h2 className="text-5xl font-semibold pt-10 pb-16">SHOPPING BAG</h2>
			<div className="flex flex-col md:flex-row gap-10 flex-1 relative">
				<div className=" md:w-4/6">
					<CartProducts cartItems={cartState.items} />
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
