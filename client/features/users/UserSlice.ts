// src/features/user/userSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthenticatedUser, getUserById } from "./UserApi";

// Thunk for fetching authenticated user
export const fetchAuthenticatedUser = createAsyncThunk(
  "user/fetchAuthenticatedUser",
  async (_, { rejectWithValue }) => {
    try {
      const user = await getAuthenticatedUser();
      return user;
    } catch (error: any) {
      console.error("Error fetching authenticated user:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for fetching user by ID
export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (id: string, { rejectWithValue }) => {
    try {
      const user = await getUserById(id);
      return user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthenticatedUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuthenticatedUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchAuthenticatedUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        console.log("Fetch failed with error:", action.payload);
      })
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
