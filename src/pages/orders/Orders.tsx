import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/store";
import fetchOrdersService from "../../services/fetchOrdersService";
import { toast } from "react-toastify";
import OrderLists from "./components/OrderLists";
import { Order } from "../../types/types";

const Orders = () => {
	// order state

	const [orders, setOrders] = useState<Order[]>([]);
	const token = useAppSelector(state => state.tokenReducer.token);

	useEffect(() => {
		if (!token) {
			return;
		}
		const fetchOrders = async () => {
			try {
				const response = await fetchOrdersService(token);
				if (!response.data.success) {
					return;
				}
				setOrders(response.data.orderDetails);
			} catch (error) {
				let message;
				if (error instanceof Error) message = error.message;
				else message = String(error);
				console.error({ message });
				toast.error(message);
			}
		};
		fetchOrders();
	}, [token]);
	return (
		<section className="flex flex-col w-full">
			<h2 className="text-xl lg:text-3xl font-bold">YOUR PURCHASES</h2>

			{orders.length ? (
				<OrderLists orders={orders} />
			) : (
				<div>
					<p>NO PURCHASES TO SHOW RIGHT NOW</p>
					<p>When you have bought something online you will find it here</p>
				</div>
			)}
		</section>
	);
};

export default Orders;
