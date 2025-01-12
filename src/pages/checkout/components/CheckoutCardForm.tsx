import React, { useState } from "react";

const CheckoutCardForm = () => {
	// card details
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [cardNumber, setCardNumber] = useState<string>("");
	const [expiryDate, setExpiryDate] = useState<string>("");
	const [cvv, setCvv] = useState<string>("");

	// handle expiry

	const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters
		if (value.length > 2) {
			value = value.substring(0, 2) + "/" + value.substring(2, 4);
		}
		setExpiryDate(value);
	};
	return (
		<div className="flex border-t w-full pt-4">
			<form
				aria-label="Card details for online purchase"
				className="flex flex-col max-w-[40em] w-full gap-4"
			>
				<fieldset className="border p-4">
					<legend className="text-lg font-normal">
						Cardholder Information
					</legend>

					<div className="flex flex-col gap-2">
						<label htmlFor="first_name">First Name</label>
						<input
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
							id="first_name"
							type="text"
							required
							aria-required="true"
							className={`border outline-none p-2 ${
								firstName && "border-green-500 "
							}`}
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label htmlFor="last_name">Last Name</label>
						<input
							value={lastName}
							onChange={e => setLastName(e.target.value)}
							id="last_name"
							type="text"
							required
							aria-required="true"
							className={`border outline-none p-2 ${
								lastName && "border-green-500 "
							}`}
						/>
					</div>
				</fieldset>

				<fieldset className="border p-4">
					<legend className="text-lg font-normal">Card Details</legend>

					<div className="flex flex-col gap-2">
						<label htmlFor="card_number">Card Number</label>
						<input
							value={cardNumber}
							onChange={e => setCardNumber(e.target.value)}
							id="card_number"
							placeholder="2342 5114 5464 9724"
							type="tel"
							pattern="[0-9\s]{13,19}"
							inputMode="numeric"
							required
							aria-required="true"
							aria-describedby="cardNumberHelp"
							className={`border outline-none p-2 ${
								cardNumber && "border-green-500 "
							}`}
						/>
						<small id="cardNumberHelp" className="text-gray-500">
							Enter your 16-digit card number without spaces.
						</small>
					</div>

					<div className="flex flex-row gap-4">
						<div className="flex flex-col w-full gap-2">
							<label htmlFor="expiry_date">Expiry Date</label>
							<input
								value={expiryDate}
								onChange={handleExpiryDateChange}
								placeholder="MM/YY"
								type="text"
								pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
								id="expiry_date"
								required
								aria-required="true"
								aria-describedby="expiryHelp"
								className={`border outline-none p-2 ${
									expiryDate && "border-green-500 "
								}`}
							/>
							<small id="expiryHelp" className="text-gray-500">
								Format: MM/YY
							</small>
						</div>

						<div className="flex flex-col w-full gap-2">
							<label htmlFor="cvv_cvc">CVV/CVC</label>
							<input
								value={cvv}
								onChange={e => setCvv(e.target.value)}
								placeholder="3 digits"
								type="password"
								pattern="[0-9]{3,4}"
								id="cvv_cvc"
								required
								aria-required="true"
								aria-describedby="cvvHelp"
								className={`border outline-none p-2 ${
									cvv && "border-green-500 "
								}`}
							/>
							<small id="cvvHelp" className="text-gray-500">
								The 3 or 4-digit code on the back of your card.
							</small>
						</div>
					</div>
				</fieldset>
			</form>
		</div>
	);
};

export default CheckoutCardForm;
