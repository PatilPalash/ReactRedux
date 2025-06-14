import React, { useReducer, useState } from 'react'

function reducer(state, action) {
    switch (action) {
        case "Increment":
            return state + 1;
        case "Decrement":
            return state - 1;
        case "Reset":
            return 0;
        default:
            return state
    }
}

const CounterReducer = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    // console.log(useReducer()) [
    //     undefined,
    //     "f"
    // ]

    return (
        <>
            <div className="card">
                <div className="counter-container">
                    <h2 className="counter-heading">Count - {count}</h2>
                    <div className="counter-buttons">
                        <button className="counter-button increment" onClick={() => dispatch('Increment')} >Increment</button>
                        <button className="counter-button decrement" onClick={() => dispatch('Decrement')}>Ddecrement</button>
                        <button className="counter-button reset" onClick={() => dispatch('Reset')}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterReducer;