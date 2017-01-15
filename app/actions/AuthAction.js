import { loginUsingFacebook } from '../services/LoginService';
import { postJson } from '../network/HttpClient';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	MENU_SET_ACTIVE
} from './types';

let user_data = {};

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
			loginUsingFacebook()
				.then(function(fbConnectResponse) {
					fbAccessToken = fbConnectResponse.token.accessToken;
					// Query FB Graph for email address.
					return fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + fbAccessToken);
				})
				.then(function(response) {
					return response.json();
				})
				.then(function(fbGraphResponse) {
					// Authenticate with backend.
					user_data = Object.assign(user_data, fbGraphResponse);
					let new_payload = {};
					new_payload.email = fbGraphResponse.email;
					new_payload.fb_token = fbAccessToken;
					return postJson("/api/tokens/fb", {new_payload})
				})
				.then(serverResponse => {
					serverResponse = Object.assign(serverResponse, user_data);
					return serverResponse;
				})
				.then(user => loginUserSuccess(dispatch, user))
				.catch(e => {
					console.log(e);
				});

		}
	};
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: MENU_SET_ACTIVE,
		payload: 'developers'
	});
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};