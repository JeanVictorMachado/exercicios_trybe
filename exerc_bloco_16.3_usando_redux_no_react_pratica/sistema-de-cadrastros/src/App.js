import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ClientesCadastrados from './pages/ClientesCadastrados';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/clintes-cadastrados" component={ClientesCadastrados} />
              <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
