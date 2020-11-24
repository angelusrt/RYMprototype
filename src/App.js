import './App.css';
import RYMCard from './component/RYMCard';

import Navbar from './component/Navbar';
import LeftNavItem from './component/LeftNavItem';
import RightNavItem from './component/RightNavItem';

import Reviews from './component/Reviews';
import ReviewCard from './component/ReviewCard';
import ImageCard from './component/ImageCard';
import InfoCard from './component/InfoCard';
import DescriptorCard from './component/DescriptorCard';
import ReviewText from './component/ReviewText';

import Aside from './component/Aside';
import SocialCard from './component/SocialCard';
import SideFeatures from './component/SideFeatures';
import FeatureCard from './component/FeatureCard';

import Logo from './component/Logo';
import Log from './component/Log';

import sonemic from './images/sonemic.png';
import arrow from './images/arrow.svg';
import dropdownArrow from './images/dropdownArrow.svg';
import lupe from './images/lupe.svg';
import star from './images/star.svg';
import burguer from './images/lista.svg';

//import tenAlbumPic from './images/8456207.png'; 
//import discoAlbumPic from './images/8342068.png';
import vb from './images/vb.png';

import data from './data.json'

import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';

function App() {
  const[currentScroll,setCurrentScroll] = useState(0);
  const[a, setA] = useState(false);
  const[dropActive, setDropActive] = useState(false);
  const[spanSearch, setSpanSearch] = useState('Artists');
  const[sideTransition, setSideTransition] = useState('features');

  window.addEventListener("scroll", scrollHandler);

  function scrollHandler(){
    
    setCurrentScroll(window.scrollY);

    (currentScroll >= 600)?setA(true):setA(false)
  
    console.log(`${a} ${currentScroll}`);
  }

  var reviewCard = [];
  var featureCard = [];

  reviewCard = data.ReviewCard.map( prop => ( 
    <ReviewCard>
      <ImageCard
        image={prop.albumImage}
        starIcon={star}
        stars={prop.stars}
        ratings={prop.ratings}
      />  
      <InfoCard
        artist={prop.artist}
        name={prop.songName}
        year={prop.year}
        genres={prop.genre}
        subgenres={prop.subgenre}
      />
      <DescriptorCard>
        {prop.descriptors.map( desc => <h5>{desc}</h5>)}
      </DescriptorCard>
      <ReviewText
        review={prop.review}
        review2={prop.review2}
      />
    </ReviewCard>
  ));

  featureCard = data.FeatureCard.map( prop => (
    <FeatureCard
      image={vb}
      songName={prop.songName}
      artist={prop.artist}
      year={prop.date}
      rating={prop.stars}
      star={star}
    />
   ));

  var dropdowmMenu = <div className="Navbar--right-items--form--select-dropdown--dropdown">
    <span onClick={() => {setSpanSearch('Artists'); setDropActive(!dropActive); } }>Artists</span>
    <span onClick={() => {setSpanSearch('Genre'); setDropActive(!dropActive); } }>Genre</span>
    <span onClick={() => {setSpanSearch('Label'); setDropActive(!dropActive); } }>Label</span>
    <span onClick={() => {setSpanSearch('Review'); setDropActive(!dropActive); } }>Review</span>
  </div>;

  function clickHandler(prop){
    setSideTransition(prop);
  }

  return (
    <div className="App">
      <RYMCard img={sonemic} arrow={arrow}/>

      <Navbar>
          <LeftNavItem
            burguer={burguer}
          >
            <a href="/#">New</a>
            <a href="/#">Chart</a>
            <a href="/#">Lists</a>
            <a href="/#">Community</a>
          </LeftNavItem>
          <RightNavItem>
            <form className="Navbar--right-items--form">
              <input type="search"/>
              <div className="Navbar--right-items--form--select-dropdown">
                <div className="Navbar--right-items--form--select-dropdown--button" onClick={ () => setDropActive(!dropActive) }>
                  <span>{spanSearch}</span>
                  <img alt="" src={dropdownArrow}/>
                </div>

                {dropActive && dropdowmMenu}
              </div>
              <div className="Navbar--right-items--form--button">
                <img alt="" src={lupe}></img>
              </div>
            </form>
          </RightNavItem>
          <CSSTransition
            timeout={300}
            classNames="stick"
            unmountOnExit
          >
            <LeftNavItem logo={Logo}/>
            <RightNavItem log={Log}/>
          </CSSTransition>
      </Navbar>

      <div className="content-wrapper">
        <Reviews>
          {reviewCard}
        </Reviews>

        <Aside>
          <SocialCard/>
          
          <SideFeatures click={ prop => clickHandler(prop)}>
            <CSSTransition
              in={sideTransition === 'features'}
              timeout={300}
              classNames="feature-transition"
              unmountOnExit
            >
              <div>
                {featureCard}
              </div>
            </CSSTransition>
            <CSSTransition
              in={sideTransition === 'my-features'}
              timeout={300}
              classNames="my-feature-transition"
              unmountOnExit
            >
              <div></div>
            </CSSTransition>
          </SideFeatures>
        </Aside>
      </div>
    </div>
  );
}

export default App;
