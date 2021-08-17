import React, { Component } from 'react'
import Home from './pages/home';
import Detail from './pages/detail';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={Detail} />
          </div>
        </Router>
      </div>
      
    );
  }
}

export default App
