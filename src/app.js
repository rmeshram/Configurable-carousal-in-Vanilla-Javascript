import createStore from "./store.js";
import config from "./config.js"
import Carousal from "./Carousal.js";
import reducers from "./reducer.js"

const initState = {
  config,
  currentIndex: 0,
  autoSlide: false,
  slideInterval: 3000,
  maxSlide:1
}

const store = createStore(reducers, initState);

const onNext = function () {
  store.dispatch({ type: "NEXT" });
}

const onPrevious = function () {
  store.dispatch({ type: "PREVIOUS" });
};

const handleClick = (event) => {
  document.querySelector(".left-arrow").addEventListener('click', onPrevious)
  document.querySelector(".right-arrow").addEventListener('click', onNext)
}

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
    document.querySelector('.container').innerHTML = `${Carousal(state)}`
  }

  attachEvents(state) {
    if(state.autoSlide) {
      setInterval(onNext, state.slideInterval)
    }
    document.addEventListener('click', handleClick)
  }

  init() {
    store.dispatch({ type: "INIT" });
  }
}

const app = new App();
console.log(app.init())

