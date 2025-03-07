import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllTours, fetchTourById } from "./TourApi.ts";

const initialState = {
  tours: [],
  singleTour: null,
  pagination: {
    total: 0,
    page: 1,
    pages: 1,
    limit: 10,
  },
  loading: false,
  error: null,
};

// Async thunk to fetch all tours
export const getAllTours = createAsyncThunk(
  "tours/getAllTours",
  async (params, { rejectWithValue }) => {
    try {
      const result = await fetchAllTours(params);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to fetch a single tour by ID
export const getTourById = createAsyncThunk(
  "tours/getTourById",
  async (id, { rejectWithValue }) => {
    try {
      const result = await fetchTourById(id);
      return result.data; // Extract only the tour data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tourSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    clearSingleTour: (state) => {
      state.singleTour = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch all tours
    builder
      .addCase(getAllTours.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTours.fulfilled, (state, action) => {
        state.loading = false;
        state.tours = action.payload.data;
        state.pagination = action.payload.pagination || state.pagination;
      })
      .addCase(getAllTours.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Fetch single tour
    builder
      .addCase(getTourById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTourById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleTour = action.payload;
      })
      .addCase(getTourById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSingleTour } = tourSlice.actions;
export default tourSlice.reducer;
