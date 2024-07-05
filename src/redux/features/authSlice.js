import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: {
        name: "Rifky Aditya",
        email: "aditya@duck.com",
        password: "12345",
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setAuthState: (state, action) => {
            const { isLoggedIn } = action.payload;
            state.isLoggedIn = isLoggedIn;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("user");
        },
    },
});

export const { setAuthState, logout } = authSlice.actions;

export default authSlice.reducer;
