import React from 'react'
import Player from './Player'
import Loading from './Loading'
import queryString from 'query-string'
import { battle } from '../utils/api'
import { Link } from 'react-router-dom'

class Results extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount() {
    let players = queryString.parse(this.props.location.search)

    battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(results => {
      if (results === null) {
        this.setState({
          error: 'Looks like there was an error. Check that both users exist on Github.',
          loading: false
        })
      } else {
        this.setState({
          error: null,
          winner: results[0],
          loser: results[1],
          loading: false
        })
      }
    })
  }

  render() {
    let error = this.state.error
    let winner = this.state.winner
    let loser = this.state.loser
    let loading = this.state.loading

    if (loading) { return <Loading /> }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to='/battle'>Reset</Link>
        </div>
      )
    }

    return (
      <div className='row'>
        <Player
          label='Winner'
          score={winner.score}
          profile={winner.profile}
        />
        <Player
          label='Loser'
          score={loser.score}
          profile={loser.profile}
        />
      </div>
    )
  }
}

export default Results
