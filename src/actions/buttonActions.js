import {BUTTON_CLICK, LOGIN_SUCCESS} from '../constants';
import Firebase from 'firebase';

let ref = new Firebase('https://envoc-chatterbox.firebaseio.com');

export function handleClick() {
  return {type: BUTTON_CLICK};
}

export function login(payload, router) {
  return dispatch => {
    auth(payload, (authData) => {
      dispatch({type: LOGIN_SUCCESS, payload: authData});
      router.transitionTo('/', null, null);
    }, (error) => {
      dispatch({type: 'LOGIN_FAIL', ...error});
    });
  };
}

function noop() {}
function auth(authInfo, success, fail = noop) {
  ref.authWithPassword(authInfo, authCallback);

  function authCallback(error, authData) {
    if (error) {
      fail(error);
    } else {
      success(authData);
    }
  }
}
