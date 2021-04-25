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
  const connect = (mapStateToProps = () => {}, mapDispatchToProps)  => {
    return (Component) => {
     return Component({...state, ...mapDispatchToProps(dispatch)})
    }
  }

  return {
    dispatch,
    subscribe,
    getState,
    connect
  };
};
