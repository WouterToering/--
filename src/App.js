// import fetch

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

const Test = () => (
  <h1>HOMEEE</h1>
);

class App extends Component {
  componentDidMount() {
    fetch('http://localhost/api/workout-logs', {headers: {
      'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6IndvdXRlckBsb2NhbGhvc3QiLCJleHAiOjE1MjgzMTc5ODEsIm9yaWdfaWF0IjoxNTI1NzI1OTgxLCJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IndvdXRlciJ9.uuU9ox7FdhNvBeEE4bLj-FM-Farl57BBE-87EFGj7vrLtQHHy3v_Fu7wPltTVeIDCg66cNWTkSBoC9AAXQ_Llg'
    }})
      .then(result => {
        return result.json();
      })
      .then(result => {
        console.log(result)
      })
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" exact={true} component={Test} />
            <Route path="/test" exact={true} component={Test} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
