import {loginWithFacebook} from "./FacebookService";

const FBSDK = require('react-native-fbsdk');
const {
	GraphRequest,
	GraphRequestManager,
} = FBSDK;

export function loginUsingFacebook() {
	return loginUsingService(loginWithFacebook, "facebook", result => ({token: result.token.accessToken}));
}

function loginUsingService(loginFunction: Function, serviceName: string, payloadTransformer: Function) {
	return loginFunction()
		.then(async serviceUser => {
			return serviceUser;
		})
		.catch(e => {
			console.log(e);
		});
}