import * as AT from './authTypes';
import axios from 'axios';

export const authenticateUser = (username, password) => {
    const credentials = {
        username: username,
        password: password
    };
    return dispatch => {
        dispatch({
            type: AT.LOGIN_REQUEST
        });
        axios.post("http://localhost:8081/authenticate", credentials)
            .then(response => {
                let token = response.data.jwt;
                let role = response.data.role;
                localStorage.setItem('jwtToken', token);
                localStorage.setItem('role', role);
                dispatch(success(true));
            })
            .catch(error => {
                dispatch(failure());
            });
    };
};

export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type: AT.LOGOUT_REQUEST
        });
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('role');
        dispatch(success(false));
    };
};

const success = isLoggedIn => {
    return {
        type: AT.SUCCESS,
        payload: isLoggedIn
    };
};

const failure = () => {
    return {
        type: AT.FAILURE,
        payload: false
    };
};