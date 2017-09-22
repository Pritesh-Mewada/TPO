import React, { Component } from 'react';
import './css/demo.css';
import Navigation from "./dev/components/navbar";
import FrontPage from "./dev/components/frontpage"
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import createLogger from 'redux-logger';
import allReducers from './dev/reducers/index';

const logger = createLogger();
const store = createStore(
    allReducers
);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Navigation/>
            <FrontPage/>
        </Provider>
    );
  }
}

export default App;
