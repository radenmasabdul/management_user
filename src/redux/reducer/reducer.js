import { createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "../api"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk(
    "users/fetchAllUsers",
    async () => {
        const response = await getAllUser();
        return response.data;
    }
);

const managementSlice = createSlice({
    name: "management",
    initialState: { usersData: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.usersData = action.payload;
            });
    }
});

export const { setUser } = managementSlice.actions;

export default managementSlice.reducer;