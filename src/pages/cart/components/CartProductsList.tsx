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
	const handleRemoveProduct = async (id: string) => {
		if (!token) return;

		try {
			const response = await removeProductService(token, id);

			if (response.data.success) {
				dispatch(removeProduct(id));
			}
		} catch (error) {
			let message;
			if (error instanceof Error) message = error.message;
			else message = String(error);
			toast.error(message);
		}
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
								aria-label={`Remove ${item.name} from cart`}
								onClick={() => handleRemoveProduct(item._id)}
								className="border p-2"
							>
								<figure className="h-4 w-4">
									<img
										src="/svg/close.svg"
										alt="Close"
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
