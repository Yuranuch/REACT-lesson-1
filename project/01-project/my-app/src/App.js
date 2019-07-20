import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {


    return (

        <div className='app-wrapper'>
            <Header/>

            <Navbar state={props.state.siteBar}/>
            <div className='app-wrapper-content'>

                <Route path='/profile'
                       render={() => <Profile store={props.store}/>}/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogPage} store={props.store} dispatch={props.dispatch} />}/>
            </div>

        </div>

    )
};


export default App;
