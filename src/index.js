import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './Routes';
import Cost from './Cost';
import Phones from './Phones';
import Charts from './Charts';
import Tickets from './Tickets';
import NotFoundPage from './NotFoundPage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
  <Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/routes' component={Routes} />
    <Route exact path='/cost' component={Cost} />
    <Route exact path='/phones' component={Phones} />
    <Route exact path='/charts' component={Charts} />
    <Route exact path='/tickets' component={Tickets} />
    <Route path='*' component={NotFoundPage} />
  </Switch>
</BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
