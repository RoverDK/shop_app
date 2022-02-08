import { combineReducers } from "redux";
import { authReducer } from "../components/Login/redusers";

const rootReduser = combineReducers({
     auth: authReducer,
})

export default rootReduser