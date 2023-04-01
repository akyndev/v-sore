import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from './counter/counter'

const rootReducers = combineReducers({
    counter: counterSlice,
})

export const store = configureStore({
    reducer: rootReducers
})