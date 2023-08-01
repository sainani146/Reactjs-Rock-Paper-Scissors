import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {
  AppView,
  ScoreContainer,
  ChoiceText,
  OptionsContainer,
  Option,
  ScoreCard,
  ScoreTitle,
  Score,
  GameView,
  GameIcons,
  GameViewContainer,
  GameResultSection,
  GameUserSection,
  GameUser,
  ResImg,
  GameAgain,
  PopupContainer,
  PopUpBody,
  PopUpImage,
  CloseButton,
  TriggerButton,
} from './styled'

import ChoiceItems from '../ChoiceItems'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  won: 'WON',
  lost: 'LOST',
  draw: 'DRAW',
}

class AppContainer extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
    u: '',
    o: '',
  }

  evaluate = (a, b) => {
    if (a === 'ROCK') {
      if (a === 'ROCK' && b === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.won,
        }))
      } else if (a === b) {
        this.setState({gameStatus: gameStatusConstants.draw})
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    } else if (a === 'PAPER') {
      if (a === 'PAPER' && b === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.won,
        }))
      } else if (a === b) {
        this.setState({gameStatus: gameStatusConstants.draw})
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    } else if (a === 'SCISSORS') {
      if (a === 'SCISSORS' && b === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.won,
        }))
      } else if (a === b) {
        this.setState({gameStatus: gameStatusConstants.draw})
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    }
  }

  onPlayAgain = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  getChoice = a => {
    const {choices} = this.props
    const opponent = Math.floor(Math.random() * 3)
    const b = choices[opponent].id
    this.evaluate(a, b)
    this.setState({u: a, o: b})
  }

  renderGameInProgressView = () => {
    const {choices} = this.props
    return (
      <GameView>
        <GameIcons>
          {choices.map(each => (
            <ChoiceItems
              key={each.id}
              choices={each}
              getChoice={this.getChoice}
            />
          ))}
        </GameIcons>
      </GameView>
    )
  }

  renderGameWonView = () => {
    const {choices} = this.props
    const {u, o} = this.state
    const you = choices.filter(e => e.id === u)[0]
    const opponent = choices.filter(e => e.id === o)[0]

    return (
      <GameResultSection>
        <GameUserSection>
          <GameUser>
            <ScoreTitle>YOU</ScoreTitle>
            <ResImg src={you.imageUrl} alt="your choice" />
          </GameUser>
          <GameUser>
            <ScoreTitle>OPPONENT</ScoreTitle>
            <ResImg src={opponent.imageUrl} alt="opponent choice" />
          </GameUser>
        </GameUserSection>
        <ChoiceText>YOU WON</ChoiceText>
        <GameAgain type="button" onClick={this.onPlayAgain}>
          Play Again
        </GameAgain>
      </GameResultSection>
    )
  }

  renderGameLostView = () => {
    const {choices} = this.props
    const {u, o} = this.state
    const you = choices.filter(e => e.id === u)[0]
    const opponent = choices.filter(e => e.id === o)[0]

    return (
      <GameResultSection>
        <GameUserSection>
          <GameUser>
            <ScoreTitle>YOU</ScoreTitle>
            <ResImg src={you.imageUrl} alt="your choice" />
          </GameUser>
          <GameUser>
            <ScoreTitle>OPPONENT</ScoreTitle>
            <ResImg src={opponent.imageUrl} alt="opponent choice" />
          </GameUser>
        </GameUserSection>
        <ChoiceText>YOU LOSE</ChoiceText>
        <GameAgain type="button" onClick={this.onPlayAgain}>
          Play Again
        </GameAgain>
      </GameResultSection>
    )
  }

  renderGameDrawView = () => {
    const {choices} = this.props
    const {u, o} = this.state
    const you = choices.filter(e => e.id === u)[0]
    const opponent = choices.filter(e => e.id === o)[0]

    return (
      <GameResultSection>
        <GameUserSection>
          <GameUser>
            <ScoreTitle>YOU</ScoreTitle>
            <ResImg src={you.imageUrl} alt="your choice" />
          </GameUser>
          <GameUser>
            <ScoreTitle>OPPONENT</ScoreTitle>
            <ResImg src={opponent.imageUrl} alt="opponent choice" />
          </GameUser>
        </GameUserSection>
        <ChoiceText>IT IS DRAW</ChoiceText>
        <GameAgain type="button" onClick={this.onPlayAgain}>
          Play Again
        </GameAgain>
      </GameResultSection>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state

    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.won:
        return this.renderGameWonView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state

    return (
      <AppView>
        <ScoreContainer>
          <OptionsContainer>
            <Option>
              ROCK
              <br />
              <br />
              PAPER
              <br />
              <br />
              SCISSORS
            </Option>
          </OptionsContainer>
          <ScoreCard>
            <ScoreTitle>Score</ScoreTitle>
            <Score>{score}</Score>
          </ScoreCard>
        </ScoreContainer>

        <GameViewContainer>{this.renderGameView()}</GameViewContainer>

        <PopupContainer>
          <Popup
            modal
            trigger={<TriggerButton type="button">Rules</TriggerButton>}
            closeOnEscape
            window
          >
            {close => (
              <PopUpBody>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
              </PopUpBody>
            )}
          </Popup>
        </PopupContainer>
      </AppView>
    )
  }
}

export default AppContainer
