import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name: "user",
    initialState: {
        currentUser: null,
        isFeching: false,
        error: false
    },
    reducers:{
        loginStart: (state)=>{
            state.isFeching=true;
        },
        loginSuccess: (state, action)=>{
            state.isFeching=false;
            state.currentUser=action.payload;
        },
        loginFailure: (state)=>{
            state.isFeching=false;
            state.error=true;
        },
    },
});

export const {loginStart, loginSuccess, loginFailure} = userSlice.actions;
export default userSlice.reducer;