import React from 'react'
import './CardContainer.css';
import HomeCard from './HomeCard';
import jsonData from '../db/data.json'

export default function CardContainer() {
  const cardData = jsonData.cardData;
  console.log("CardContainer rendred.....");

  return (
    <div className="CardContainer">
      {
        cardData.map((data, index) => {
          return (
            <HomeCard key={index} cardData={data} />
          )
        })
      }
    </div>
  )
}
