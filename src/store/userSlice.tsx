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
		updateAddress: (
			state,
			action: PayloadAction<{
				street?: string;
				town?: string;
				postcode?: string;
			}>
		) => {
			if (action.payload.street) {
				state.address.street = action.payload.street;
			}
			if (action.payload.town) {
				state.address.town = action.payload.town;
			}
			if (action.payload.postcode) {
				state.address.postcode = action.payload.postcode;
			}
		},
		resetUser: () => {
			return initialState;
		},
	},
});

export const { setUser, resetUser, updateAddress } = userSlice.actions;

export default userSlice.reducer;
