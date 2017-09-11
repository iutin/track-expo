import { FETCHING_TRACK, FETCHING_TRACK_SUCCESS, FETCHING_TRACK_FAILURE,CHANGE_ROUTER } from '../constants'
import React from 'react'
const initialState = {
  result: [],
  isFetching: false,
  isShow: false,
  error: false
}

export default function trackReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_TRACK:
      return {
        ...state,
        result:[],
        isShow: false,
        isFetching: true
      }
    case FETCHING_TRACK_SUCCESS:
      return {
        ...state,
        isShow: true,
        isFetching: false,
        result: action.data
      }
    case CHANGE_ROUTER:
      return {
        ...state,
        isShow: false,
        isFetching: false,
        error: false
      }
    case FETCHING_TRACK_FAILURE:
      return {
        ...state,
        isShow: false,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
