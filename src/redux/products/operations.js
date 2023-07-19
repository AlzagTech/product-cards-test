import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://gist.githubusercontent.com/AlzagTech/1c68265a05199a4c7d9d6bb97f4d363c/raw/79c60a741ac9ac3a7019b7671b007cf1f2393c31/data.json '
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
