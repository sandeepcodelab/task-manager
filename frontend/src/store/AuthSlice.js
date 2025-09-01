import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("user");
        },
        loadUser: (state) => {
            const storedUser = localStorage.getItem("user");
            if(storedUser){
                state.isAuthenticated = true;
                state.user = JSON.parse(storedUser);
            }
        },
    }
})

export const {login, logout, loadUser} = authSlice.actions;
export default authSlice.reducer;