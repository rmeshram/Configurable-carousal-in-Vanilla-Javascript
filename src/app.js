import createStore from "./store.js";
import config from "./config.js"
import Carousal from "./Carousal.js";
import reducers from "./reducer.js"

const initState = {
  config,
  currentIndex: 0,
  autoSlide: true,
  slideInterval: 3000,
  maxSlide: 2
}

const store = createStore(reducers, initState);

class App {
  constructor() {
    store.subscribe((state) => {
      this.render(state);
      this.attachEvents(state);
    })
    store.subscribe((state) => {
      console.log(state);
    })
  }

  render(state) {
    const container = document.querySelector('.container');
    container.innerHTML = "";
    const Component = store.connect(null, mapDispatchToProps)(Carousal);
    container.appendChild(Component)
  }

  attachEvents(state) {
  }

  init() {
    store.dispatch({ type: "INIT" });
  }
}


function mapDispatchToProps(dispatch, state) {
  return {
    onNext: function () {
      dispatch({ type: "NEXT" });
    },
    onPrevious: function () {
      dispatch({ type: "PREVIOUS" });
    }
  }
}
const app = new App();
console.log(app.init())

