import React, { SetStateAction } from "react";

// types
import { CartProduct } from "../../../types/types";
// components
import Button from "../../../components/ui/Button";

// state

import { useAppDispatch } from "../../../store/store";
import { removeProduct } from "../../../store/cartSlice";
import { Link } from "react-router-dom";

interface CheckOutInfoProps {
	userState: {
		firstName: string;
		lastName: string;
		email: string;
		address: {
			street: string;
			town: string;
			postcode: string;
		};
	};
	firstName: string;
	setFirstName: React.Dispatch<SetStateAction<string>>;
	lastName: string;
	setLastName: React.Dispatch<SetStateAction<string>>;
	email: string;
	setEmail: React.Dispatch<SetStateAction<string>>;
	editGuest: boolean;
	setEditGuest: React.Dispatch<SetStateAction<boolean>>;
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
	firstName,
	setFirstName,
	lastName,
	setLastName,
	email,
	setEmail,
	editGuest,
	setEditGuest,
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
			className="flex flex-col text-sm font-normal gap-2"
		>
			<div className="flex flex-col gap-2">
				<div className="flex justify-between">
					<h4 className="text-xl">Contact</h4>
					<Link to="/user-auth" className="underline underline-offset-2">
						Log in
					</Link>
				</div>

				<input
					onChange={e => setEmail(e.target.value)}
					placeholder="Email"
					className="w-full p-4 rounded-md border placeholder:text-black"
					type="email"
					value={email}
				/>
			</div>

			<h4 className="text-xl">Delivery</h4>
			<form className="flex flex-col gap-2">
				<div className="flex flex-row gap-2">
					<input
						className="w-full p-4 rounded-md border placeholder:text-black"
						type="text"
						placeholder="First name"
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
					/>
					<input
						className="w-full p-4 rounded-md border placeholder:text-black"
						type="text"
						placeholder="Last name"
						value={lastName}
						onChange={e => setLastName(e.target.value)}
					/>
				</div>
				<input
					className="w-full p-4 rounded-md border placeholder:text-black"
					type="text"
					placeholder="Street"
					value={street}
					onChange={e => setStreet(e.target.value)}
				/>
				<div className="flex flex-row gap-2">
					<input
						className="w-full p-4 rounded-md border placeholder:text-black"
						type="text"
						placeholder="Town"
						value={town}
						onChange={e => setTown(e.target.value)}
					/>
					<input
						className="w-full p-4 rounded-md border placeholder:text-black"
						type="text"
						placeholder="Postcode"
						value={postcode}
						onChange={e => setPostcode(e.target.value)}
					/>
				</div>
			</form>

			<div className="flex flex-col gap-2">
				<h3 className="font-normal py-2 text-base">PARCEL</h3>
				<p>Shipped by urbanThreads</p>
				<ul className=" grid grid-cols-[repeat(auto-fit,minmax(8rem,max-content))] ">
					{cartItems.map(item => (
						<li key={item._id} className="relative">
							<figure className="h-40 aspect-[3/4]">
								<img
									src={item.image[0]}
									alt={item.name}
									className="h-full w-full "
								/>
							</figure>
							<button
								onClick={() => handleRemoveProduct(item._id)}
								className="absolute bg-white p-4 bottom-0 left-0 "
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
				<h4 className="font-normal text-base">Standard delivery</h4>
				<p>FREE - 3-5 working days</p>
			</div>
		</div>
	);
};

export default CheckoutInfo;
