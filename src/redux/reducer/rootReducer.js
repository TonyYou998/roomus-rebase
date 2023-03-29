import {combineReducers} from "redux";
import { detailReducer } from "../../containers/UserTemplate/DetailPage/Modules/reducer";

const rootReducer=combineReducers({
    detailReducer,
});
export default rootReducer;