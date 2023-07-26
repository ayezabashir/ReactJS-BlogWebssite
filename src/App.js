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
import Login from './pages/login/Login';
import Account from './pages/account/Account';
import Register from './pages/login/Register';
import Create from './components/create/Create';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/categories/:id" Component={Categories} />
        <Route exact path="/details/:id" Component={Details} />
        <Route exact path='/login' Component={Login}></Route>
        <Route exact path='/account' Component={Account}></Route>
        <Route exact path='/register' Component={Register}></Route>
        <Route exact path='/create' Component={Create}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
