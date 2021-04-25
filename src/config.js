import TestComponent from "./TestComponent.js"

export default [
  {
    id: "1",
    classTagName: "slide1",
    altsName: "slide1",
    imageSrc: "https://picsum.photos/200/300",
    altComponent: TestComponent.bind(this,{ text: "Slide1" })
  },
  {
    id: "2",
    classTagName: "slide2",
    altsName: "slide1",
    imageSrc: "",
    altComponent: TestComponent.bind(this,{ text: "Slide2" })
  },
  {
    id: "3",
    classTagName: "slide3",
    altsName: "slide3",
    altComponent: TestComponent.bind(this,{ text: "Slide3" })
  },
  {
    id: "4",
    classTagName: "slide4",
    altsName: "slide1",
    imageSrc: "https://picsum.photos/200/300",
    altComponent: TestComponent.bind(this,{ text: "Slide4" })
  },
  {
    id: "5",
    classTagName: "slide5",
    altsName: "slide5",
    imageSrc: "",
    altComponent: TestComponent.bind(this,{ text: "Slide5" })
  },
  {
    id: "6",
    classTagName: "slide6",
    altsName: "slide6",
    altComponent: TestComponent.bind(this,{ text: "Slide6" })
  }
]
