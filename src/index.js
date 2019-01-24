import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <Tabs />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
//  );


serviceWorker.unregister();
