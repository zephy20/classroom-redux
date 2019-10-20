import globals from "./globalReducers";
import mainPanel from "./mainPanel";
import { combineReducers } from "redux";

export default combineReducers({ globals, mainPanel });
