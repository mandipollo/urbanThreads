import React, { SetStateAction } from "react";
// components
import Button from "../../../components/ui/Button";
// state
import { UserState } from "../../../store/userSlice";

interface PersonalDetailsProps {
	editAddress: boolean;
	userState: UserState;
	setEditAddress: React.Dispatch<SetStateAction<boolean>>;
	handleAddressUpdate: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
	setStreet: React.Dispatch<SetStateAction<string>>;
	setTown: React.Dispatch<SetStateAction<string>>;
	setPostcode: React.Dispatch<SetStateAction<string>>;
	street: string;
	town: string;
	postcode: string;
}
const PersonalDetails: React.FC<PersonalDetailsProps> = ({
	editAddress,
	userState,
	setEditAddress,
	handleAddressUpdate,
	setStreet,
	setTown,
	setPostcode,
	street,
	town,
	postcode,
}) => {
	return (
		<div className="border-y flex items-center p-4">
			{!editAddress && userState.address.postcode ? (
				<div className=" flex flex-col">
					<p>{userState.name.toUpperCase()}</p>
					<p>{userState.address.street}</p>
					<p>{userState.address.town}</p>
					<p>{userState.address.postcode}</p>
					<div>
						<button
							type="button"
							aria-label={
								editAddress ? "Close the address form" : "Open the address form"
							}
							onClick={() => setEditAddress(!editAddress)}
							className="underline"
						>
							EDIT PERSONAL DETAILS
						</button>
					</div>
				</div>
			) : (
				<form
					onSubmit={handleAddressUpdate}
					className="flex flex-col space-y-4 w-full"
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
		</div>
	);
};

export default PersonalDetails;
