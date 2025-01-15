import React from "react";
import { Order } from "../../../types/types";

import convertDate from "../../../utilities/convertDate";
import FormattedPrice from "../../../../../admin/src/helper/FormattedPrice";
import Button from "../../../components/ui/Button";

interface OrderListsProps {
	orders: Order[];
}

const OrderLists: React.FC<OrderListsProps> = ({ orders }) => {
	return (
		<div className="flex w-full h-full">
			<ul className="flex flex-col w-full gap-2 max-w-7xl">
				{orders.map(order => (
					<li
						className="flex flex-col w-full border rounded-md"
						key={order._id}
					>
						<div className="bg-[#EFF2F2] p-2 flex justify-between">
							<div className="flex gap-6">
								<div>
									<p> ORDER PLACED</p>
									<p className="text-sm">{convertDate(order.createdAt)}</p>
								</div>
								<div>
									<p> TOTAL</p>
									<p className="text-sm">
										<FormattedPrice price={order.totalAmount} />
									</p>
								</div>
								<div>
									<p> ORDER STATUS</p>
									<p className="text-sm">{order.orderStatus}</p>
								</div>
							</div>

							<div>
								<p> ORDER NO</p>
								<p className="text-sm">#{order._id}</p>
							</div>
						</div>

						<ul className="flex flex-col space-y-2 w-full p-2 rounded-md">
							{order.items.map((item, index) => (
								<li className="grid grid-cols-4 items-center p-2" key={index}>
									<figure>
										<img
											src={item.image}
											alt={item.name}
											className="h-32 aspect-[3/4] rounded-md"
										/>
									</figure>
									<div>
										<p className="text-[#2162A1]">{item.name}</p>
										<p>Size:</p>
									</div>
									<p>
										<FormattedPrice price={item.price} />
									</p>
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
