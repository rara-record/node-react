import { createSlice } from '@reduxjs/toolkit';
import { shoppingAge } from '../action/shopping';

export const initialState = {
  data: [],
  Loading: false,
};

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(shoppingAge.pending, state => {
        state.Loading = true;
      })
      .addCase(shoppingAge.fulfilled, (state, action) => {
        state.Loading = false;
        state.data = action.payload;
      })
      .addCase(shoppingAge.rejected, (state, action) => {
        state.Loading = false;
      }),
});

export default shoppingSlice;
