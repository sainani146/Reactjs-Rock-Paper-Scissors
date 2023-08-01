import Styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const AppView = Styled.div`
  background-color: #223a5f;
  padding: 15px;
  height: fit-content;
`
export const ScoreContainer = Styled.div`
    border: 1px solid #ffffff;
    border-radius: 8px;
    padding: 8px;
    font-family: "bree serif";
    display: flex;
    justify-content: space-between;
    margin: 8px;
    padding-left: 20px;
    padding-right: 20px;
    min-width: 300px;
    margin-bottom: 20px;
`

export const TextContainer = Styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ChoiceText = Styled.p`
    font-family: 'roboto';
    font-size: 22px;
    color: #ffffff;
`
export const Option = Styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #ffffff;
`

export const OptionsContainer = Styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreCard = Styled.div`
    display: flex;
    flex-direction:  column;
    align-items: center;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    width: 30%;
    height: 180px;
`

export const ScoreTitle = Styled.p`
    color: #223a5f;
    font-size: 25px;
`

export const Score = Styled.p`
    color: #223a5f;
    font-family: "Roboto";
    font-size: 35px;
    font-weight: 800;
`
export const GameView = Styled.div`
    display: flex;
    justify-content: center;
    `
export const GameIcons = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 300px;
    min-width: 300px;
`
export const GameViewContainer = Styled.div`
    height: 400px;
    background-color: transparent;
    
`
export const GameResultSection = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const GameUserSection = Styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
`
export const GameUser = Styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResImg = Styled.img`
    width: 150px;
    height: 150px;
`
export const GameAgain = Styled.button`
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: #ffffff;
    color: #223a5f;
    padding: 8px;
    margin-top: 0px;
    font-size: 20px;
    width: 20%;
`
export const TriggerButton = Styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const CloseButton = Styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`
export const PopUpImage = Styled.img`
  align-self: center;
  width: 100%;
  
`
export const PopUpBody = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`
