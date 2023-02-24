import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`https://cliff-immediate-alto.glitch.me/users/${user.id}`);

  return user;
});
