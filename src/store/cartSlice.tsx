import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../types";

interface CartState {
	items: CartProduct[];
	userId: string | null;
	total: number;
}

const initialState: CartState = {
	items: [],
	userId: null,
	total: 0,
};
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<CartProduct>) => {
			state.items.push(action.payload);
			// recalculate cart total
			state.total = state.items.reduce((sum, item) => sum + item.price, 0);
		},

		removeProduct: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter(item => item._id !== action.payload);
			state.total = state.items.reduce((sum, item) => sum + item.price, 0);
		},

		setUserId: (state, action: PayloadAction<string>) => {
			state.userId = action.payload;
		},

		removeUserId: state => {
			state.userId = initialState.userId;
		},

		resetAll: () => {
			return initialState;
		},
	},
});

export const { addProduct, removeProduct, setUserId, removeUserId, resetAll } =
	cartSlice.actions;

export default cartSlice.reducer;
