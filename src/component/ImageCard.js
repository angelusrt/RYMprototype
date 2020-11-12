import React from 'react';

function ImageCard(props){

    return(
        <div className="Review--card--image-section">
            <img className="Review--card--image-section--image" alt="" src={props.image}/>
            <div className="Review--card--image-section--ratings-section">
                <div className="Review--card--image-section--ratings-section--stars">
                    {() => {
                        for (let index = 0; index < props.stars; index++) {
                            <img alt="" src={props.starIcon}/>    
                        }
                    }}
                </div>
                <h5 className="Review--card--image-section--ratings-section--ratings">
                    { props.ratings}
                </h5>
            </div>
        </div>
    );
}


export default ImageCard;