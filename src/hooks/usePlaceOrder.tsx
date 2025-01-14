import axios from "axios";
import { useAppSelector } from "../store/store";
import { backendUrl } from "../App";

// place order
const usePlaceOrder = () => {
	const token = useAppSelector(state => state.tokenReducer.token);

	const placeOrder = async () => {
		const response = await axios.post(
			backendUrl + "/api/order/place-order",
			{},
			{
				headers: {
					token,
				},
			}
		);

		return response;
	};

	return { placeOrder };
};

export default usePlaceOrder;
