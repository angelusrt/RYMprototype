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

import Aside from './component/Aside';
import SocialCard from './component/SocialCard';
import SideFeaures from './component/SideFeatures';
import FeatureCard from './component/FeatureCard';

import Logo from './component/Logo';
import Log from './component/Log';

import sonemic from './images/sonemic.png';
import arrow from './images/arrow.svg';
import dropdownArrow from './images/dropdownArrow.svg';
import lupe from './images/lupe.svg';
import star from './images/star.svg';
import vb from './images/vb.png';
import burguer from './images/lista.svg';

import tenAlbumPic from './images/8456207.png'; 
import discoAlbumPic from './images/8342068.png';

import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import FeatureCards from './component/FeatureCard';

function App() {
  /*
  window.addEventListener("scroll", scrollHandler);

  function scrollHandler(){
    setCurrentScroll(window.scrollY);
    console.log(currentScroll + " " + currentScroll + 2);

    (currentScroll >= 600)?setA(true):setA(false)
  }*/
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
              <div className="Navbar--right-items--form--dropdown">
                <span>Artists</span>
                <img alt="" src={dropdownArrow}/>
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
          <ReviewCard>
            <ImageCard
              image={tenAlbumPic}
              starIcon={star}
              stars="4"
              ratings="837 ratings"
            />
            <InfoCard
              artist="Tricot"
              name="10"
              year="2020"
              genres="Math rock, indie rock"
              subgenres="Alternative rock"
            />
            <DescriptorCard>
              <h5>female vocals</h5>
              <h5>energetic</h5>
              <h5>uplifting</h5>
              <h5>playful</h5>
              <h5>melodic</h5>
              <h5>mellow</h5>
              <h5>summer</h5>
            </DescriptorCard>

            <div className="Review--card--paragraph-wrapper">
              <p className="Review--card--paragraph-wrapper--paragraph">
                真っ黒 is now facing its most serious competition as my favourite 
                album of 2020 from Tricot’s second album of 2020, 10.
              </p>
              <p className="Review--card--paragraph-wrapper--paragraph">
                Guitarist/vocalist Ikumi “Ikkyu” Nakajima, guitarist Motoko “Motifour”
                Kida, bassist Hiromi “Hirohiro” Sagane, and drummer Yuusuke Yoshida titled
                their fifth album 10 to commemorate their 10th anniversary. The band’s 
                impressive chops are used to serve the songs, wound tightly into a sub-forty
                minute album. Kida’s flexibility as a guitarist, ranging from funky Prince 
                rhythm playing to menacing Robert Fripp riffs, enables the
              </p>
              <div className="Review--card--paragraph-wrapper--expand">
                <button>Expand Review</button>
              </div>
            </div>
          </ReviewCard>
          <ReviewCard>
            <ImageCard
              image={discoAlbumPic}
              starIcon={star}
              stars="4"
              ratings="998 ratings"
            />
            <InfoCard
              artist="Kylie"
              name="Disco"
              year="2020"
              genres="Dance-Pop, Disco"
              subgenres="Nu-Disco, Electro-Disco, Synthpop"
            />
            <DescriptorCard>
              <h5>warm</h5>
              <h5>energetic</h5>
              <h5>uplifting</h5>
              <h5>playful</h5>
              <h5>melodic</h5>
              <h5>mellow</h5>
              <h5>romantic</h5>
            </DescriptorCard>
            <div className="Review--card--paragraph-wrapper">
              <p className="Review--card--paragraph-wrapper--paragraph">
                The 2020 disco-pop revival couldn't really get any better. Ever since the 
                start of the year we got amazing albums from Jessie Ware, Dua Lipa and Róisín 
                Murphy as well as a bunch of neat disco accents from The Weeknd and a whole 
                lot of k-pop artists. And as if that wasn't enough, look who's back, with her 
                best album in almost 20 years!
              </p>
              <p className="Review--card--paragraph-wrapper--paragraph">
                To say Kylie Minogue is an important figure for disco revival is an 
                understatement. If it wasn't for her early 2000s work (and maybe Daft Punk's 
                2013 comeback), I really don't think we'd be experiencing such
              </p>
              <div className="Review--card--paragraph-wrapper--expand">
                <button>Expand Review</button>
              </div>
            </div>
            
          </ReviewCard>
        </Reviews>
        <Aside>
          <SocialCard/>
          <SideFeaures>
            <FeatureCard
              image={vb}
              songName="Visions of bodys being burned"
              artist="Clipping"
              year="23 October 2020"
              rating="3"
              star={star}
            />
            <FeatureCard
              image={vb}
              songName="Visions of bodys being burned"
              artist="Clipping"
              year="23 October 2020"
              rating="3"
              star={star}
            />
            <FeatureCard
              image={vb}
              songName="Visions of bodys being burned"
              artist="Clipping"
              year="23 October 2020"
              rating="3"
              star={star}
            />
            <FeatureCard
              image={vb}
              songName="Visions of bodys being burned"
              artist="Clipping"
              year="23 October 2020"
              rating="3"
              star={star}
            />
          </SideFeaures>
          
        </Aside>
      </div>
    </div>
  );
}

export default App;
