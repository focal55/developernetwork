import {loginWithFacebook} from "./FacebookService";
//import * as HttpClient from "../network/HttpClient";
import {postJson} from "../network/HttpClient";
//import {loginWithSms, loginWithEmail} from "../system/account-kit/AccountKitService";


const FBSDK = require('react-native-fbsdk');
const {
	GraphRequest,
	GraphRequestManager,
} = FBSDK;

export function loginUsingFacebook() {
	return loginUsingService(loginWithFacebook, "facebook", result => ({token: result.token.accessToken}));
}

function loginUsingService(loginFunction: Function, serviceName: string, payloadTransformer: Function) {
	console.log("Authenticating with service=" + serviceName);
	return loginFunction()
		.then(async serviceUser => {
			console.log("Authenticated with service=" + serviceName);
			console.log(serviceUser);
			return serviceUser;
		})
		.then(result => authenticateWithBackend(serviceName, payloadTransformer(result)))
		.then(async serverResponse => {
			console.log("Authenticated with backend55555");
			await SessionStorage.setSession(serverResponse);
			return serverResponse;
		})
		.catch(e => {
			console.log(e);
		});
}

export function authenticateWithBackend(service: string, payload: Object) {
	console.log("Authenticating with backend");
	// Get Email.
	fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + payload.token)
		.then((response) => response.json())
		.then((json) => {
			console.log("FACEBOOK GRAPH")
			console.log(json.email)
			let new_payload = {}
			new_payload.email = json.email
			new_payload.fb_token = payload.token
			return postJson("/api/tokens/fb", {service, new_payload})
				.then(serverResponse => {
					console.log("Authenticated with backend!");
					console.log(serverResponse);
					return serverResponse;
				});
		})
		// .catch(() => {
		// 	reject('ERROR GETTING DATA FROM FACEBOOK')
		// })
}

export function loadSessionIntoClients(token: string, userId: string) {
	HttpClient.setAuthToken(token);
	setRelaySession(token, userId);
}

export function whenLoggedIn(serverResponse) {
	try {
		const {token} = serverResponse;
		//loadSessionIntoClients(user.token, user.id);

		if (token.userID) {
			console.log("here")
			// Start the graph request.
			// Create a graph request asking for user information with a callback to handle the response.
			const infoRequest = new GraphRequest(
				'/me',
				{
					accessToken: token.accessToken,
					parameters: {
						fields: {
							string: 'email,name,first_name,middle_name,last_name'
						}
					}
				},
				responseInfoCallback
			);
			new GraphRequestManager().addRequest(infoRequest).start();
		} else {
			showLoginScreen();
		}
	} catch (e) {
		console.log(e)
		console.log("Error when logging in");
		//SessionStorage.clearSession();
		showLoginScreen();
	}
}