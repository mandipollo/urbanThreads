import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../../App";

// components
import CheckoutInfo from "./components/CheckoutInfo";
import ActionSummary from "../../components/shared/ActionSummary";
import CheckoutCardForm from "./components/CheckoutCardForm";
// state

import { useAppDispatch, useAppSelector } from "../../store/store";
import { updateAddress } from "../../store/userSlice";

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
					<CheckoutCardForm />
				</div>

				<ActionSummary action="COMPLETE PURCHASE" cartTotal={cartState.total} />
			</div>
		</section>
	);
};

export default Checkout;
