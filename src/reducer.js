export default function reducers(state = initState, action) {
  let currentIndex = null;
  switch (action.type) {
    case "INIT":
      return state;
    case "NEXT":
      currentIndex = state.currentIndex + 1;
      currentIndex = currentIndex % state.config.length;
      return {
        ...state, currentIndex: currentIndex
      }
    case "PREVIOUS":
      currentIndex = state.currentIndex - 1;
      currentIndex = currentIndex % state.config.length;
      if (currentIndex === -1) currentIndex = state.config.length - 1;
      return {
        ...state, currentIndex: currentIndex
      }
  }
}
