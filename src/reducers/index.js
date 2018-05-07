import { combineReducers } from 'redux';
import talentReducer from './talentReducer';

export default combineReducers({
  talentLanding: talentReducer,
  talentSearch: talentReducer,
  talentFeed: talentReducer
});