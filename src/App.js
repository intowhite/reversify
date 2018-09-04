import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Reversify from './Reversify';
import Restful from './Restful';

const navItems = [
  {
    name: 'Reversify'
  },
  {
    name: 'Restful'
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentApp: 'Reversify'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-contain">
            <div className="App-logo">
              <a href="/">
                Medify
              </a>
              <span>
                USHealth
              </span>
            </div>
            <div className="App-menu">
              <ul>
                <li>Plans</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Login</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="App-body">
          <div className="App-nav">
            <ul>
              {navItems.map((item, i) =>
                <li key={i} className={this.state.currentApp === item.name ? 'active' : ''} onClick={() => this.setState({ currentApp: item.name })}>{item.name}</li>
              )}
            </ul>
          </div>
          <div className="App-form">
            <div className="App-group">
              <Reversify className={this.state.currentApp === 'Reversify' ? 'show' : ''} />
              <Restful className={this.state.currentApp === 'Restful' ? 'show' : ''} />
            </div>
          </div>
        </div>
        <div className="App-footer">
          <div className="App-byline">
            <div>
              <span>
                For
                <a href="someurl"> MyMedicareBot</a>
              </span>
              <span>Everything by <a href="http://www.clearstreamcreative.com" target="_blank">Josh Kovitz</a> 2018</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
