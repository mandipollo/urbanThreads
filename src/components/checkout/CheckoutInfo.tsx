import React, { SetStateAction } from "react";

// types
import { CartProduct } from "../../types";
// components
import Button from "../shared/Button";

// state

import { useAppDispatch } from "../../store/store";
import { removeProduct } from "../../store/cartSlice";

interface CheckOutInfoProps {
	userState: {
		name: string;
		email: string;
		address: {
			street: string;
			town: string;
			postcode: string;
		};
	};
	street: string;
	setStreet: React.Dispatch<SetStateAction<string>>;
	town: string;
	setTown: React.Dispatch<SetStateAction<string>>;
	postcode: string;
	setPostcode: React.Dispatch<SetStateAction<string>>;
	handleAddressUpdate: (e: React.FormEvent<HTMLFormElement>) => void;
	editAddress: boolean;
	setEditAddress: React.Dispatch<SetStateAction<boolean>>;
	cartItems: CartProduct[];
}
const CheckoutInfo: React.FC<CheckOutInfoProps> = ({
	userState,
	street,
	setStreet,
	town,
	setTown,
	postcode,
	setPostcode,
	handleAddressUpdate,
	editAddress,
	setEditAddress,
	cartItems,
}) => {
	// handle product remove from cart

	const dispatch = useAppDispatch();
	const handleRemoveProduct = (id: string) => {
		dispatch(removeProduct(id));
	};
	return (
		<div
			aria-label="personal user information section"
			className="flex flex-col"
		>
			<div className="border-b flex flex-col pb-10">
				<h3 className="font-normal">MY INFORMATION</h3>
				<p aria-label="user name">{userState.name}</p>
				<p aria-label="user email">{userState.email}</p>
			</div>

			<h3 className="font-normal py-2">DELIVERY ADDRESS</h3>

			{!editAddress && userState.address.postcode ? (
				<div className="border-b flex flex-col pb-10">
					<p aria-label="user street">{userState.address.street}</p>
					<p aria-label="user town">{userState.address.town}</p>
					<p aria-label="user postcode">{userState.address.postcode}</p>
					<div>
						<button
							type="button"
							aria-label="toogle address form"
							onClick={() => setEditAddress(!editAddress)}
							className="underline p-2"
						>
							EDIT
						</button>
					</div>
				</div>
			) : (
				<form
					onSubmit={handleAddressUpdate}
					className="flex flex-col space-y-4 pt-4"
				>
					<div className="flex flex-col">
						<label htmlFor="street">Street</label>
						<input
							value={street}
							onChange={e => setStreet(e.target.value)}
							id="street"
							type="text"
							className="p-4 border focus:outline-black outline-1"
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="town_city">Town/City</label>
						<input
							value={town}
							onChange={e => setTown(e.target.value)}
							id="town_city"
							type="text"
							className="p-4 border focus:outline-black outline-1"
						/>
						<label htmlFor="postcode">Postcode</label>
					</div>

					<div className="flex flex-col">
						<input
							value={postcode}
							onChange={e => setPostcode(e.target.value)}
							id="postcode"
							type="text"
							className="p-4 border focus:outline-black outline-1"
						/>
						<p className="text-sm">Capital letters only E.g. GU14 8TJ</p>
					</div>

					<Button text="SAVE" type="submit" />
					<button
						onClick={() => setEditAddress(false)}
						className="border border-black p-4 hover:text-gray-600"
						type="button"
					>
						CANCEL
					</button>
				</form>
			)}

			<div className="flex flex-col gap-2">
				<h3 className="font-normal py-2">PARCEL</h3>
				<p>Shipped by urbanThreads</p>
				<ul className="flex flex-col md:flex-row gap-2">
					{cartItems.map(item => (
						<li key={item._id} className="relative">
							<figure className="h-40 aspect-[3/4]">
								<img
									src={item.image}
									alt={item.name}
									className="h-full w-full "
								/>
							</figure>
							<button
								onClick={() => handleRemoveProduct(item._id)}
								className="absolute bg-white p-4 bottom-0 right-0 "
							>
								<figure className=" h-4 w-4 ">
									<img
										src="/svg/bin.svg"
										alt="remove item from the cart"
										className="h-full w-full object-cover"
									/>
								</figure>
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CheckoutInfo;
