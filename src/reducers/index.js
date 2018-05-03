import { combineReducers } from 'redux';
import talentListReducer from './talentListReducer';

export default combineReducers({
  talentList: talentListReducer
});