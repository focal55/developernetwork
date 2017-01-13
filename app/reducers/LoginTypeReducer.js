import { SWITCH_LOGIN_TYPE } from '../actions/types';

const INITIAL_STATE = {
	loginType: 'standard'
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SWITCH_LOGIN_TYPE:
			return { ...state, loginType: action.payload };
		default:
			return state;
	}
}
