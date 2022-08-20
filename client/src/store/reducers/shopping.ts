import { createSlice } from '@reduxjs/toolkit';
import { shoppingApi } from '../../api/shopping';

export const initialState = {
  data: [],
  Loading: false,
};

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addPostToMe(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(shoppingApi.pending, state => {
        state.Loading = true;
      })
      .addCase(shoppingApi.fulfilled, (state, action) => {
        state.Loading = false;
        state.data = action.payload;
      })
      .addCase(shoppingApi.rejected, (state, action) => {
        state.Loading = false;
      }),
});

export default shoppingSlice;
