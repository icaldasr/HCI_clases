import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from '../store/reducers';

const middleware = [ thunk ]; //Thunk es una lista

const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware) //Sacar los elementos de la lista y ponerlos como parámetros
);

const store = createStore(
    allReducers,
    composedEnhancers
);

export default store;