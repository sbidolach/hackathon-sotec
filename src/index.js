import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import { reducer as form } from 'redux-form'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { compose } from 'recompose'
import thunk from 'redux-thunk'

// components
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Help from './components/Help'
import Project from './components/Project'

const reducer = combineReducers({
  form
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <Route path="/contact" component={Contact} />
        <Route path="/project/:id" component={Project} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>)


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
