import { useReducer} from 'react';

const initialState = {
    count: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count += 1 };
        case 'decrement':
            return { ...state, count: state.count -= 1 };
        case 'reset':
            return { ...state,count: 0 };
        default:
            return state;
    }
}

export default function UseCounter(val) {
    initialState.count = val;
    const [count, dispatch] = useReducer(reducer, initialState);
    return [count, dispatch];
};
