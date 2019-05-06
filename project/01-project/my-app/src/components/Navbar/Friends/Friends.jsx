import React from 'react';
import classes from './Friends.module.css';
import {NavLink} from "react-router-dom";
import FriendsItem from "./FriendsItem/FriendsItem";



let Friends = (props) => {


let friends = props.friendsData.map((f) => {
    return <FriendsItem name={f.name} id={f.id} />
});


    return (
        <div>
            <div className={classes.sitebar}>
                {friends}
            </div>
        </div>
    )
};

export default Friends ;
