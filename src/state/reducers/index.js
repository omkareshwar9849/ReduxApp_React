import {combinedReducers} from "redux";
import amountReducer from "./amountReducer";

const reducers = combinedReducers({
    amount : amountReducer
})

export default reducers;