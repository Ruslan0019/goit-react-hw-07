import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65b8187446324d531d55f0c9.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contactData, thunkAPI) => {
  try {
    const response = await axios.post("/contacts", contactData);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
