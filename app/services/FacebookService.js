const FBSDK = require('react-native-fbsdk');
const {LoginManager, AccessToken} = FBSDK;

export function loginWithFacebook() {
	return new Promise((resolve, reject) => {
		console.log("LoginWithFacebook");
		console.log(LoginManager);
		LoginManager.logInWithReadPermissions(['public_profile', 'email'])
			.then(result => {
				if (result.isCancelled) {
					reject(result);
				} else {
					AccessToken.getCurrentAccessToken()
						.then((token) => {
								resolve({
									...result,
									token
								});
							}
						);

				}
			})
			.catch(e => {
				console.log("here");
				reject(e);
			});
	});
}