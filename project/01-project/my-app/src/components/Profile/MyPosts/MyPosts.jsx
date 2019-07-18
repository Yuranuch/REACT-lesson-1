import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';





const MyPosts = (props) => {

    const postsElement = props.postsData.map((p) => {
        return <Post massege={p.massege} likesCount={p.likesCount} id={p.id}/>
    });
    let newElement= React.createRef();

    let OnAddPost = () => {
        props.addPost()

    };
    let onPostChange = () => {
        let text = newElement.current.value;
        props.onPostChange(text)

    };


    return <div className={classes.allPosts}>
        MyPosts
        <div>
            <textarea onChange={onPostChange} ref={newElement} value={props.newPostText}/>
        </div>
            <button onClick={OnAddPost}>Add post</button>
        <NewPost/>
        {postsElement}


    </div>

}


export default MyPosts;