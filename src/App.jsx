import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from './CounterStates/Counter';
import CounterReducer from './CounterStates/CounterReducer';
import CounterObjects from './CounterStates/CounterObjects';
import LinkComponent from './LinkComponent';
import TaksList from './TodoList/TaskList';

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
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
