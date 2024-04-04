import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuthenticated: false,
    isLoading: false,
    userInfo: null,
    isModalOpen: false,
    isDeleteModalOpen: false,
    isUpdateModalOpen : false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.isAuthenticated = true;
            state.isLoading = false;
            state.userInfo = action.payload
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.isLoading = false;
            state.userInfo = null;
        },
        toggleModalWindow: (state, action) => {
            state.isModalOpen = action.payload;
        },
        toggleDeleteWindow: (state, action) => {
            state.isDeleteModalOpen = action.payload;
        },
        toggleUpdateWindow : (state, action) => {
            state.isUpdateModalOpen = action.payload;
        }
    }

});


export const { loginUser, logoutUser, toggleModalWindow , toggleDeleteWindow, toggleUpdateWindow} = userSlice.actions;
export default userSlice.reducer;