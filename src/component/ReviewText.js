import React, { useState } from 'react';

function ReviewText(prop){
    const[buttonText, SetButtonText] = useState('Expand Review');
    let review = [];
    let review2 = [];

    review = prop.review.map( item => (
        <p className="Review--card--paragraph-wrapper--paragraph">
            {item}
        </p>
    ))
    
    
    review2 = prop.review2.map( item => (
        <p className="Review--card--paragraph-wrapper--paragraph">
            {item}
        </p>
    ))

    return(
        <div className="Review--card--paragraph-wrapper">
            {review}
            {buttonText === 'Hide' && review2}
            <div className="Review--card--paragraph-wrapper--expand">
                <button 
                    onClick={ () => (buttonText === 'Expand Review')?
                                    SetButtonText('Hide'):
                                    SetButtonText('Expand Review')}
                >
                    { buttonText }
                </button>
            </div>
      </div>
    )
}

export default ReviewText;