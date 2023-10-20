// Style your elements here
import styled from 'styled-components'

export const MainBg = styled.div`
  background-image: ${props =>
    props.toogle
      ? `linear-gradient(${props.align1}, ${props.color1}, ${props.color2})`
      : 'none'};

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  text-align: center;
`

export const Heading = styled.h1`
  color: #fff;
`

export const Para = styled.p`
  color: #fff;
`

export const ColorInput = styled.input`
  border: none;
  height: 40px;
  width: 100px;
  margin: 20px;
  border-radius: 6px;
`

export const Button = styled.button`
  border: none;
  height: 30px;
  background-color: #00c9b7;
  padding: 5px;
  width: 100px;
  border-radius: 6px;
  text-align: center;
`
export const Uorder = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

export const RowColors = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`
export const colPC = styled.div`
  display: flex;
  flex-direction: column;
`
