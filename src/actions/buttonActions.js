import {BUTTON_CLICK, LOGIN_SUCCESS, LOAD_BEGIN, LOAD_COMPLETE} from '../constants';
import Firebase from 'firebase';

let ref = new Firebase('https://envoc-chatterbox.firebaseio.com');

export function handleClick() {
  return {type: BUTTON_CLICK};
}

export function login(payload, router) {
  return dispatch => {
    let complete = () => dispatch({type: LOAD_COMPLETE});
    let fail = (error) => dispatch({type: 'REGISTER_FAIL', ...error});
    dispatch({type: LOAD_BEGIN});

    auth(payload, (authData) => {
      dispatch({type: LOGIN_SUCCESS, payload: authData});
      router.transitionTo('/', null, null);
    }, fail, complete);
  };
}

export function register(payload, router) {
  return dispatch => {
    let complete = () => dispatch({type: LOAD_COMPLETE});
    let fail = (error) => dispatch({type: 'REGISTER_FAIL', ...error});
    dispatch({type: LOAD_BEGIN});

    createUser(payload, (authData) => {
      dispatch({type: LOGIN_SUCCESS, payload: authData});
      router.transitionTo('/', null, null);
    }, fail, complete);
  };
}

function noop() {}
function auth(credentials, success, fail = noop, always = noop) {
  ref.authWithPassword(credentials, authCallback);

  function authCallback(error, authData) {
    if (error) {
      fail(error);
    } else {
      success(authData);
    }
    always();
  }
}

function createUser(credentials, success, fail = noop, always = noop) {
  ref.createUser(credentials, (error) => {
    if (error) {
      fail(error);
    } else {
      auth(credentials, success, fail);
    }
    always();
  });
}
