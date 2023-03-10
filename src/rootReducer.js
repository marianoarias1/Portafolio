import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import { contactReducer } from "./Components/modalContact/contacReducer";
import storage from "redux-persist/lib/storage";
import { mobileReducer } from "./Components/navBar/mobileReducer";

const rootReducer=combineReducers(
    {
        contact: contactReducer,
        mobile: mobileReducer,
    }
);

export default persistReducer(
    {
        key:'global',
        storage,
        whitelist:[]
    },
    rootReducer
)