import React from 'react'
import '../App.css'

const Card = ({delay, date, day, groupPhases, hour, player1, player2, children}) => {
  return (
    <div class="card">
      <h2>{date} <span>{day}</span></h2>
      <p>{groupPhases}</p>
      <ul>
        {children}
      </ul>
    </div>
  )
}

export default Card;