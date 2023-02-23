import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: SidebarSlice.reducer,
  },
});

export default store;
