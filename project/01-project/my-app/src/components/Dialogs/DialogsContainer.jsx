import React from 'react';
import {SendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




const mapStateToProps = (state)=>{
    return {
        dialogsData : state.dialogPage.dialogsData,
        messageData : state.dialogPage.messageData
    }
};
const mapDispatchToProps = (dispatch) =>{
    return {
        SendMessage : ()=> {
            dispatch(SendMessageCreator());},
        UpdateNewMessageBody : (body)=> {
            dispatch(UpdateNewMessageBodyCreator(body));}
    }
};

const DialogContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogContainer;