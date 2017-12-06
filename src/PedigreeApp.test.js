import React from 'react';
import ReactDOM from 'react-dom';
import PedigreeApp from './PedigreeApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PedigreeApp />, div);
});
