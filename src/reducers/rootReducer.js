import { combineReducers } from "redux";
import { wordReducer } from "./wordReducer.js";

export const rootReducer = combineReducers({
    word: wordReducer
});