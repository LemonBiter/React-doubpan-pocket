import React from 'react';
import ReactDOM from 'react-dom';
import "@babel/polyfill"
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
// import 'font-awesome/css/font-awesome.css'
import 'antd/dist/antd.css'
import App from './app';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById('root')
);
