import { combineReducers } from 'redux';
import MenuReducer from './MenuReducer';
import LoginTypeReducer from './LoginTypeReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
	loginType: LoginTypeReducer,
	auth: AuthReducer,
	menu: MenuReducer,
});
