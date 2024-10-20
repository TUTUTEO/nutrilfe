import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './landing.jsx';
import Login from './pages/login/login.jsx';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<App />}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

