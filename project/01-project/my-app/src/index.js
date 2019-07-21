import React from 'react';
import './index.css';
import store from './redux/redux_store';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


let renderEntireTree = () => {


    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store} >
                <App  />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}



renderEntireTree(store.getState());
store.subscribe (()=> {
    let state=store.getState();
    renderEntireTree(state)})




