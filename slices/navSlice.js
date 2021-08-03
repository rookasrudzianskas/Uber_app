import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
   name: 'nav',
    initialState,
    reducer: {
       setOrigin: (state, action) => {
           // this sets the origin
           state.origin = action.payload;
       },
        setDestination: (state, action) => {
            // this sets the destination
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            // this sets the the travel time
            state.travelTimeInformation = action.payload;
        },
    },
});
