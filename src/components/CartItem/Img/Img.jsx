import React from 'react'
import PropTypes from 'prop-types'

function Img({img, preloader}) {
    const [isLoaded, setIsLoaded] = React.useState(false);

    let bg = new Image();
    bg.src = img;
    bg.onload = () => {
      setIsLoaded(true);
    };
  
    return isLoaded ? <img src={img} alt=""/>: <img src={preloader} alt=""/>;
}

export default Img

Img.propTypes = {
  img: PropTypes.string,
  preloader: PropTypes.string
}