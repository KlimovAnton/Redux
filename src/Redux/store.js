import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { pointsReducer } from "./pointsSlice";
import { localeReducer } from "./localeSlice";


const initialState = {
    points: {
        value: 0, 
    },
    locale: {
        lang: "uk",
    }
};

const rootReducer = combineReducers({
    points: pointsReducer,
    locale: localeReducer,
})


const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
