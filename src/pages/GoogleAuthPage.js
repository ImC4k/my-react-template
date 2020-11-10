import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { isNil } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserProfile, updateUserProfile } from '../redux/actions';
const oAuthClientId = process.env.REACT_APP_clientId;

export default function GoogleAuthPage() {
    const dispatch = useDispatch();
    const profileObj = useSelector(state => state.userProfileReducer.userProfile);
    const handleSuccessfulAuthen = ({profileObj}) => {
        if (!isNil(profileObj)) {
            dispatch(updateUserProfile(profileObj));
        }
    }
    const handleLogout = () => {
        dispatch(deleteUserProfile());
    }
    const defaultHandler = (res) => {console.log(res)};

    return (
        <div>
            <GoogleLogin
                clientId={oAuthClientId}
                buttonText="Login with Google"
                onSuccess={handleSuccessfulAuthen}
                onFailure={defaultHandler}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
            <GoogleLogout
                client={oAuthClientId}
                buttonText="Logout"
                onLogoutSuccess={handleLogout}
            />
            <p>hello {isNil(profileObj)? 'user' : profileObj.name}</p>
        </div>
    )
}
