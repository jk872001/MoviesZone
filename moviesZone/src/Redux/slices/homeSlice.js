import { createSlice } from "@reduxjs/toolkit";

const homeSlice=createSlice(
    {
        name:"homeSlice",
        initialState:
        {
            url:{},
            genres:{}
        },
        reducers:{
            getConfiguration:(state,action)=>
            {
                state.url=action.payload;
            },
            getGeneres:(state,action)=>
            {
                state.genres=action.payload;
            },
        }
    }
)

export const {getConfiguration,getGeneres}=homeSlice.actions;
export default homeSlice.reducer;