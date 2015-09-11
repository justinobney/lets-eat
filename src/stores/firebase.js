import Firebase from 'firebase';
import {LOGIN_SUCCESS} from 'constants/index';

const BASE_URL = 'https://envoc-chatterbox.firebaseio.com/';
const fbRoot = new Firebase(BASE_URL);
let dispatch = function () {};
let refs = {};

function init(_dispatch) {
  dispatch = _dispatch;
  startAuthListener();
}

function startAuthListener(){
  fbRoot.onAuth(function(authData) {
    if (authData) {
      dispatch({type: LOGIN_SUCCESS, payload: authData});
      console.log("Authenticated with uid:", authData.uid);
    } else {
      console.log("Client unauthenticated.")
    }
  });
}

export {refs, init};