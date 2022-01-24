import React from "react";
import { store } from "./store";
import { dogSlice } from "./slice";

const _ = require('lodash');

const actions = dogSlice.actions

//actions creator
export const getAllDogs = () => {

    return async dispatch => {
      dispatch(actions.setLoading(true))
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds')
        const data = await response.json()
        dispatch(actions.setAllDogs(data))
        dispatch(actions.setLoading(false))
      } catch (error) {
        dispatch(actions.setLoading(false))
        console.log("Error", error)
      }
    }
};

export const favouriteDog = (id) => {
    const allDogs = store.getState().dogs.allDogs;
    const favourited = allDogs.filter(breed =>  breed.id === id)
    store.dispatch(actions.setDogAsFavourite(favourited))

}