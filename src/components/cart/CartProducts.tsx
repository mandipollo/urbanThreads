import React from "react";
import { CartProduct } from "../../types";
import PriceSpan from "../cards/PriceSpan";

const CartProducts: React.FC<{
	cartItems: CartProduct[];
	handleRemoveProduct: (id: string) => void;
}> = ({ cartItems, handleRemoveProduct }) => {
	return (
		<div className="flex flex-col">
			{cartItems.length <= 0 && (
				<div>
					<h2>YOUR SHOPPING BAG IS EMPTY!</h2>
				</div>
			)}
			<ul className="flex flex-col gap-10">
				{cartItems.map(item => (
					<li key={item._id} className="flex gap-2 flex-row">
						<figure className="h-full w-40">
							<img
								src={item.image}
								alt={item.name}
								className="h-full w-full aspect-[3/4]"
							/>
						</figure>
						<div className="flex flex-col space-y-2">
							<div>
								<p className="text-lg">{item.name}</p>

								<PriceSpan price={item.price} />
							</div>

							<p>Size {item.size}</p>
							<p>Quantity</p>
							<p>Total</p>
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
		</div>
	);
};

export default CartProducts;
