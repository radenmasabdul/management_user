import { configureStore } from "@reduxjs/toolkit";
import reducerManagement from "../reducer/reducer";

export const store = configureStore({
    reducer: {
        data: reducerManagement.state
    }
});