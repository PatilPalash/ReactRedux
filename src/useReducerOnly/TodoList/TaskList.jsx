import { useState } from "react";
import Task from "./Task";
import { useReducer } from "react";
const initialtask = [];

function reducer(state, action) {
    // console.log(action)
    // console.log(state)
    switch (action.type) {
        case "add-task":
            return [...state, createnewTask(action.payload.name)];
        case "toggle-task":
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    return { ...task, complete: !task.complete }
                }
                return task;
            })
        case "delete-task":
            return state.filter(task => task.id !== action.payload.id);
        default:
            return state;
    }
}
function createnewTask(name) {
    return { id: Date.now(), name: name, complete: false }
}
export default function TaskList() {
    const [taskName, setTaksName] = useState("");
    const [state, dispatch] = useReducer(reducer, initialtask);
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: 'add-task', payload: { name: taskName } });
        // setTaksName("")
    }
    // console.log(state)

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Add Task</label>
                    <input type="text" value={taskName} onChange={(e) => setTaksName(e.target.value)} id="task-input" placeholder="Enter Your Password" />
                    <button>Add</button>
                </form>
                <div>
                    {state.map((task) =>
                        <Task task={task} key={task.id} dispatch={dispatch} />
                    )}
                </div>
            </div>
        </>
    );
}