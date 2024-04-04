import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import expenseReducer from "./slices/expenseSlice";


const appStore = configureStore({
    reducer: {
        user: userReducer,
        expenses: expenseReducer,
    }
});


export default appStore;