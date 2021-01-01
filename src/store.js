import { createStore,applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducers from '../src/rootReducer/rootReducer'
import cartWatcher from './component/Cart/cartSagas';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store =createStore(combineReducers, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(cartWatcher);

export default store;