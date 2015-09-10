import {BUTTON_CLICK, LOGIN_SUCCESS} from '../constants';

export function handleClick() {
  return {type: BUTTON_CLICK};
}

export function login(router) {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: LOGIN_SUCCESS});
      router.transitionTo('/', null, null);
    }, 1000);
  };
}
