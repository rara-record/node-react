import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import chartSlice from '../reducers/chart';

export const shoppingAge = createAsyncThunk(
  'shopping/age',
  async (data: any, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8080/age', data);
      thunkAPI.dispatch(
        chartSlice.actions.addchartData(response.data.results[0].data)
      );
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
