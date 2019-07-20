import React from 'react';
import './index.css';
import store from './redux/redux_store';

import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state) => {


    ReactDOM.render(
        <BrowserRouter>

            <App  dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>,
        document.getElementById('root'));
}



renderEntireTree(store.getState());
store.subscribe (()=> {
    let state=store.getState();
    renderEntireTree(state)})


serviceWorker.unregister();

