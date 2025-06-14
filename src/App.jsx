import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from './useReducerOnly/CounterStates/Counter';
import CounterReducer from './useReducerOnly/CounterStates/CounterReducer';
import CounterObjects from './useReducerOnly/CounterStates/CounterObjects';
import LinkComponent from './LinkComponent';
import TaksList from './useReducerOnly/TodoList/TaskList';
import TodoList_Soultion from './useReducerOnly/TodoList_Soultion/TaskList';

function App() {
  return (
    <>
      <Router>
        <LinkComponent />
        <Routes>
          <Route path="/Counter" element={<Counter />} />
          <Route path="/CounterReducer" element={<CounterReducer />} />
          <Route path="/CounterObjects" element={<CounterObjects />} />
          <Route path="/TaksList" element={<TaksList />} />
          <Route path="/TodoList_Soultion" element={<TodoList_Soultion />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
