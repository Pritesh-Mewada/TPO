import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './css/demo.css';
import Navigation from "./dev/components/navbar";
import FrontPage from "./dev/components/frontpage"
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import allReducers from './dev/reducers/index';
import Tpocr from './dev/components/tpocr'

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk)

);



ReactDOM.render(<Provider store={store}>
        <div>
            <Navigation/>
            <FrontPage/>
            {/*<Tpocr />*/}
        </div>

    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
