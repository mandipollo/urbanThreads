import React, { useState } from "react";

// state & router
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";

// components
import CartProducts from "./components/CartProducts";
import ActionSummary from "../../components/shared/ActionSummary";
import Meta from "../../components/shared/Meta";
import createGuestService from "./service/createGuestService";
import { setGuestToken } from "../../store/tokenSlice";
import { toast } from "react-toastify";

const Cart: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const cartState = useAppSelector(state => state.cartReducer);
	const token = useAppSelector(state => state.tokenReducer.token);
	const guestToken = useAppSelector(state => state.tokenReducer.guestToken);

	const cartItems = useAppSelector(state => state.cartReducer.items);

	//
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	// direct user to checkout if products in cart
	// guest user assign a token and direct to checkout

	const handleCheckout = async () => {
		// check if cart has items

		if (cartItems.length <= 0) {
			return toast.error("Your cart is empty");
		}

		try {
			setIsSubmitting(true);

			// when user is signed in

			if (token && !guestToken) {
				navigate("/checkout");
			} else {
				// handle guest user

				// create a temp array of objects with product id

				const cartData = cartItems.map(item => ({
					productId: item._id,
					size: item.size,
				}));
				// create temp guest data and return a token
				const response = await createGuestService({ cartData });

				if (response.data.success) {
					dispatch(setGuestToken(response.data.guestToken));
					navigate("/checkout");
				}
			}
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			toast.error(message);
		} finally {
			setIsSubmitting(false);
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
					isSubmitting={isSubmitting}
					token={token}
					action={token ? "CONTINUE TO CHECKOUT" : "CHECKOUT AS GUEST"}
					cartTotal={cartState.total}
					callback={handleCheckout}
				/>
			</div>
		</section>
	);
};

export default Cart;
