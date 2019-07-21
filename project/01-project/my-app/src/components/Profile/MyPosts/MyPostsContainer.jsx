import React from 'react';
import { AddPostactionCreator, UpdateNewPostTextactionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postData : state.profilePage.postsData
    }
};
let mapDispatchToProps = (dispatch) => {
    return{
        addPost : ()=>{
            dispatch(AddPostactionCreator());
        },
        onPostChange : (text)=>{
            dispatch(UpdateNewPostTextactionCreator(text));
        }
    }
};

const MyPostContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer;