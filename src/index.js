import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Home1111 from './Home';
import Jsx from './Jsx';
import Bootstrap from './Bootstrap';
import BootstrapReact from './BootstrapReact';
import State123 from './State';
import StateRepeat from './StateRepeat';
import ShowHide from './ShowHide';
import StateList from './StateList';
import Parent from './collection/Parent';
import HomePage from './template/HomePage';

//ReactDOM.createRoot(document.getElementById('root')).render(<App />);

const root = ReactDOM.createRoot(document.getElementById('root123'));
root.render(<Parent />);
