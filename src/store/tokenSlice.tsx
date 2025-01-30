import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TokenState {
	token: string | null;
	guestToken: string | null;
}

const initialState: TokenState = {
	token: null,
	guestToken: null,
};
const tokenSlice = createSlice({
	name: "token",
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},

		removeToken: state => {
			state.token = initialState.token;
		},
		setGuestToken: (state, action: PayloadAction<string>) => {
			state.guestToken = action.payload;
		},

		removeGuestToken: state => {
			state.guestToken = initialState.token;
		},
	},
});

export const { setToken, removeToken, setGuestToken, removeGuestToken } =
	tokenSlice.actions;
export default tokenSlice.reducer;
