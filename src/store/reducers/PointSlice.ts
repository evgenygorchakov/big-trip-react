import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPointState {
  addEventFormShowed: boolean;
}

const initialState: IPointState = {
  addEventFormShowed: false,
};

export const pointSlice = createSlice({
  name: "eventForm",
  initialState,
  reducers: {
    showAddEventForm(state, action: PayloadAction<boolean>) {
      state.addEventFormShowed = action.payload;
    },
  },
});

export default pointSlice.reducer;
