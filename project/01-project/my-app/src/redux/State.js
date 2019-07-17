import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state : {
        profilePage: {
            postsData: [
                {id: 1, massege: 'Hi, my name is Yura', likesCount: '2'},
                {id: 2, massege: 'Hello!', likesCount: '3'},
                {id: 3, massege: 'Hi, my name is Yura', likesCount: '2'},
                {id: 4, massege: 'Hello!', likesCount: '31'}
            ],
            newPostText: 'Yuranuch'
        },
        dialogPage: {
            dialogsData: [
                {id: 1, name: 'Yura'},
                {id: 2, name: 'Genya'},
                {id: 3, name: 'Natasha'},
                {id: 4, name: 'Kirill'},
                {id: 5, name: 'Misha'},
            ],

            messageData: [
                {id : 6 , message: 'Hi, my Name is Yura'},
                {id : 6 , message: 'Hello'},
                {id : 6 , message: 'Welcome'}
            ],
            newMessBody: 'Yura',
        },
        siteBar: {
            friendsData: [
                {id: 3, name: 'Kirill'},
                {id: 2, name: 'Genya'},
                {id: 4, name: 'Misha'}
            ]
        },
    },
    _callSubscriber () {
        console.log( 'State changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
    this._state.profilePage=profileReducer(this._state.profilePage, action);
    this._state.dialogPage=dialogReducer(this._state.dialogPage, action);
    this._state.siteBar= sidebarReducer(this._state.siteBar, action);
    this._callSubscriber(this._state)
    },
};






export default store;