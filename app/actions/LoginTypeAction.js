import { SWITCH_LOGIN_TYPE } from './types';

export const setLoginType = (val) => {
	return {
		type: SWITCH_LOGIN_TYPE,
		payload: val
	}
};
