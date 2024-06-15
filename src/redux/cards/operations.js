import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmFkZGZkMjRjMDhlZjlhOGRkNWE1MSIsImVtYWlsIjoibmVyb21heG9yNEBnbWFpbC5jb20iLCJpYXQiOjE3MTgzMTEwNjgsImV4cCI6MTcxOTE3NTA2OH0.z4foNcTpxZ_p5JmhyfGRCieDRFYgPd41Vyrkm3wCs4I";

export const addCard = createAsyncThunk(
  "cards/addCard",
  async (newCard, thunkAPI) => {
    try {
      const response = await axios.post("/api/cards/", newCard, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  "cards/updateCard",
  async ({ cardId, editCard }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/cards/${cardId}`, editCard);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "cards/deleteCard",
  async (cardId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/cards/${cardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// -------------------&&&&&&&&&&&&&&&&&----------------------?????????????
export const moveCard = createAsyncThunk(
  "cards/moveCard",
  async (cardId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/boards/${cardId}`);
      const moveCard = response.data;
      //   addCard в обрану колонку
      // return response.data;
      // або putch і змінити id owner ???????
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
