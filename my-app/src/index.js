import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
import Grid from './Grid';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Counter />, document.getElementById('counter'));
registerServiceWorker();

ReactDOM.render(<Grid />, document.getElementById('grid'));
registerServiceWorker();