import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {SendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialog-reducer";




const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map ((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    });

    let messagesElements = props.messageData.map ((m) => {
        return <MessageItem message={m.message}/>
    });

    let newMessage = React.createRef();
    let NewMessageBody=props.newMessBody;
    let onSendMessageClick = () => {
        props.SendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.UpdateNewMessageBody(body)
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