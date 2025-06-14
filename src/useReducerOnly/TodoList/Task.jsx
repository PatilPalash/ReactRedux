export default function Task({ task, dispatch }) {
    console.log(task)
    return (
        <>
            <div>
                <span style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>
                    {task.name}
                </span>

                <button onClick={() => dispatch({ type: "toggle-task", payload: { id: task.id } })}>{task.complete ? 'Undo' : 'Complete'}</button>
                <button onClick={() => dispatch({ type: 'delete-task', payload: { id: task.id } })}>Delete</button>
            </div>
        </>
    );
}