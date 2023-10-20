import {Component} from 'react'

import ChooseAligin from '../GradientDirectionItem/index'

import {
  MainBg,
  Heading,
  Para,
  ColorInput,
  Button,
  Uorder,
  colPC,
  RowColors,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {color1: '#8ae323', color2: '#014f7b', align1: 'top', tog: false}

  setvalue = data => {
    this.setState({align1: data})
  }

  setColor1 = event => {
    this.setState({color1: event.target.value})
  }

  setColor2 = event => {
    this.setState({color2: event.target.value})
  }

  fetch = () => {
    this.setColor1()
    this.setColor2()
    this.setvalue()
  }

  render() {
    const {color1, color2, align1, tog} = this.state

    return (
      <MainBg
        toogle
        align1={align1}
        color1={color1}
        color2={color2}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <Uorder>
          {gradientDirectionsList.map(each => (
            <ChooseAligin
              details={each}
              click={this.setvalue}
              key={each.directionId}
            />
          ))}
        </Uorder>
        <Para>Pick Colors</Para>
        <RowColors>
          <colPC>
            <Para>{color1}</Para>
            <ColorInput value={color1} type="color" onChange={this.setColor1} />
          </colPC>
          <colPC>
            <Para>{color1}</Para>
            <ColorInput value={color2} type="color" onChange={this.setColor2} />
          </colPC>
        </RowColors>
        <Button type="button" onClick={this.fetch}>
          Generate
        </Button>
      </MainBg>
    )
  }
}

export default GradientGenerator
