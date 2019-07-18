import React from 'react';
import MyPost from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";







const Profile = (props) => {


    return <div>

        <ProfileInfo/>

        <MyPostsContainer postsData={props.state.postsData}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}/>
    </div>
};


export default Profile;