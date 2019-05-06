import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return <div className={classes.item}>

        <img src='https://im0-tub-by.yandex.net/i?id=4a6917062e93dab4a9668037e06da792-l&n=13' alt=''/>

        {props.id}
        {props.massege}
        <div className={classes.like}>
            Likes: {props.likesCount}
        </div>
    </div>


}


export default Post;