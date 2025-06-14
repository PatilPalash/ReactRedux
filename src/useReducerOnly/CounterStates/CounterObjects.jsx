import React, { useReducer, useState } from 'react'
const initialState = {
    counterBy1: 0,
    counterBy5: 5
}
function reducer(state, action) {
    switch (action.type) {
        case "Increment":
            return { ...state, counterBy1: state.counterBy1 + action.playload }
        case "Decrement":
            return { ...state, counterBy1: state.counterBy1 - action.playload };
        case "Increment1":
            return { ...state, counterBy5: state.counterBy5 + action.playload }
        case "Decrement1":
            return { ...state, counterBy5: state.counterBy5 - action.playload };
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
                    <div className="counter-buttons">
                        <h2 className="counter-heading">counterBy1 - {count.counterBy1}</h2>
                        <button className="counter-button increment" onClick={() => dispatch({ type: 'Increment', playload: 1 })} >IncrementBy1</button>
                        <button className="counter-button decrement" onClick={() => dispatch({ type: 'Decrement', playload: 1 })}>DdecrementBy1</button>
                        <button className="counter-button increment" onClick={() => dispatch({ type: 'Increment', playload: 5 })} >IncrementBy5</button>
                        <button className="counter-button decrement" onClick={() => dispatch({ type: 'Decrement', playload: 5 })}>DdecrementBy5</button>
                    </div>
                    <div className="counter-buttons">
                        <h2 className="counter-heading">counterBy5 - {count.counterBy5}</h2>
                        <button className="counter-button increment" onClick={() => dispatch({ type: 'Increment1', playload: 2 })} >IncrementBy2</button>
                        <button className="counter-button decrement" onClick={() => dispatch({ type: 'Decrement1', playload: 2 })}>DdecrementByu2</button>
                    </div>
                    <div className="counter-buttons">
                        <button className="counter-button reset" onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CounterObjects