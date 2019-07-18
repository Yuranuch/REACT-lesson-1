import React from 'react';
import './index.css';
import redux_store from './redux/redux_store';

import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state) => {


    ReactDOM.render(
        <BrowserRouter>

            <App state={redux_store.getState ()} dispatch={redux_store.dispatch.bind(redux_store)} store={redux_store} />
        </BrowserRouter>,
        document.getElementById('root'));
}



renderEntireTree(redux_store.getState());
redux_store.subscribe (()=> {
    let state=redux_store.getState();
    renderEntireTree(state)})


serviceWorker.unregister();

