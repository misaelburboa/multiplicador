import { createStore, applyMiddleware, compose } from 'redux';
import scoreReducer from '../reducers/Score';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        scoreReducer,
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}