import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Single from './components/todos/Single'
import About from './components/pages/About'

import { Provider } from './context'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar/>

            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/todo/:id" component={Single} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </React.Fragment>

        </Router>
      </Provider>
    );
  }
}

export default App;
