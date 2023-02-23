import { createSlice } from "@reduxjs/toolkit";

const initialState = { isSidebarOpen: false };

const SidebarSlice = createSlice({
  name: "sidebar-slice",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebarActions } = SidebarSlice.actions;
export default SidebarSlice;
