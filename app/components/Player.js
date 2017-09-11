import React from 'react'
import PlayerPreview from './PlayerPreview'
import Profile from './Profile'
import PropTypes from 'prop-types'

const Player = props => {
  return (
    <div>
     <h1 className='header'>{props.label}</h1>
     <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
     <Profile info={props.profile}/>
    </div>
  )
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
}

export default Player
