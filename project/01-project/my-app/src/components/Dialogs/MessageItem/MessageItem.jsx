import React from 'react';
import classes from './MessageItem.module.css';

const MessageItem = (props) => {
    return (
        <div className={classes.messegesItem}>
            <img src='https://im0-tub-by.yandex.net/i?id=4a6917062e93dab4a9668037e06da792-l&n=13' alt=''/>
            {props.message}
        </div>
    )
}

export default MessageItem;