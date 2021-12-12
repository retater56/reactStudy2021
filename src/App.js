import React, { Component } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';

import './sass/style.scss';

class App extends Component {
  render() {
    return (
      <div className='body__wrapper'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
