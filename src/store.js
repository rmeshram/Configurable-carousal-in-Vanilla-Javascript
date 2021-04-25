export default (reducers, initialState) => {
  let state = initialState;
  let listeners = [];
  const getState = () => state;

  const dispatch = (action) => {
    state = reducers(state, action);
    listeners.forEach((listener) => {
      listener(state);
    });
  };

  const subscribe = (listener) => {
    listener && listener.constructor === Function && listeners.push(listener);
  };

  return {
    dispatch,
    subscribe,
    getState,
  };
};
