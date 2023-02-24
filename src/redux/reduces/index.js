/* eslint-disable import/no-named-as-default */
import {combineReducers} from 'redux';
import home from './home';
import nice from './nice';

export default combineReducers({
  home,
  nice
});
