import React, { Component } from 'react';
import configureStore from './stores/configureStore';
import { Provider } from 'react-redux';
import Score from './components/Score';
import TableForm from './components/TableForm';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <TableForm />
          <Score />
        </div>
      </Provider>
    );
  }
}

export default App;
