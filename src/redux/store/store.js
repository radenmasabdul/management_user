import { configureStore } from "@reduxjs/toolkit";
import reducerManagement from "../reducer/reducer";

const store = configureStore({
    reducer: {
        data: reducerManagement
    }
});

export default store;