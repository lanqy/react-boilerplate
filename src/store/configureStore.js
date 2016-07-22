import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import * as Actions from '../actions';

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(thunk,promise,logger),
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

     /*
     let unsubscribe = store.subscribe(() =>
       console.log('subscribe store:',store.getState())
     );
     */

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
