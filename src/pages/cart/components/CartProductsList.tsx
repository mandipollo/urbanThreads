import React from "react";

import { CartProduct } from "../../../types/types";
// components
import PriceSpan from "../../../components/ui/PriceSpan";

// reddux state
import { useAppDispatch } from "../../../store/store";
import { removeProduct } from "../../../store/cartSlice";
import useRemoveFromCart from "../../../hooks/useRemoveFromCart";
const CartProductsList: React.FC<{
	cartItems: CartProduct[];
	callback?: (e: string) => void;
}> = ({ cartItems }) => {
	// remove product from cartSlice and db
	const { removeFromCart } = useRemoveFromCart();

	const dispatch = useAppDispatch();
	const handleRemoveProduct = async (id: string) => {
		removeFromCart(id);
		dispatch(removeProduct(id));
	};
	return (
		<ul className="flex flex-col gap-2">
			{cartItems.map(item => (
				<li key={item._id} className="flex gap-2 flex-row">
					<figure className="h-full w-40">
						<img
							src={item.image[0]}
							alt={item.name}
							className="h-full w-full aspect-[3/4]"
						/>
					</figure>
					<div className="flex flex-col space-y-2 w-full">
						<div>
							<p className="text-base lg:text-lg">{item.name}</p>
							<PriceSpan price={item.price} />
						</div>

						<p>Size {item.size}</p>

						<div>
							<button
								onClick={() => handleRemoveProduct(item._id)}
								className="border p-2"
							>
								<figure className="h-4 w-4">
									<img
										src="/svg/close.svg"
										alt=""
										className="h-full w-full object-cover"
									/>
								</figure>
							</button>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default CartProductsList;
