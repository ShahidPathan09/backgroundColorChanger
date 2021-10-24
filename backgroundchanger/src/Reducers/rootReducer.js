import { combineReducers } from "redux";
import { colorReducer } from "./reducer1";

const rootReducer = combineReducers({
    reducer1: colorReducer,
})

export default rootReducer;
