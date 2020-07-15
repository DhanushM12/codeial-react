import { FETCH_FRIENDS_SUCCESS } from '../actions/actionTypes';

const defaultProfileState = [];
export default function friends(state = defaultProfileState, action) {
  //{posts:[]}
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return [...action.friends];
    default:
      return state;
  }
}
