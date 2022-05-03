import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPointState {
  showed: boolean;
}

const initialState: IPointState = {
  showed: false,
};

export const pointSlice = createSlice({
  name: "eventForm",
  initialState,
  reducers: {
    showAddEventForm(state, action: PayloadAction<boolean>) {
      state.showed = action.payload;
    },
  },
});

export default pointSlice.reducer;
