import React, { SetStateAction } from "react";
import Button from "../shared/Button";

const Cart: React.FC<{
	cartSidebar: boolean;
	setCartSidebar: React.Dispatch<SetStateAction<boolean>>;
}> = ({ cartSidebar, setCartSidebar }) => {
	return (
		<div
			role="dialog"
			className="fixed flex-col top-14 right-6 z-50 flex w-96 space-y-2 bg-white p-4 shadow-md "
		>
			<p className="text-xl text-center">YOUR SHOPPING BAG IS EMPTY</p>
			<Button text="CONTINUE SHOPPING" />
		</div>
	);
};

export default Cart;
