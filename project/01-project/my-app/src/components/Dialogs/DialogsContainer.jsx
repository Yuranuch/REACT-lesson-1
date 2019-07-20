import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {SendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";




const DialogsContainer = (props) => {

    let state=props.store.getState()
    let onSendMessageClick = () => {
        props.store.dispatch(SendMessageCreator())
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(UpdateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs SendMessage={onSendMessageClick}
                 UpdateNewMessageBody={onNewMessageChange}
                 dialogsData={state.dialogPage.dialogsData} messageData={state.dialogPage.messageData}/>
    )
}

export default DialogsContainer;