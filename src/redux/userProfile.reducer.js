const initialState = {
    userProfile: null,
};

const userProfileReducer = (state = initialState, action) => {
    if (action.type === 'DELETE_USER_PROFILE') {
        return Object.assign({ ...state }, { userProfile: null });
    }
    else if (action.type === 'UPDATE_USER_PROFILE') {
        return Object.assign({...state}, {userProfile: action.userProfile});
    }
    else {
        return state;
    }
}

export default userProfileReducer;