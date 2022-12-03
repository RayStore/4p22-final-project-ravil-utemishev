import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getProducts = createAsyncThunk("products/getProducts", async thunkAPI => {
	const response = await fetch(`https://63763b11b5f0e1eb85065d90.mockapi.io/autoparts`);
	const result = await response.json();

	return result.products;
});

export const productsSlice = createSlice({
	name: "products",
	initialState: {
		entities: [],
		loading: false
	},
	extraReducers: {
		[getProducts.pending]: state => {
			state.loading = true;
		},
		[getProducts.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.entities = payload;
		},
		[getProducts.rejected]: state => {
			state.loading = false;
		}
	}
});

export default productsSlice.reducer;

export { getProducts };
