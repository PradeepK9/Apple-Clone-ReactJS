import React from 'react';
import './HomeBanner.css';

export default function HomeBanner(props) {
  const heroData = props.heroData;
  const className = "HomeBanner " + heroData.class;
  const multiuImgClass = heroData.imgUrl2 ? "MultiImg" : "";
  console.log("HomeBanner rendred.....");

  return (
    <div className={className}>
      {heroData &&
        <div>
          <div className='Headings'>
            <h1>{heroData.heading1}</h1>
            <h3>{heroData.heading2}</h3>
            <p>{heroData.shortDecription}</p>
            <p>{heroData.shortDecription2}</p>
          </div>
          <div className='Links'>
            <a href='#'>{heroData.link1}</a>
            <a className='leftLink' href='#'>{heroData.link2}</a>
          </div>
          <div className={`Hero_Img ${multiuImgClass}`}>
            <img src={heroData.imgUrl} alt={heroData.alt} />
            {heroData.imgUrl2 &&
              <img src={heroData.imgUrl2} alt={heroData.alt} />
            }
          </div>
        </div>
      }
    </div>
  )
}