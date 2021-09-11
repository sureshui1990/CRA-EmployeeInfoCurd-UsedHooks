import React, { useContext } from 'react';
import { CounterContext } from './index';

export default function ComponentF() {

    const handleClick = (val) => {
        console.log('val', val);
        counter.counterDispatch({ type:'decrementActionVal', val })
    };

    const counter = useContext(CounterContext);
    return (
        <div>
            Component F test me

            <button
            type="button"
            onClick={() => handleClick(30)}
            >
                Decrement for secondCount
            </button>

            <p>{JSON.stringify(counter)}</p>
            
        </div>
    )
}
