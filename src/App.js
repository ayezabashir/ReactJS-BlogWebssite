import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
    </Router>
  )
}

export default App
