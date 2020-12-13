import React, {
  useState,
  useEffect,
  useRef,
} from 'react'
import styled from 'styled-components'
import Hex from '../Hex'

function GameBoard() {
  const [ hexSize, setHexSize ] = useState(50)
  const [ hexOrigin, setHexOrigin ] = useState({ x: 100, y: 130 })
  // const [ canvasSize, setCanvasSize ] = useState({ canvasWidth: 800, canvasHeight: 600 })
  const [hexes, setHexes] = useState([])
  // const canvasGame = useRef(null)

  const round = (num, precision) => {
    num = parseFloat(num)
    if (!precision) return num
    return (Math.round(num / precision) * precision)
  }

  const getHexCornerCord = (center, i) => {
    let angleDeg = 60 * i - 30
    let angleRad = Math.PI / 180 * angleDeg
    let x = Math.round((center.x + hexSize * Math.cos(angleRad)) * 10) / 10
    let y = Math.round((center.y + hexSize * Math.sin(angleRad)) * 10) / 10
    return {
      x,
      y,
    }
  }

  // const drawLine = (canvasId, start, end) => {
  //   const ctx = canvasId.getContext('2d')
  //   ctx.beginPath()
  //   ctx.moveTo(start.x, start.y)
  //   ctx.lineTo(end.x, end.y)
  //   ctx.stroke()
  //   ctx.closePath()
  // }

  const drawHex = (center) => {
    let hexPoints = ""
    for (let i = 0; i < 5; i++) {
      // let start = getHexCornerCord(center, i)
      // let end = getHexCornerCord(center, i + 1)
      // let hexString = `${start.x},${start.y}`
      // if(i = 0) {
      //   hexPoints = hexString
      // } else {
      //   hexPoints = `${hexPoints} ${hexString}`
      // }
      // console.log(hexString)
      console.log(i)
    }
    console.log(hexes)
  }

  // useEffect(() => {
  //   const canvas = canvasGame.current

  //   // drawHex(canvas, { x: 50, y: 50 })
  //   let centerline = 400
  //   let topRowX = 125
  //   let rows = [ 3, 4, 5, 4, 3]
  //   for (let i = 0; i < rows.length; i++) {
  //     let isCentered = i % 2
  //     let y = topRowX + i * 85
  //     if (isCentered === 0) {
  //       drawHex(canvas, {
  //         x: centerline, 
  //         y,
  //       })
  //     }
  //     let numSides = Math.floor(rows[i] / 2)
  //     for (let j = 1; j < numSides + 1; j++) {
  //       if (isCentered === 1) {
  //         drawHex(canvas, {
  //           x: centerline + hexSize * 2 * j - hexSize,
  //           y,
  //         })
  //         drawHex(canvas, {
  //           x: centerline + hexSize * 2 * -j + hexSize,
  //           y,
  //         })
  //       } else {
  //         drawHex(canvas, {
  //           x: centerline + hexSize * 2 * j,
  //           y,
  //         })
  //         drawHex(canvas, {
  //           x: centerline + hexSize * 2 * -j,
  //           y,
  //         })
  //       }
  //     }
  //   }
  // }, [])

  // useEffect(() => {
  //   drawHex(hexOrigin)
  //   console.log('Hello')
  // }, [hexSize])
  useEffect(() => {
    console.log('Hello')
    drawHex(hexOrigin)
  }, [])

  const hexComponent = hexes.length > 0 ? hexes.map((hex) => (
    console.log(hex)
  )) : null

  return (
    <div>
      <Hex />
    </div>
  )
}

export default GameBoard

const SGameBoard = styled.svg`
  border: 1px solid black;
`