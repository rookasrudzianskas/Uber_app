import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
   name: 'nav',
    initialState,
    reducers: {
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

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

// selectors to get the needed information

export const selectOrigin = (state) => state.nav.origin; // this goes to the setOrigin and gets the origin
export const selectDestination = (state) => state.nav.destination; // this goes to the setDestination and gets the destination
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation; // this goes to the setTimeTravelInformation and gets the travel information

export default navSlice.reducer;

// fixed, the issue was reducers
