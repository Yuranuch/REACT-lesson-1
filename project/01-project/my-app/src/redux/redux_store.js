import createStore from "redux/src/createStore";
import combineReducers from "redux/src/combineReducers";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";



let reducers=combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    siteBar: sidebarReducer
});
let redux_store=createStore(reducers)

export default redux_store;