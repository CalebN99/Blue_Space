// import { applyMiddleware, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit';
// import thunk from "redux-thunk";
import combineReducers from "./reducers";

// const initialState = {};

// const middleware = [thunk];

const store = configureStore({
    reducer: combineReducers
}
   
);

export default store;