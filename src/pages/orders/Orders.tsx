import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/store";
import fetchOrdersService from "../../services/fetchOrdersService";
import { toast } from "react-toastify";
import OrderLists from "./components/OrderLists";
import { Order } from "../../types/types";
import Meta from "../../components/shared/Meta";

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
					throw new Error("Fetching order unsuccessful");
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
		<section
			aria-label="purchase history page"
			className="flex flex-col w-full"
		>
			<Meta
				title="Your Previous Orders - View Purchase History"
				description="Browse your past orders and track your previous purchases. View detailed information, order status, and more."
				keywords="order history, previous purchases, view orders, purchase history, track orders, order details"
			/>
			<h2 className="text-xl lg:text-3xl font-bold">YOUR PURCHASES</h2>

			{orders.length > 0 ? (
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
