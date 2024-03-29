import { User } from "@/database/model/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState extends Omit<User, "password"> {
  token: string;
}

const slice = createSlice({
  name: "user",
  initialState: {} as UserState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
    setAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
    setDoctor: (state, action: PayloadAction<boolean>) => {
      state.isDoctor = action.payload;
    },
  },
});

export const { setUser, setAdmin, setDoctor } = slice.actions;

export default slice.reducer;
