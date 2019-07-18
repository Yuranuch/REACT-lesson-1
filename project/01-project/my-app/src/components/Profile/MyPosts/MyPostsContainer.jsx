import React from 'react';
import { AddPostactionCreator, UpdateNewPostTextactionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
    let addPost = () => {
        props.dispatch(AddPostactionCreator());
    };
    let onPostChange = (text) => {
        props.dispatch(UpdateNewPostTextactionCreator(text));
    };

    return <MyPosts AddPost={addPost} onPostChange={onPostChange} postsData={props.postsData} />
};


export default MyPostsContainer;