import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
//styles
import './index.css';

const store = configureStore();
// ReactDOM.render(<App />, document.getElementById('root'));
const jsx= (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
