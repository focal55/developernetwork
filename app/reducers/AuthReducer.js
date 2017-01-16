import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	FB_LOGIN_USER_FAIL,
	APP_LOGIN_USER_FAIL,
	LOGIN_USER,
	RESET_APP_STORAGE
} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false,
	loggingIn: false,
	activeItem: 'splash'
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_USER:
			return { ...state, loggingIn: true, loading: false, error: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state, loading:false, user: action.payload, activeItem: 'developers' };
		case FB_LOGIN_USER_FAIL:
			return { ...state, error: 'Facebook Login Fail, Please Try Again.', password: '', loading: false, loggingIn: false, activeItem: 'splash' };
		case APP_LOGIN_USER_FAIL:
			return { ...state, error: 'An Application Error Occur, Please Try Again later.', password: '', loading: false, loggingIn: false, activeItem: 'splash' };
		case RESET_APP_STORAGE:
			return { ...state, ...INITIAL_STATE};
		default:
			return state;
	}
};