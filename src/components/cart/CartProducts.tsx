import React from "react";
import { CartProduct } from "../../types";

const CartProducts: React.FC<{ cartItems: CartProduct[] }> = ({
	cartItems,
}) => {
	return (
		<div className="flex flex-col">
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

								<span className="flex">
									£ <p className="font-medium">{item.price}</p>
								</span>
							</div>

							<p>Size {item.size}</p>
							<p>Quantity</p>
							<p>Total</p>

							<div
								aria-labelledby="quantity_control"
								className="border w-32 h-14 grid grid-cols-3 text-center"
							>
								<h2
									id="quantity_control"
									aria-label="item quantity control"
									className="sr-only"
								></h2>
								<button className="flex justify-center items-center">
									<figure className="h-6 w-6">
										<img
											src="/svg/minus.svg"
											className="h-full w-full object-cover"
											alt="decrease quanity of item"
										/>
									</figure>
								</button>
								<p className="flex justify-center items-center">Q</p>
								<button className="flex justify-center items-center">
									<figure className="h-6 w-6">
										<img
											src="/svg/plus.svg"
											className="h-full w-full object-cover"
											alt="increase quantity of item"
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
