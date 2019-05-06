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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                massege: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        }
        else if ( action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
        else if ( action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessBody = action.body;
            this._callSubscriber(this._state)
        }
        else if ( action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessBody;
            this._state.dialogPage.newMessBody='';
            this._state.dialogPage.messageData.push({id : 6 , message : body});
            this._callSubscriber(this._state);
        }
    },
};
export const AddPostactionCreator = () => {
    return {type : ADD_POST}
};
export const UpdateNewPostTextactionCreator =(text) => {
    return {type : UPDATE_NEW_POST_TEXT,  newText : text }
};
export const SendMessageCreator = () => {
    return {type : SEND_MESSAGE}
};
export const UpdateNewMessageBodyCreator = (body) => {
    return {type : UPDATE_NEW_MESSAGE_BODY, body: body}
};



export default store;