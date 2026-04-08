import React, {useState, useEffect} from 'react';

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // const autoScroll = () => {
    //     if (currentIndex === slides.length -1) {
    //         return setCurrentIndex(0);
    //     }
    //     return setCurrentIndex(currentIndex + 1);
    // }

    const slideImages = (evt) => {
        let button = evt.target.className;
        if (button.includes("left") && currentIndex > 0) {
            return setCurrentIndex(currentIndex - 1);
        } else if (button.includes("right") && currentIndex < slides.length - 3) {
            return setCurrentIndex(currentIndex + 1);
        } else {
            return setCurrentIndex(0);
        }
    }

    useEffect(() => {
        //const interval = setInterval(() => {autoScroll()}, 3000);
        //return () => clearInterval(interval);
    })

    return (
        <div className = "image-slider">
            <ul>
                {slides.map((slide, index) => (
                    <li key = {index} className = {index === currentIndex ? "active" : ""}>
                        <img 
                            src = {slide.src} 
                            alt = {slide.alt} 
                            style = {{
                                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 3}rem))`
                            }}
                        />
                    </li>
                ))}
            </ul>
            <div 
                className = "image-slider-lr-toggle right-toggle fa-solid fa-circle-arrow-right"
                onClick = {slideImages}
            ></div>
            <div 
                className = "image-slider-lr-toggle left-toggle fa-solid fa-circle-arrow-left"
                onClick = {slideImages}
            ></div>
        </div>
    );
}

export default Slider;
 