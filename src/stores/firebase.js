import Firebase from 'firebase';
import {fbPaths} from 'constants/index';

const BASE_URL = 'https://envoc-chatterbox.firebaseio.com/';
const fbRoot = new Firebase(BASE_URL);
let dispatch = function () {};
let refs = {};

export function init(_dispatch) {
  dispatch = _dispatch;
  fbPaths.forEach((name)=> {
    let ref = fbRoot.child(name);
    refs[name] = ref;
    ref.on('child_added', function (snapshot) {
      let item = snapshot.val();
      dispatch({type: `${name}_child_added`, item: item});
    });
    ref.on('value', function (snapshot) {
      let item = snapshot.val();
      dispatch({type: `${name}_value`, item: item});
    });
  });
}

export {refs};
