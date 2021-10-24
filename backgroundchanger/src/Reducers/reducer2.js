import { COLOR_2 } from '../Constants/Constants';

const initialState = {
    bgColor: null
}

const colorReducer2 = (state = initialState, action) => {
    switch (action.type) {
        case COLOR_2: return {
            ...state,
            bgColor2: state.bgColor = "blue"
        }
        default: return state
    }
}

export default colorReducer2;
