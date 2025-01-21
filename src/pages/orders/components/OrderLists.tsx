import React from "react";
import { Order } from "../../../types/types";

import convertDate from "../../../utilities/convertDate";
import FormattedPrice from "../../../utilities/FormattedPrice";
import Button from "../../../components/ui/Button";

interface OrderListsProps {
	orders: Order[];
}

const OrderLists: React.FC<OrderListsProps> = ({ orders }) => {
	return (
		<div className="flex w-full h-full text-xs lg:text-sm">
			<ul className="flex flex-col w-full gap-2 max-w-7xl">
				{orders.map(order => (
					<li
						className="flex flex-col w-full border rounded-md"
						key={order.orderId}
					>
						<div className="bg-[#EFF2F2] p-2 flex flex-col lg:flex-row justify-between">
							<div className="flex gap-2 lg:gap-6">
								<div>
									<p className="font-normal"> ORDER PLACED</p>
									<p>{convertDate(order.createdAt)}</p>
								</div>
								<div>
									<p className="font-normal"> TOTAL</p>
									<p>
										<FormattedPrice price={order.totalAmount} />
									</p>
								</div>
								<div>
									<p className="font-normal"> ORDER STATUS</p>
									<p className="text-sm">{order.orderStatus}</p>
								</div>
							</div>

							<div>
								<p> ORDER NO</p>
								<p className="text-sm">#{order.orderId}</p>
							</div>
						</div>

						<ul className="flex flex-col space-y-2 w-full p-2 rounded-md">
							{order.items.map((item, index) => (
								<li
									className="grid grid-cols-1 gap-2 sm:grid-cols-[2fr_1fr]  items-center p-2"
									key={index}
								>
									<div className="flex flex-row items-center gap-2">
										<figure>
											<img
												src={item.image}
												alt={item.name}
												className="h-40 lg:h-60 aspect-[3/4] rounded-md"
											/>
										</figure>
										<div className=" flex flex-col ">
											<p>{item.name}</p>
											<p>Size:</p>
											<FormattedPrice price={item.price} />
										</div>
									</div>

									<div className="flex flex-col gap-2">
										<Button text="Track package" />
										<button className="border hover:bg-slate-50 px-2 py-4">
											Leave a review
										</button>
									</div>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

export default OrderLists;
