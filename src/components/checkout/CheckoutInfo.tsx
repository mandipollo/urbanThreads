import React, { SetStateAction } from "react";
import Button from "../cards/Button";

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
}) => {
	return (
		<div
			aria-label="personal user information section"
			className="flex flex-col w-3/5"
		>
			<div className="border-b flex flex-col pb-10">
				<h3 className="font-normal">MY INFORMATION</h3>
				<p aria-label="user name">{userState.name}</p>
				<p aria-label="user email">{userState.email}</p>
			</div>

			<h3 className="font-normal">BILLING ADDRESS</h3>

			{userState.address.postcode ? (
				<div className="border-b flex flex-col pb-10">
					<p aria-label="user street">{userState.address.street}</p>
					<p aria-label="user town">{userState.address.town}</p>
					<p aria-label="user postcode">{userState.address.postcode}</p>
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
				</form>
			)}
		</div>
	);
};

export default CheckoutInfo;
