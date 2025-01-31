import React from "react";

// types
import { CartProduct } from "../../../types/types";
// components
import PriceSpan from "../../../components/ui/PriceSpan";

// state
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { removeProduct } from "../../../store/cartSlice";

// api
import removeProductService from "../../../services/removeProductService";
import { toast } from "react-toastify";

//
const CartProductsList: React.FC<{
	cartItems: CartProduct[];
	callback?: (e: string) => void;
}> = ({ cartItems }) => {
	// remove product from cartSlice and db
	const token = useAppSelector(state => state.tokenReducer.token);

	const dispatch = useAppDispatch();

	//
	const handleRemoveProduct = async (id: string) => {
		try {
			// remove product from cart backend if signed in
			if (token) {
				const response = await removeProductService({ token, id });

				if (response.data.success) {
					dispatch(removeProduct(id));
				}
			} else {
				dispatch(removeProduct(id));
			}
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			toast.error(message);
		}
	};
	return (
		<ul className="flex flex-col gap-2">
			{cartItems.map(item => (
				<li key={item._id} className="flex gap-2 flex-row">
					<figure className="h-full w-40 relative">
						<img
							src={item.image[0]}
							alt={item.name}
							className="h-full w-full aspect-[3/4]"
						/>
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
					</figure>
					<div className="flex flex-col space-y-2 w-full">
						<div>
							<p className="text-base lg:text-lg">{item.name}</p>
							<PriceSpan price={item.price} />
						</div>

						<p>Size {item.size}</p>
					</div>
				</li>
			))}
		</ul>
	);
};

export default CartProductsList;
