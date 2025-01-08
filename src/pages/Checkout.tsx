import React, { useState } from "react";

// components
import CheckoutInfo from "../components/checkout/CheckoutInfo";
import CheckoutPurchase from "../components/checkout/CheckoutPurchase";
// state

import { useAppSelector } from "../store/store";
import axios from "axios";
import { backendUrl } from "../App";
const Checkout = () => {
	// user state
	const userState = useAppSelector(state => state.userReducer);
	const token = useAppSelector(state => state.tokenReducer.token);
	// state address

	const [street, setStreet] = useState<string>("");
	const [town, setTown] = useState<string>("");
	const [postcode, setPostcode] = useState<string>("");

	// handle address update

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
			console.log(response);
			if (!response.data.success) {
				console.log(response.data.message);
			}
		} catch (error) {}
	};
	return (
		<section className="flex flex-col h-full w-full p-2 min-h-screen">
			<h2 className="text-5xl font-semibold py-10">CHECKOUT</h2>
			<div className="flex flex-col md:flex-row space-y-10 flex-1 relative">
				<CheckoutInfo
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
