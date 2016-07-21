import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers';
import * as Actions from '../actions';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(reduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  /** add some data
   *
   *
   */

  for(var i = 0;i<10;i++){
    store.dispatch(Actions.addProject("Project title"));
  }

  store.dispatch(Actions.addAbout("test add about"));
  store.dispatch(Actions.addAbout("test add about1"));

  return store;
}
