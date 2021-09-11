import React, { useReducer } from 'react';

const initialState = {
    firstCount: 0,
    secondCount: 15,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'increment':
            return {...state, firstCount: state.firstCount + 1 };
        case 'decrement':
            return {...state, firstCount: state.firstCount - 1 };
        case 'reset':
            return initialState;
        case 'incrementActionVal':
            return {...state, secondCount: state.secondCount + action.val };
        case 'decrementActionVal':
            return {...state, secondCount: state.secondCount - action.val };
        default:
            return state;
    }
}
export default function UseReducerOne() {
    const [count, dispatch] = useReducer(reducer,initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer,initialState);
    return (
        <div>
            <div>One red
            <h3>First Counter <b>{count.firstCount}</b></h3>
            <h3>Second Counter <b>{count.secondCount}</b></h3>
            <button type="button" onClick={() => dispatch({type:'increment'})}>
                Increment by '1'
            </button>
            <button type="button"
             onClick={() => dispatch({type: 'decrement' })}
            >
                Decrement by '1'
            </button>
            
            <button type="button"
                onClick={() => dispatch({type:'reset'})}
            >
                Reset
            </button>
            <button type="button" onClick={() => dispatch({ type: 'incrementActionVal', val: 12 })}>
                Increment by '5'
            </button>
            <button type="button"
             onClick={() => dispatch({ type:'decrementActionVal',val: 10 })}
            >
                Decrement by '5'
            </button>
            </div>
            <div>another one red
            <h3>First Counter <b>{countTwo.firstCount}</b></h3>
            <h3>Second Counter <b>{countTwo.secondCount}</b></h3>
            <button type="button" onClick={() => dispatchTwo({type:'increment'})}>
                Increment by '1'
            </button>
            <button type="button"
             onClick={() => dispatchTwo({type: 'decrement' })}
            >
                Decrement by '1'
            </button>
            
            <button type="button"
                onClick={() => dispatchTwo({type:'reset'})}
            >
                Reset
            </button>
            <button type="button" onClick={() => dispatchTwo({ type: 'incrementActionVal', val: 12 })}>
                Increment by '5'
            </button>
            <button type="button"
             onClick={() => dispatchTwo({ type:'decrementActionVal',val: 10 })}
            >
                Decrement by '5'
            </button>
            </div>
        </div>
    )
}
