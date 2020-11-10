const deleteUserProfile = () => {
    return {
        type: 'DELETE_USER_PROFILE'
    };
}

const updateUserProfile = (userProfile) => {
    return {
        type: 'UPDATE_USER_PROFILE',
        userProfile: userProfile,
    };
}

export {
    deleteUserProfile,
    updateUserProfile,
};