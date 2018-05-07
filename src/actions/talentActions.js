import { 
  FETCH_TALENT_LANDING,
  FETCH_TALENT_SEARCH,
  FETCH_TALENT_FEED
} from './types';
import axios from 'axios';

export const fetchTalentLanding = () => dispatch => {
  axios({
    method: 'POST',
    url: 'http://www.api.getchatwith.com/api/super/GetAppTalentLanding',
    headers: {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJpbmciOiJkZWZhdWx0IiwiaWF0IjoxNTI1MzU3NjE5fQ.JJ4X_JomgsVVzv6PPz_8DUbuBC8nXY5F5W7v5ceaFsc"
    },
    data: {
      "ResultNumberBegin": 0,
      "ResultNumberEnd": 25
    }
  })
  .then(talentLanding => dispatch({
    type: FETCH_TALENT_LANDING,
    payload: talentLanding.data.Response.LandingData
  }))
}

export const fetchTalentSearch = search => dispatch => {
  console.log("search: ", search);
  axios({
    method: 'POST',
    url: 'http://www.api.getchatwith.com/api/super/GetAppTalentBySearch',
    headers: {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJpbmciOiJkZWZhdWx0IiwiaWF0IjoxNTI1MzU3NjE5fQ.JJ4X_JomgsVVzv6PPz_8DUbuBC8nXY5F5W7v5ceaFsc"
    },
    data: {
      "ResultNumberBegin": 0,
      "ResultNumberEnd": 25,
      "FirstName": search.searchTerm
    }
  })
  .then(talentSearch => dispatch({
    type: FETCH_TALENT_SEARCH,
    payload: talentSearch.data.Response.LandingData
  }))
}

export const fetchTalentFeed = talentId => dispatch => {
  console.log("talentId: ", talentId);
  axios({
    method: 'POST',
    url: 'http://www.api.getchatwith.com/api/super/GetFeedMediaByTalentAdmin',
    headers: {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJpbmciOiJkZWZhdWx0IiwiaWF0IjoxNTI1MzU3NjE5fQ.JJ4X_JomgsVVzv6PPz_8DUbuBC8nXY5F5W7v5ceaFsc"
    },
    data: {
      "TalentId": talentId
    }
  })
  .then(talentFeed => dispatch({
    type: FETCH_TALENT_FEED,
    payload: talentFeed.data.Response
  }))
}