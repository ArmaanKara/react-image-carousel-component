import React, {useState, useEffect} from "react";
import "./ReactCarousel.css"



const ReactCarousel = ({cards, time}) => {
  const [index, setIndex] = useState(0)
  const [currentTimeout, setCurrentTimeout] = useState()
  const [sliderData, setSliderData] = useState(cards);
  const [intervalValue, setintervalValue] = useState(time || 5000);
  // const [descriptionStylesVar, setDescriptionStylesVar] = useState("")

  const shiftImage = (n,m) => {
    let result = n % m;

    //Return a positive value
    return result >= 0 ? result : result + m;
  }
  const prevSlide = () => {
    setIndex(shiftImage(index - 1, cards.length))
  };
  const nextSlide = () => {
    setIndex(shiftImage(index + 1, cards.length))
  };
  const modifiedImageSliderData = (currentIndex) => {
    setSliderData(
      sliderData.map((element, index_) => {
        return { ...element, active: index_ === currentIndex };
      }),
    );
  }

  const descriptionStyles = () => {
    let descriptionStylesVar = ""
    
  }
  useEffect(() => {
    if (currentTimeout) clearTimeout(currentTimeout)
    modifiedImageSliderData(index)

    const t = setTimeout(() => {
      setIndex(shiftImage(index + 1, cards.length))
    }, intervalValue);

    setCurrentTimeout(t)
    return () => {
      clearTimeout(currentTimeout)
    }
  }, [intervalValue, index])

  return (
    <div className="App">
      <div className="carousel">
        {sliderData.map((item, i) => {
          const indexLeft = shiftImage(index - 1, cards.length);
          const indexRight = shiftImage(index + 1, cards.length)

          let classNameImage = ""
          if (i === index) {
            classNameImage = "card card--active"
          }
          else if (i === indexLeft){
            classNameImage = "card card--left"
          }
          else if (i === indexRight) {
            classNameImage = "card card--right"
          }
          else{
            classNameImage="card"
          }

          let descriptionStyles = ""
          if (item.description.length <= 0 || item.description === "" || item.description === null)  {
            descriptionStyles = ""
          }
          else{
            descriptionStyles = "text-description"
          }
          return(
            <>
              <img key={item.id} className={classNameImage} src={item.image} alt="boat" />
              <div key={item.id} className={classNameImage}>
                <div className={descriptionStyles}>
                  {item.description}
                </div>
              </div>
            </>
          )
        })}
      </div>
        <div className="buttons">
            <button onClick={() => prevSlide()} className="button-left">
              <i class="arrow left"></i>
            </button>
            <button onClick={() => nextSlide()} className="button-right">
            <i class="arrow right"></i>
            </button>
        </div>
    </div>
  );
}

export default ReactCarousel;
