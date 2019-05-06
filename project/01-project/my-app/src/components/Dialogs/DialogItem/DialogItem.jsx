import React from 'react';
import classes from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={classes.dialogItem}>
            <img src='https://im0-tub-by.yandex.net/i?id=4a6917062e93dab4a9668037e06da792-l&n=13' alt=''/>
            <NavLink to={/dialogs/ + props.id}>{props.name}</NavLink>
        </div>
    )
}




export default DialogItem;