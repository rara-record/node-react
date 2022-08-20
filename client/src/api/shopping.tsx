import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import shoppingSlice from '../store/reducers/shopping';

export const shoppingApi = createAsyncThunk(
  'shopping',
  async (data: any, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8080/shopping', data);
      thunkAPI.dispatch(shoppingSlice.actions.addPostToMe(response.data));
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
