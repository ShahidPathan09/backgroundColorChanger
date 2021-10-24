import { COLOR_1, COLOR_2, COLOR_3, COLOR_4, COLOR_5, RESET } from "../Constants/Constants";

const initialState = {
    bgColor: null
}

export const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case COLOR_1: return {
            ...state,
            bgColor: state.bgColor = "grey"
        }
        case COLOR_2: return {
            ...state,
            bgColor: state.bgColor = "red"
        }
        case COLOR_3: return {
            ...state,
            bgColor: state.bgColor = "pink"
        }
        case COLOR_4: return {
            ...state,
            bgColor: state.bgColor = "yellow"
        }
        case COLOR_5: return {
            ...state,
            bgColor: state.bgColor = "orange"
        }
        case RESET: return {
            ...state,
            bgColor: state.bgColor = null
        }
        default: return state
    }
}
