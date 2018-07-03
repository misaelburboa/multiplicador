import React, { Component } from 'react';
import configureStore from '../../stores/configureStore';
import { Provider } from 'react-redux';
import Header from '../Header';
import Score from '../Score';
import TableForm from '../TableForm';
import '../../styles/styles.css'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Header />
          <div className="multiplicador">
            <Score />
            <TableForm />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
