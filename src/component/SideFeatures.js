import React from 'react';

function SideFeatures(props){
    return(
        <div className="Aside--side-features">
            <div className="Aside--side-features--menu-wrapper">
                <h3 className="Aside--side-features--menu-wrapper--feature" 
                    onClick={ () => props.click('features') }
                >
                    Feature
                </h3>
                <h3 className="Aside--side-features--menu-wrapper--my-feature" 
                    onClick={ () => props.click('my-features') } 
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