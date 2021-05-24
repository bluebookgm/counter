import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Input from "./components/Input"
import { HashRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from "./serviceWorker";

ReactDOM.render((
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/set" component={Input} />
    </Router>
  ), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
