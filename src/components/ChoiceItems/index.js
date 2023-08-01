import {ChoiceButton, ChoiceImg} from './styled'

const ChoiceItems = props => {
  const {choices, getChoice} = props
  const {imageUrl, id} = choices

  const onChoice = () => {
    getChoice(id)
  }

  return (
    <>
      <ChoiceButton
        type="button"
        onClick={onChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <ChoiceImg src={imageUrl} alt={id} />
      </ChoiceButton>
    </>
  )
}

export default ChoiceItems
