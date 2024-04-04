import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    expensesInfo: [],
}
const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        createExpense: (state, action) => {

            state.expensesInfo = [...state.expensesInfo, action.payload];

        },
        deleteExpense: (state, action) => {
            state.expensesInfo.splice(action.payload, 1);
        },
        editExpense: (state, action) => {
            state.expensesInfo.splice(action.payload?.index, 1, action.payload.expense);
        }
    }

});

export const { createExpense, deleteExpense, editExpense } = expenseSlice.actions;
export default expenseSlice.reducer;