import React, {
  useState,
  useEffect,
  useRef,
} from 'react'
import styled from 'styled-components'

function Hexagon() {
  const [ hexSize, setHexSize ] = useState(50)
  const [ hexOrigin, setHexOrigin ] = useState({ x: 100, y: 130 })
  const [ canvasSize, setCanvasSize ] = useState({ canvasWidth: 800, canvasHeight: 600 })

  const canvasGame = useRef(null)

  const getHexCornerCord = (center, i) => {
    let angleDeg = 60 * i -30
    let angleRad = Math.PI / 180 * angleDeg
    let x = center.x + hexSize * Math.cos(angleRad)
    let y = center.y + hexSize * Math.sin(angleRad)
    return {
      x,
      y,
    }
  }

  const drawLine = (canvasId, start, end) => {
    const ctx = canvasId.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.stroke()
    ctx.closePath()
  }

  const drawHex = (canvasId, center) => {
    for (let i = 0; i <= 5; i++) {
      let start = getHexCornerCord(center, i)
      let end = getHexCornerCord(center, i + 1)
      drawLine(canvasId, { x: start.x, y: start.y }, { x: end.x, y: end.y })
    }
  }

  useEffect(() => {
    const canvas = canvasGame.current

    drawHex(canvas, { x: 50, y: 50 })
  })

  return (
    <SGameBoard ref={canvasGame} width={canvasSize.width} height={canvasSize.height} ></SGameBoard>
  )
}

export default Hexagon

const SGameBoard = styled.canvas`
  border: 1px solid black;
`