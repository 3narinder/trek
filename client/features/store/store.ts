import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../auth/authslice.ts";
import userSlice from "../users/UserSlice.ts";
import tourSlice from "../tours/TourSlice.ts";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    tour: tourSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
