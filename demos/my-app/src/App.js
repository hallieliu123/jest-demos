import React from 'react';
import './App.css';

import Link from './link';
import CheckboxWithLabel from './CheckboxWithLabel';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Link> Hello world !!! </Link>
        <CheckboxWithLabel labelOn='on' labelOff='off' />
      </div>
    );
  }
}


// snap shots: react-test-renderer 
// assert && manipulate rendered components: react-testing-library
// enzyme: for react, to test react components' output







