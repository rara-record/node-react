import { createSlice } from '@reduxjs/toolkit';
import { shoppingAge } from '../action/shopping';

interface IShopping {
  Loading: boolean;
}

export const initialState: IShopping = {
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
      .addCase(shoppingAge.fulfilled, state => {
        state.Loading = false;
      })
      .addCase(shoppingAge.rejected, state => {
        state.Loading = false;
      }),
});

export default shoppingSlice;
