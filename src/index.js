import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="projects" component={Projects} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
);
