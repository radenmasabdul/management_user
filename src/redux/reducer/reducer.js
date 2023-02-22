import { createSlice } from "@reduxjs/toolkit";
import { getAllUser, getUserById, createUsers } from "../api"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk(
    "users/fetchAllUsers",
    async () => {
        const response = await getAllUser();
        return response.data;
    }
);

export const fetchUserById = createAsyncThunk(
    "users/fetchUserById",
    async ({ id, token }) => {
        const response = await getUserById({ id, token });
        return response.data;
    }
)

export const createNewUsers = createAsyncThunk(
    "users/createNewUsers",
    async (user) => {
        const response = await createUsers(user);
        return response.data;
    }
)

const managementSlice = createSlice({
    name: "management",
    initialState: { usersData: [], userDataById: [], newUsersData: [], token: null},
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.usersData = action.payload;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.userDataById = action.payload;
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.userDataById = [];
                console.log(action.error);
            })
            .addCase(createNewUsers.fulfilled, (state, action) => {
                state.newUsersData = action.payload;
            })
    }
});

export const { setUser } = managementSlice.actions;

export default managementSlice.reducer;