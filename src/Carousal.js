export default (props) => {
  const { currentIndex, config = [], autoSlide = false, maxSlide = 0 } = props || {};
  const data = config[currentIndex];
  const { id, altsName, imageSrc, altComponent: AltComponent } = data || {};

  let slides = [];
  if (maxSlide) {
    let index = currentIndex;
    for (let count = currentIndex; count < currentIndex + maxSlide; count++) {
      index = ++index % config.length;
      slides.push(config[index])
    }
    slides = slides.map(data => {
      const { id, altsName, imageSrc, altComponent: AltComponent } = data || {};
      return (`<div key=${id} class="slide" >
      ${!!imageSrc ? `<img src=${imageSrc} alt=${altsName} />` : `${AltComponent()}`}
    </div>`)
    }).join('');

  } else {
    slides = (`<div key=${id} >
    ${!!imageSrc ? `<img src=${imageSrc} alt=${altsName} />` : `${AltComponent()}`}
  </div>`)
  }

  return (
    `<div class="carousel-container">
      <a class="left-arrow"}>
        &#10094;
      </a>
     ${slides}
      <a class="right-arrow" >
        &#10095;
      </a>
    </div>`)
}
