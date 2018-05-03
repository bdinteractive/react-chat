import { FETCH_TALENT_LIST } from '../actions/types';

const initialState = {
  items: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TALENT_LIST:
      return {
        ... state,
        items: action.payload
      }
    default:
    return state;
  }
}