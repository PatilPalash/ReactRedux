import React, { useReducer, useState } from 'react'
const initialState = {
    counter: 0,
    counter1: 5
}
function reducer(state, action) {
    switch (action.type) {
        case "Increment":
            return { ...state,counter: state.counter + action.playload }
        case "Decrement":
            return { ...state,counter: state.counter - action.playload };
            case "Increment1":
                return { ...state,counter1: state.counter1 + action.playload }
            case "Decrement1":
                return { ...state,counter1: state.counter1 - action.playload };
        case "Reset":
            return initialState;
        default:
            return state
    }
}
const CounterObjects = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    // console.log(useReducer()) [
    //     undefined,
    //     "f"
    // ]

    return (
        <>
            <div className="card">
                <div className="counter-container">
                    <h2 className="counter-heading">Count - {count.counter}</h2>
                    <h2 className="counter-heading">Count - {count.counter1}</h2>
                    <div className="counter-buttons">
                        <button className="counter-button increment" onClick={() => dispatch({ type: 'Increment', playload: 1 })} >Increment</button>
                        <button className="counter-button decrement" onClick={() => dispatch({ type: 'Decrement', playload: 1 })}>Ddecrement</button>
                        <button className="counter-button increment" onClick={() => dispatch({ type: 'Increment', playload: 5 })} >Increment</button>
                        <button className="counter-button decrement" onClick={() => dispatch({ type: 'Decrement', playload: 5 })}>Ddecrement</button>
                        <button className="counter-button increment" onClick={() => dispatch({ type: 'Increment1', playload: 2 })} >Increment</button>
                        <button className="counter-button decrement" onClick={() => dispatch({ type: 'Decrement1', playload: 2 })}>Ddecrement</button>
                        <button className="counter-button reset" onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CounterObjects