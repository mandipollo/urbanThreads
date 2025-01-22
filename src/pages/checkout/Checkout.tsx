import React, { useState } from "react";
import { toast } from "react-toastify";

// components
import CheckoutInfo from "./components/CheckoutInfo";
import ActionSummary from "../../components/shared/ActionSummary";
import PaymentMethod from "./components/PaymentMethod";

// state

import { useAppDispatch, useAppSelector } from "../../store/store";
import { updateAddress } from "../../store/userSlice";
import { resetAll } from "../../store/cartSlice";

// api
import placeOrderService from "../../services/placeOrderService";
import handleAdressUpdateService from "../../services/handleAdressUpdateService";
import Meta from "../../components/shared/Meta";

const Checkout = () => {
	// cart state
	const cartState = useAppSelector(state => state.cartReducer);

	// user state
	const userState = useAppSelector(state => state.userReducer);
	const token = useAppSelector(state => state.tokenReducer.token);

	// state address
	const [editAddress, setEditAddress] = useState<boolean>(false);
	const [street, setStreet] = useState<string>(userState.address.street || "");
	const [town, setTown] = useState<string>(userState.address.town || "");
	const [postcode, setPostcode] = useState<string>(
		userState.address.postcode || ""
	);

	// handle address update and sync the details with redux

	const dispatch = useAppDispatch();

	const handleAddressUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			if (!token) {
				throw new Error("Token missing");
			}
			const response = await handleAdressUpdateService(
				street,
				town,
				postcode,
				token
			);

			if (response.data.success) {
				dispatch(updateAddress({ street, town, postcode }));
			}
		} catch (error) {
			let message;
			if (error instanceof Error) message = error.message;
			else message = String(error);
			toast.error(message);
		}
	};

	// payment method

	const [paymentMethod, setPaymentMethod] = useState<"COD" | "CARD">("COD");

	// handle place order and if successful remove cart items from redux

	const handlePlaceorder = async () => {
		if (!token) return;

		try {
			if (cartState.items.length <= 0) {
				throw new Error("Please add items to cart!");
			}
			const response = await placeOrderService(token);

			if (response.data.success) {
				dispatch(resetAll());
				toast("Order successfull");
			}
		} catch (error) {
			let message;
			if (error instanceof Error) message = error.message;
			else message = String(error);
			toast.error(message);
		}
	};
	return (
		<section className="flex flex-col h-full w-full p-4 min-h-screen">
			<Meta
				title="Checkout - Complete Your Purchase"
				description="Finalize your order and complete your purchase. Review your items, enter shipping details, and choose a payment method."
				keywords="checkout, complete purchase, review order, finalize order, payment, shipping details, buy now, secure checkout"
			/>
			<h2 className="text-5xl font-semibold py-10">CHECKOUT</h2>
			<div className="flex flex-col gap-10 md:flex-row flex-1 relative">
				<div className="flex flex-col w-3/5 gap-10">
					<CheckoutInfo
						cartItems={cartState.items}
						setEditAddress={setEditAddress}
						editAddress={editAddress}
						userState={userState}
						street={street}
						setStreet={setStreet}
						town={town}
						setTown={setTown}
						postcode={postcode}
						setPostcode={setPostcode}
						handleAddressUpdate={handleAddressUpdate}
					/>
					<PaymentMethod
						paymentMethod={paymentMethod}
						setPaymentMethod={setPaymentMethod}
					/>
				</div>

				<ActionSummary
					callback={handlePlaceorder}
					action="COMPLETE PURCHASE"
					cartTotal={cartState.total}
				/>
			</div>
		</section>
	);
};

export default Checkout;
