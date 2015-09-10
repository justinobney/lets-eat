const channelState = [];

export function firebaseCollectionReducerFactory(name) {
  return function reducer(state = channelState, action) {
    const {type} = action;

    switch (type) {
      case `${name}_child_added`:
        return [...state, action.item];
      default:
        return state;
    }
  };
}
