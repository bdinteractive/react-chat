import { 
  FETCH_TALENT_LANDING,
  FETCH_TALENT_SEARCH,
  FETCH_TALENT_FEED,
  FETCH_TALENT_ATTRIBUTES
} from '../actions/types';

const initialState = {
  items: [],
  search: [],
  feed: [],
  attributes: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TALENT_LANDING:
      return {
        ... state,
        items: action.payload
      }
      case FETCH_TALENT_SEARCH:
      return {
        ... state,
        search: action.payload
      }
      case FETCH_TALENT_FEED:
      return {
        ... state,
        feed: action.payload
      }
      case FETCH_TALENT_ATTRIBUTES:
      return {
        ... state,
        attributes: action.payload
      }
    default:
    return state;
  }
}