import React from 'react'
import styled from 'styled-components'

function Hex(cords, land, production) {
  return (
    <svg viewBox="0 0 100 100">
      <g fill="black" stroke="black">
        <path d="M 20,20 M 10,10 h 10
      m  0,10 h 10
      m  0,10 h 10
      M 40,20 h 10
      m  0,10 h 10
      m  0,10 h 10
      m  0,10 h 10
      M 50,50 h 10
      m-20,10 h 10
      m-20,10 h 10
      m-20,10 h 10" />
      </g>
    </svg>
  )
}

export default Hex

const SHex = styled.polygon``
// fill: ${props => props.land}