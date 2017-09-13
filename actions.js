import {FETCHING_TRACK, FETCHING_TRACK_SUCCESS, FETCHING_TRACK_FAILURE,CHANGE_ROUTER} from './constants'
export function fetchTrackFromAPI(barcode, type) {
  return (dispatch) => {
    dispatch(getTrack())
    fetch("https://track-package.com.ua/app/api.php?token=ff3a03dbf77845a5a65d36e63d20132b&" +
      "barcode=" + barcode + "&delivery=" + type, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(data => data.json()).then(json => {
      if (json.status == true) {
        if (!Array.isArray(json.message)) {
          json.message = [];
        }
        dispatch(getTrackSuccess(json.message))
      } else {
        dispatch(getTrackFailure())
      }
    }).catch(err => dispatch(getTrackFailure(err)))
  }
}

export function getTrack() {
  return {type: FETCHING_TRACK}
}

export function getTrackSuccess(data) {
  return {type: FETCHING_TRACK_SUCCESS, data}
}

export function getTrackFailure() {
  return {type: FETCHING_TRACK_FAILURE}
}
