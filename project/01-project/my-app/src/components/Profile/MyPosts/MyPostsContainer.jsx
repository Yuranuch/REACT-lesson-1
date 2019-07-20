import React from 'react';
import { AddPostactionCreator, UpdateNewPostTextactionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
    let state=props.store.getState()
    let addPost = () => {
        props.store.dispatch(AddPostactionCreator());
    };
    let onPostChange = (text) => {
        props.store.dispatch(UpdateNewPostTextactionCreator(text));
    };

    return <MyPosts addPost={addPost} onPostChange={onPostChange} postsData={state.profilePage.postsData} />
};


export default MyPostsContainer;