import React from 'react';
import {AddPostactionCreator, UpdateNewPostTextactionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const MyPostsContainer = (props) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(AddPostactionCreator());
    };
    let onPostChange = (text) => {
        props.store.dispatch(UpdateNewPostTextactionCreator(text));
    };
    return <MyPosts addPost={addPost} updateNewPostText={onPostChange} postsData={state.profilePage.postsData}/>
}
export default MyPostsContainer;

/*const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(AddPostactionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(UpdateNewPostTextactionCreator(text));
        }
    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer */