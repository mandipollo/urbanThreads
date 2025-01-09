import React from "react";
import { CartProduct } from "../../types";
import CartProductsList from "../cards/CartProductsList";

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
