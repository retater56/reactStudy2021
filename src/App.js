import React, { Component } from 'react';
import Form from './components/form/form';

import './sass/style.scss';

class App extends Component {
  render() {
    return (
      <div className='body__wrapper'>
        <Form />
      </div>
    );
  }
}

export default App;
