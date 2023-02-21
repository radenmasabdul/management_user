import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usersData: [],
};

const managementSlice = createSlice ({
    name: "management",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.usersData = action.payload
        }
    }
});

const reducerManagement = {
    state: managementSlice.reducer
};

export const {setUser} = managementSlice.actions;

export default reducerManagement;