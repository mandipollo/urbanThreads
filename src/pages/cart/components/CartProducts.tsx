import React from "react";

// types
import { CartProduct } from "../../../types/types";

// components
import CartProductsList from "./CartProductsList";

const CartProducts: React.FC<{
	cartItems: CartProduct[];
}> = ({ cartItems }) => {
	return (
		<div className="flex flex-col">
			{cartItems.length <= 0 && (
				<div>
					<h2>YOUR SHOPPING BAG IS EMPTY!</h2>
				</div>
			)}
			<CartProductsList cartItems={cartItems} />
		</div>
	);
};

export default CartProducts;
