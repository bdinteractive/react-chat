import { FETCH_TALENT_LIST } from './types';
import axios from 'axios';

export const fetchTalentList = () => dispatch => {
  axios({
    method: 'POST',
    url: 'http://www.api.getchatwith.com/api/GetAppTalentLanding',
    headers: {
      "Authorization": "bearer" + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHJpbmciOiJkZWZhdWx0IiwiaWF0IjoxNTIwNzc0MzYxfQ.6evsCd9mU6aLvpS3Ljf1yTRmzz4EG2y25V7EbuA0dgo"
    },
    data: {
      "ResultNumberBegin": 0,
      "ResultNumberEnd": 25
    }
  })
  .then(talentList => dispatch({
    type: FETCH_TALENT_LIST,
    payload: talentList.data.Response
  }))
}