import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Top from './views/pages/top/Top';
import Detail from './views/pages/detail/Detail';
import Study from './views/pages/study/Study';
import { TerminalContextProvider } from "react-terminal";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <TerminalContextProvider>
        <Route exact path="/" component={Top}></Route>
        <Route exact path="/details/:course" component={Detail}></Route>
        <Route exact path="/study/:course/:id" component={Study}></Route>
      </TerminalContextProvider>
    </React.StrictMode>
  </Router>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
