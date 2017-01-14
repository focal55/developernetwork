import { loginUsingFacebook } from '../services/LoginService';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = (type) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		if (type == 'facebook') {
			loginUsingFacebook();
		}
	};
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.main();
};