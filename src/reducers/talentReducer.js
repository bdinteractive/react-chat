import { 
  FETCH_TALENT_LANDING,
  FETCH_TALENT_SEARCH,
  FETCH_TALENT_FEED
} from '../actions/types';

const initialState = {
  items: [],
  search: [],
  feed: []
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
    default:
    return state;
  }
}