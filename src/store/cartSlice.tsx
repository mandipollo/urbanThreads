import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../types/types";

interface CartState {
	items: CartProduct[];
	total: number;
}

const initialState: CartState = {
	items: [],
	total: 0,
};
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		initializeCart: (state, action: PayloadAction<CartProduct[]>) => {
			state.items = action.payload;
			state.total = action.payload.reduce((sum, item) => sum + item.price, 0);
		},
		addProduct: (state, action: PayloadAction<CartProduct>) => {
			state.items.push(action.payload);
			// recalculate cart total
			state.total = state.items.reduce((sum, item) => sum + item.price, 0);
		},

		removeProduct: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter(item => item._id !== action.payload);
			state.total = state.items.reduce((sum, item) => sum + item.price, 0);
		},
		resetAll: () => {
			return initialState;
		},
	},
});

export const { addProduct, removeProduct, resetAll, initializeCart } =
	cartSlice.actions;

export default cartSlice.reducer;
