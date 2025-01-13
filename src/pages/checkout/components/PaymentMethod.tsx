import React, { SetStateAction } from "react";

const PaymentMethod: React.FC<{
	paymentMethod: "COD" | "CARD";
	setPaymentMethod: React.Dispatch<SetStateAction<"COD" | "CARD">>;
}> = ({ paymentMethod, setPaymentMethod }) => {
	return (
		<div className="flex flex-col text-sm">
			<h4 className="font-normal text-base">PAYMENT</h4>

			<fieldset className="flex flex-col">
				<legend>How would you like to pay?</legend>
				<div className="flex space-x-2 border-t items-center py-2">
					<input
						type="radio"
						id="card"
						value="card"
						checked={paymentMethod === "CARD"}
						onChange={() => setPaymentMethod("CARD")}
					/>
					<label
						htmlFor="card"
						className="flex justify-between items-center w-full space-x-1 hover:cursor-pointer"
					>
						<div className="flex space-x-2">
							<figure>
								<img src="/svg/visa.svg" className="h-6 w-6" alt="visa" />
							</figure>
							<figure>
								<img
									src="/svg/mastercard.svg"
									className="h-6 w-6"
									alt="mastercard"
								/>
							</figure>
						</div>
						<p>CARD</p>
					</label>
				</div>

				<div className="flex border-y space-x-2 items-center py-2">
					<input
						type="radio"
						id="cod"
						value="cod"
						checked={paymentMethod === "COD"}
						onChange={() => setPaymentMethod("COD")}
					/>
					<label
						htmlFor="cod"
						className="flex justify-between items-center w-full space-x-1 hover:cursor-pointer"
					>
						<div className="flex space-x-2">
							<figure>
								<img
									src="/svg/cod.svg"
									className="h-6 w-6"
									alt="cash on delivery"
								/>
							</figure>
						</div>
						<p>COD</p>
					</label>
				</div>
			</fieldset>
		</div>
	);
};

export default PaymentMethod;
