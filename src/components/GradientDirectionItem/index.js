// Write your code here
import {ColorBtn, List} from './styledComponents'

const ChooseAligin = props => {
  const {details, click} = props
  const {value, displayText} = details

  const Opacity = () => {
    click(value)
  }

  return (
    <List>
      <ColorBtn onClick={Opacity}>{displayText}</ColorBtn>
    </List>
  )
}

export default ChooseAligin
