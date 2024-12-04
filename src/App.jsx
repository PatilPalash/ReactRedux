import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from './CounterStates/Counter';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/Counter" element={<Counter />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
