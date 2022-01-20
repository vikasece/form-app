import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Form from './components/Form';
import SuccessForm from './components/SuccessForm';
import './App.css'

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  const callbackFunction =(childData)=> {
    setloggedIn(childData);
  }

  return (
    <Router>
      <Switch>
        <Route path='/Success'>
          {loggedIn ? <SuccessForm /> : <Redirect to='/' />}
        </Route>
        <Route path='/'>
          {loggedIn ? (
            <Redirect to='/Success' />
          ) : (
            <Form parentCallback={callbackFunction} />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
