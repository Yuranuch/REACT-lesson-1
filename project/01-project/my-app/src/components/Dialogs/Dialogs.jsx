import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {SendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/State";




const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map ((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    });

    let messagesElements = props.state.messageData.map ((m) => {
        return <MessageItem message={m.message}/>
    });

    let newMessage = React.createRef();
    let NewMessageBody=props.newMessBody;
    let onSendMessageClick = () => {
        props.dispatch(SendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(UpdateNewMessageBodyCreator(body))
    }

    return (
        <div className={classes.dialogWrap}>
            <div className={classes.dialogs}>
                {dialogsElements}
            </div>
            <div className={classes.Messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={onNewMessageChange} ref={newMessage} value={NewMessageBody}/>
                </div>
                <div>
                     <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;