import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Details from './pages/details/Details';
import Categories from './pages/details/Categories'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/categories/:id" Component={Categories} />
        <Route exact path="/details/:id" Component={Details} />
      </Routes>
    </Router>
  )
}

export default App
