import axios from "axios";
import { backendUrl } from "../App";
import { useAppSelector } from "../store/store";

const useRemoveFromCart = () => {
	const token = useAppSelector(state => state.tokenReducer.token);

	const removeFromCart = async (productId: string) => {
		try {
			const response = await axios.delete(
				backendUrl + "/api/user/removeFromCart",
				{
					headers: { token },
					data: {
						productId,
					},
				}
			);
			console.log(response);

			return response.data;
		} catch (error) {
			let message;
			if (error instanceof Error) message = error.message;
			else message = String(error);
			console.error({ message });
			throw new Error(message);
		}
	};

	return { removeFromCart };
};

export default useRemoveFromCart;
