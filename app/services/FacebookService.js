const FBSDK = require('react-native-fbsdk');
const {LoginManager, AccessToken} = FBSDK;

export function loginWithFacebook() {
	return new Promise((resolve, reject) => {
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
				reject(e);
			});
	});
}