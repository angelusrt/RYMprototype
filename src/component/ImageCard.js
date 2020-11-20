import React from 'react';
//import albumImage from 'C:/Users/Angelusrt/Desktop/Code/1-Sites/rym/src/images/vb.png';

function ImageCard(props){
    //stars
    var imgEl = [];

    for (var i = 0; i < props.stars; i++) {
        imgEl.push(<img 
            className="Aside--side-features--cards-wrapper--feature-card--side--bottom--star"
            alt="" src={props.starIcon}
        />);
    }
    //const albumImage = import('C:/Users/Angelusrt/Desktop/Code/1-Sites/rym/src/images/vb.png'); 
    //console.log(albumImage)

    return(
        <div className="Review--card--image-section">
            <img className="Review--card--image-section--image" alt="" style={{background: "url('')"}} src={props.image}/>
            <div className="Review--card--image-section--ratings-section">
                <div className="Review--card--image-section--ratings-section--stars">
                    { imgEl }
                </div>
                <h5 className="Review--card--image-section--ratings-section--ratings">
                    { `${props.ratings} reviews` }
                </h5>
            </div>
        </div>
    );
}


export default ImageCard;