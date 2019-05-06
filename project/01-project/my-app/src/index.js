import React from 'react';
import './index.css';
import store from './redux/State';

import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state) => {


    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState ()} dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>,
        document.getElementById('root'));
}


store.subscribe (renderEntireTree);
renderEntireTree(store.getState)


serviceWorker.unregister();

