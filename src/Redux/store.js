import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

export const addPoints = (value) => {
    return {
        type: 'points/addPoints',
        payload: value,
    }
}

export const removePoints = (value) => {
    return {
        type: 'points/removePoints',
        payload: value,
    }
}

const initialState = {
    points: {
        value: 0, 
    },
    locale: {
        lang: "uk",
    }
};

const rootReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {

        case "points/addPoints": 
            return {
                ...state,
                points: {
                    value: state.points.value + action.payload, 
                },
            };

        case "points/removePoints": 
            return {
                ...state,
                points: {
                    value: state.points.value - action.payload, 
                },
            };

        default: 
            return state;
    }
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
