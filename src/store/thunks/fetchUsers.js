import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("https://cliff-immediate-alto.glitch.me/users");

  return response.data;
});


export { fetchUsers };
