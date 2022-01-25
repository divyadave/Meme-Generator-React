import React from 'react';
import star from '../components/Star.png'

function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }
  else {
    badgeText = "Not Available"
  }
  return (
    <div className="card">
      <div className='card__badge'>{badgeText}</div>
    <img src={`../images/${props.img}`} className="card__image" />
    <div className="card__stats">
        <img src={star} />
        <span>{props.rating}</span>
        <span>({props.reviewCount}) • </span>
        <span>{props.location}</span>
    </div>
    <p>{props.title}</p>
    <p>From ${props.price }/ person</p>
</div>
  )
}

export default Card;
