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

export const pointsReducer = (state = { value: 0, }, action) => {
    switch (action.type) {
        case "points/addPoints":
            return {
                value: state.value + action.payload,
            }

        case "points/removePoints":
            return {
                value: state.value - action.payload,
            }
        
        default: 
            return state;
    }
    
}