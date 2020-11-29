import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Features" component={Features} />
    <Route exact path="/About" component={About} />
    <Route exact path="/About#ContactUs" component={About} />
  </Switch>
);

export default App;