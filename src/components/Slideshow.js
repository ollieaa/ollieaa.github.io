import React from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export default function Slideshow(props) {

  const fadeImages = props.images

  function handleClick() {
    props.updateProject({
      images: fadeImages,
      title: props.title
    })
  }

  return (
    <div className="slide-container" onClick={handleClick}>
    
            <Fade autoplay={true} 
                  arrows={false} 
                  duration={3000} 
                  pauseOnHover={false}>
                  
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[0]} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[1]} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[2]} />
                </div>
              </div>

            </Fade>
      
    </div>
  )

}