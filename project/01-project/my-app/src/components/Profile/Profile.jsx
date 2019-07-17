import React from 'react';
import MyPost from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";







const Profile = (props) => {


    return <div>

        <ProfileInfo/>

        <MyPost postsData={props.state.postsData}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}/>
    </div>
};


export default Profile;