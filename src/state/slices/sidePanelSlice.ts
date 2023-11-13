import { createSlice } from "@reduxjs/toolkit";

interface SidePanelState {
  isOpen: boolean;
}

const initialState: SidePanelState = {
  isOpen: true,
};

const sidePanelSlice = createSlice({
  name: "sidePanel",
  initialState,

  reducers: {
    toggleSidePanel: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidePanel } = sidePanelSlice.actions;
export default sidePanelSlice.reducer;
