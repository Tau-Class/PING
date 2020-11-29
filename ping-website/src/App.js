import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';

/*const App = () => (
  <div className='App'>
    <Navigation />
    <Main />
  </div>
);*/

class App extends React.Component {
  render (){
    return (
  <div className='App'>
    <Navigation />
    <Main />
  </div>
    );
  }
}

export default App;

const Navigation = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"> </span>
            <a className="navbar-brand d-none d-lg-inline-block" href="#">
                PING
            </a>
            <div className="w-100 text-right">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            <ul className="navbar-nav ml-auto flex-nowrap">
                <li className="nav-item">
                    <NavLink to="/"> <a className="nav-link m-2 menu-item nav-active">Home</a></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Features"> <a className="nav-link m-2 menu-item">Features</a></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/About"> <a className="nav-link m-2 menu-item">About</a></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/About#ContactUs"> <a className="nav-link m-2 menu-item">Contact Us</a></NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Features" component={Features} />
    <Route exact path="/About" component={About} />
    <Route exact path="/About#ContactUs" component={About} />
  </Switch>
);
