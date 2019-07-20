import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {SendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const DialogsContainer = (props) => {
    let state = props.store.getState();
    let onSendMessageClick = () => {
        props.store.dispatch(SendMessageCreator())
    };
    let onNewMessageChange = (body) => {
        props.store.dispatch(UpdateNewMessageBodyCreator(body))
    };
    return (
       <Dialogs SendMessage={onSendMessageClick}
                UpdateNewMessageBody={onNewMessageChange}
                dialogsData={state.dialogPage.dialogsData}
                messageData={state.dialogPage.messageData}
                newPostText={state.dialogPage.newPostText}
       />
    )
};
export default DialogsContainer;

/*const mapStateToProps = (state) => {
    return {
        dialogsData : state.dialogPage.dialogsData,
        messageData : state.dialogPage.messageData,
        newPostText : state.dialogPage.newPostText
    }
};
const mapDispatchToProps = (dispatch)=> {
    return {
        SendMessage : ()=> {
            dispatch(SendMessageCreator());},
        UpdateNewMessageBody : (body)=> {
            dispatch(UpdateNewMessageBodyCreator(body));
        }
    }
};

const superDialogsContainer = connect(mapStateToProps, mapDispatchToProps)();
export default superDialogsContainer;*/
