import React, { useState } from "react";

// components
import CheckoutInfo from "../components/checkout/CheckoutInfo";
import CheckoutPurchase from "../components/checkout/CheckoutPurchase";
// state

import { useAppDispatch, useAppSelector } from "../store/store";
import { updateAddress } from "../store/userSlice";
import axios from "axios";
import { backendUrl } from "../App";
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
			const response = await axios.put(
				backendUrl + "/api/user/edit",
				{
					street,
					town,
					postcode,
				},
				{
					headers: {
						token,
					},
				}
			);

			if (!response.data.success) {
				console.log(response.data.message);
			} else {
				dispatch(updateAddress({ street, town, postcode }));
			}
		} catch (error) {}
	};
	return (
		<section className="flex flex-col h-full w-full p-2 min-h-screen">
			<h2 className="text-5xl font-semibold py-10">CHECKOUT</h2>
			<div className="flex flex-col md:flex-row space-y-10 flex-1 relative">
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
				<CheckoutPurchase />
			</div>
		</section>
	);
};

export default Checkout;
