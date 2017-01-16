import { AsyncStorage } from 'react-native';
import { loginUsingFacebook } from '../services/LoginService';
import { postJson } from '../network/HttpClient';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	FB_LOGIN_USER_FAIL,
	APP_LOGIN_USER_FAIL,
	LOGIN_USER,
	MENU_SET_ACTIVE,
	RESET_APP_STORAGE
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

export const clearAsyncStorage = () => {
	return (dispatch) => {
		AsyncStorage.removeItem("@devnetwork")
		.then(function() {
			dispatch({ type: RESET_APP_STORAGE });
		})
		.catch(e => {
			console.log(e);
		});
	};
};

export const alreadyLoggedIn = (user) => {
	return {
		type: LOGIN_USER_SUCCESS,
		payload: user
	};
};

export const loginUser = (type) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		if (type == 'facebook') {
			loginUsingFacebook()
				.then(function(fbConnectResponse) {
					fbAccessToken = fbConnectResponse.token.accessToken;
					user_data.fbaccesstoken = fbAccessToken;
					// Query FB Graph for email address.
					return fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + fbAccessToken);
				})
				.then(function(response) {
					return response.json();
				})
				.catch(() => fbLoginUserFail(dispatch))
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
					user_data = Object.assign(user_data, serverResponse);
					return serverResponse;
				})
				.then(user => loginUserSuccess(dispatch, user))
				.catch(() => appLoginUserFail(dispatch));

		}
	};
};

const fbLoginUserFail = (dispatch) => {
	dispatch({ type: FB_LOGIN_USER_FAIL });
};

const appLoginUserFail = (dispatch) => {
	dispatch({ type: APP_LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
	try {
		let storage = {};
		storage.email = user_data.email;
		storage.jwt = user_data.token;
		storage.name = user_data.name;
		storage.fbaccesstoken = user_data.fbaccesstoken;
		AsyncStorage.setItem('@devnetwork', JSON.stringify(storage))
			.then(function() {
				dispatch(
					{
						type: MENU_SET_ACTIVE,
						payload: 'developers'
					},
					{
						type: LOGIN_USER_SUCCESS,
						payload: user
					}
				);
			});
	} catch (error) {
		// Error saving data
		console.log(error);
	}
};