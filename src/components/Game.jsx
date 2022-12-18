import React from 'react'

const Game = ({player1, hour, player2}) => {
  return (
    <li>
      <img src={`/assets/icon-${player1}.svg`} alt={`${player1}`} />
      <strong>{hour}</strong>
      <img src={`/assets/icon-${player2}.svg`} alt={`${player2}`} />
    </li>
  )
}

export default Game

