import { Link } from 'react-router-dom';

function LinkComponent() {
    return (
        <div>
            <h2>Navigation</h2>
            <Link to="/Counter">useState Counter</Link>
            <Link to="/CounterReducer">useReducer Counter</Link>
            <Link to="/CounterObjects">useReducer objects Counter</Link>
        </div>
    );
}

export default LinkComponent;
