import { Link } from 'react-router-dom';

function LinkComponent() {
    return (
        <div>
            <h2>Navigation</h2>
            <Link to="/Counter">useState Counter</Link> <br/>
            <Link to="/CounterReducer">useReducer Counter</Link><br/>
            <Link to="/CounterObjects">useReducer objects Counter</Link><br/>
            <Link to="/TaksList">TaksList</Link>
        </div>
    );
}

export default LinkComponent;
