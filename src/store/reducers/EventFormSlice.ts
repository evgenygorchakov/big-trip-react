import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventForm {
  showed: boolean;
}

const initialState: EventForm = {
  showed: false,
};

export const eventFormSlice = createSlice({
  name: "eventForm",
  initialState,
  reducers: {
    showAddEventForm(state, action: PayloadAction<boolean>) {
      state.showed = action.payload;
    },
  },
});

export default eventFormSlice.reducer;
