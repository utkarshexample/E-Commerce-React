import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../Data/data";

const itemsSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const itemsAction = itemsSlice.actions;
export default itemsSlice;
