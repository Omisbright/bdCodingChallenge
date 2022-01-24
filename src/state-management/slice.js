import { createSlice } from "@reduxjs/toolkit";
const _ = require('lodash');

const initialState = {
    allDogs: [],
    favouritedDogs: [],
    loading: false
}

export const dogSlice = createSlice({
    name: 'dogs',
    initialState,
    reducers: {
        setLoading: (state, {payload}) => {
            return {
                ...state, loading: payload
            }
        },

        setAllDogs: (state, {payload}) => {
            return {
                ...state, allDogs: payload
            }
        },

        setDogAsFavourite: (state, {payload}) => {
            let newDogs = [...state.favouritedDogs, ...payload]
            let uniqueDogs = _.uniqWith(newDogs, _.isEqual);
            return {
                ...state, favouritedDogs: uniqueDogs
            }
            
        }
    }
})

export const { setAllDogs, setDogAsFavourite, setLoading } = dogSlice.actions;

export default dogSlice.reducer;