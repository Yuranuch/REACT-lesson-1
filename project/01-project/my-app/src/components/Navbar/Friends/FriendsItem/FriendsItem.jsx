import React from 'react';
import classes from './FriendsItem.module.css';
import {NavLink} from "react-router-dom";



let FriendsItem = (props) => {
    return (
                <div className={classes.friendItem}>
                         <img src='https://im0-tub-by.yandex.net/i?id=4a6917062e93dab4a9668037e06da792-l&n=13' alt=''/>
                        <span>{props.name}</span>
                </div>
    )
};



export default FriendsItem ;
