import { useState, useMemo } from 'react'

function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className = '',
  squaresClassName = '',
  ...props
}) {
  const [horizontal, vertical] = squares
  const [hoveredSquare, setHoveredSquare] = useState(null)

  const gridSquares = useMemo(() => {
    return Array.from({ length: horizontal * vertical }).map((_, index) => {
      const x = (index % horizontal) * width
      const y = Math.floor(index / horizontal) * height
      return { index, x, y }
    })
  }, [horizontal, vertical, width, height])

  return (
    <svg
      width={width * horizontal}
      height={height * vertical}
      className={`interactive-grid-pattern ${className}`}
      {...props}
    >
      {gridSquares.map(({ index, x, y }) => (
        <rect
          key={index}
          x={x}
          y={y}
          width={width}
          height={height}
          className={`grid-square ${hoveredSquare === index ? 'hovered' : ''} ${squaresClassName}`}
          onMouseEnter={() => setHoveredSquare(index)}
          onMouseLeave={() => setHoveredSquare(null)}
        />
      ))}
    </svg>
  )
}

export default InteractiveGridPattern
