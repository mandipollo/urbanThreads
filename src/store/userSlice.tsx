import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
	name: string;
	email: string;
	_id: string;
	address: {
		street: string;
		town: string;
		postcode: string;
	};
}

const initialState: UserState = {
	name: "",
	email: "",
	_id: "",
	address: {
		street: "",
		town: "",
		postcode: "",
	},
};
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState>) => {
			return action.payload;
		},
		resetUser: () => {
			return initialState;
		},
	},
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
