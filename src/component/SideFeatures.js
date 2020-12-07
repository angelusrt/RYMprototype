import React, { useState } from 'react';

function SideFeatures(props){
    let[active,setActive] = useState(true);

    let feature;
    let myFeature;

    if(active){
        feature = 'side-feature-active'
        myFeature = ''
    }
    else{
        feature = ''
        myFeature = 'side-feature-active'   
    }
    return(
        <div className="Aside--side-features">
            <div className="Aside--side-features--menu-wrapper">
                <h3 className={`Aside--side-features--menu-wrapper--feature ${feature}`} 
                    onClick={ () => { props.click('features'); setActive(true)}}
                >
                    Feature
                </h3>
                <h3 className={`Aside--side-features--menu-wrapper--my-feature ${myFeature}`} 
                    onClick={ () => {props.click('my-features'); setActive(false)}} 
                >
                    My Feature
                </h3>
            </div>
            
            <div className="Aside--side-features--cards-wrapper">
                {props.children}
            </div>

        </div>
    );
}

export default SideFeatures;