import { LOGIN_START } from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function Login(email, password) {
  return (dispatch) => {
    const url = APIUrls;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    });
  };
}
