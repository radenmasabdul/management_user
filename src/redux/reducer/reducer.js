import { createSlice } from "@reduxjs/toolkit";
import { getAllUser, getUserById, createUsers, updateUsers } from "../api"
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

export const updateDataUsers = createAsyncThunk(
    "users/updateDataUsers",
    async ({ user, id }) => {
        const response = await updateUsers(user, id)
        return response.data;
    }
)

export const deleteDataUsers = createAsyncThunk(
    "users/deleteDataUsers",
    async ({ user, id }) => {
        const response = await deleteUsers(user, id)
        return response.data;
    }
)

const managementSlice = createSlice({
    name: "management",
    initialState: { usersData: [], newUsersData: [], token: null, status: "idle" },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            //get all user
            .addCase(fetchAllUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.usersData = action.payload;
            })
            //get user by id
            .addCase(fetchUserById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.usersData = action.payload;
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.status = "failed";
                console.log(action.error);
            })
            //create new user
            .addCase(createNewUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createNewUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.newUsersData = action.payload;
            })
            .addCase(createNewUsers.rejected, (state, action) => {
                state.status = "failed";
                console.log(action.error);
            })
            //update user
            .addCase(updateDataUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateDataUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.usersData = action.payload;
            })
            .addCase(updateDataUsers.rejected, (state, action) => {
                state.status = "failed";
                console.log(action.error);
            })
            //delete user
            .addCase(deleteDataUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteDataUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.usersData = action.payload;
            })
            .addCase(deleteDataUsers.rejected, (state, action) => {
                state.status = "failed";
                console.log(action.error);
            })
    }
});

export const { setUser } = managementSlice.actions;

export default managementSlice.reducer;