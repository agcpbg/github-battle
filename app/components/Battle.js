import React from 'react'
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview'
import { Link } from 'react-router-dom'

class Battle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(id, username) {
    this.setState({
      [`${id}Name`]: username,
      [`${id}Image`]: 'https://github.com/' + username + '.png?size=200'
    })
  }

  handleReset(id) {
    this.setState({
      [`${id}Name`]: '',
      [`${id}Image`]: null
    })
  }

  render() {
    let playerOneName = this.state.playerOneName
    let playerTwoName = this.state.playerTwoName
    let playerOneImage = this.state.playerOneImage
    let playerTwoImage = this.state.playerTwoImage
    let match = this.props.match

    return (
      <div>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit}
            />}

          {playerOneImage !== null &&
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}>
              <button
                className='reset'
                onClick={() => this.handleReset('playerOne')}>
                  Reset
              </button>
            </PlayerPreview>}

          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}
            />}

          {playerTwoImage !== null &&
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}>
              <button
                className='reset'
                onClick={() => this.handleReset('playerTwo')}>
                  Reset
              </button>
            </PlayerPreview>}
        </div>

        {playerOneImage && playerTwoImage &&
          <Link
            className='button'
            to={{
              pathname: match.url + '/results',
              search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
            }}>
              Battle
          </Link>}
      </div>
    )
  }
}

export default Battle
