import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    function handleIncremnet() {
        setCount((count) => count + 1)
    }
    function handleDcremnet() {
        setCount((count) => count - 1)
    }
    function handleReset() {
        setCount(0);
    }
    return (
        <>
            <div className="card">
                <div className="counter-container">
                    <h2 className="counter-heading">Count - {count}</h2>
                    <div className="counter-buttons">
                        <button className="counter-button increment" onClick={handleIncremnet}>Increment</button>
                        <button className="counter-button decrement" onClick={handleDcremnet}>Ddecrement</button>
                        <button className="counter-button reset" onClick={handleReset}>Reset</button>
                        {/* <button className="counter-button increment" onClick={() => setCount((count) => count + 1)}>Increment</button>
                <button className="counter-button decrement" onClick={() => setCount((count) => count - 1)}>Ddecrement</button>
                <button className="counter-button reset" onClick={() => setCount(0)}>Reset</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter