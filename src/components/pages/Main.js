import React, { Component } from 'react';
import Header from '../Header';
import Score from '../Score';
import TableForm from '../TableForm';
import '../../styles/styles.css'



class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <div className="multiplicador">
            <Score />
            <TableForm />
          </div>
        </div>
    );
  }
}

export default App;
