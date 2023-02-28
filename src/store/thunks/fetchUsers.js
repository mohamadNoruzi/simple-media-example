import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("https://aquatic-lean-work.glitch.me/users");

  return response.data;
});


export { fetchUsers };
