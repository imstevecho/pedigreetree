import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PedigreeApp from './PedigreeApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PedigreeApp />, document.getElementById('pedigree-tree'));
registerServiceWorker();
