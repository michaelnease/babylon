import { combineReducers } from "redux";
import babylonReducer from "./babylonReducers";
import characterReducer from "./characterReducer";

const rootReducer = combineReducers({
  site: babylonReducer,
  character: characterReducer,
});

export default rootReducer;
