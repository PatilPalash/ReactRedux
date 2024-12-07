export default function Task({ task, dispatch }) {
    return (
        <>
            <div>
                <span>{task.name}</span>
                <button onClick={() => dispatch({ type: "toggle-task", payload: { id: task.id } })}>{task.complete?'Undo':'Complete'}</button>
                <button>Delete</button>
            </div>
        </>
    );
}