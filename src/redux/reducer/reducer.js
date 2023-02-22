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

const managementSlice = createSlice({
    name: "management",
    initialState: { usersData: [], userDataById: [], newUsersData: [], updateUser: [], token: null },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.usersData = action.payload;
            })
            .addCase(fetchUserById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.status = "succeeded";
                // fetch data user by id di userDataById
                const { id, ...userData } = action.payload;
                state.userDataById[id] = userData;
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.status = "failed";
                state.userDataById[action.meta.arg.id] = null;
                console.log(action.error);
            })
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
            .addCase(updateDataUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateDataUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.updateUser = action.payload;
                // Update data user by id di userDataById
                const updatedUser = action.payload;
                const userId = updatedUser.id;
                state.userDataById[userId] = updatedUser;
            })
            .addCase(updateDataUsers.rejected, (state, action) => {
                state.status = "failed";
                console.log(action.error);
            })
    }
});

export const { setUser } = managementSlice.actions;

export default managementSlice.reducer;