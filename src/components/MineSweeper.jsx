import { useContext, useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import dead from '../assets/dead-face.png'
import flag from '../assets/flag.png'
import mine from '../assets/minesweeper.png'
import MineSweeperPic from '../assets/minesweepericon.png'
import smile from '../assets/smiley-face.png'
import UseContext from '../Context'
import '../css/MineSweeper.css'
import { useSound } from '../SoundContext'

function MineSweeper() {
  const { playSound, playSoundInterrupt } = useSound()

  const [gameOver, setGameOver] = useState(false)
  const [showFlag, setShowFlag] = useState(false)
  const [firstTimeCount, setFirstTimeCount] = useState(true)
  const [timerMine, setTimerMine] = useState(0)
  const [gameDisable, setGameDisable] = useState(false)
  const [clearTimer, setClearTimer] = useState(null)
  const [ROWS, _setROWS] = useState(10)
  const [COLS, _setCOLS] = useState(10)

  const [MINES, setMINES] = useState(() => {
    const storedLevel = localStorage.getItem('level')
    if (Number(storedLevel) >= 20) {
      return 40
    }
    if (storedLevel) {
      return Number(storedLevel) * 2
    }
    return 2
  })
  const [tempMine, setTempMine] = useState(MINES)

  const {
    setRightClickDefault,
    MineSweeperExpand,
    setMineSweeperExpand,
    StyleHide,
    isTouchDevice,
    handleSetFocusItemTrue,
    inlineStyleExpand,
    inlineStyle,
    deleteTap,
    iconFocusIcon,
  } = useContext(UseContext)

  function handleDragStop(_event, data) {
    const positionX = data.x
    const positionY = data.y
    setMineSweeperExpand((prev) => ({
      ...prev,
      x: positionX,
      y: positionY,
    }))
  }

  useEffect(() => {
    clearInterval(clearTimer)
  }, [gameOver])

  function init() {
    let squares = createBoard(ROWS, COLS)
    squares = randomizeMines(squares, MINES)
    squares = getMinesAround(squares)
    return squares
  }

  const [squares, setSquares] = useState(init())

  /// REVEAL
  const reveal = (e, rowIdx, colIdx) => {
    e.preventDefault()

    if (firstTimeCount) {
      setFirstTimeCount(false)
      const intervalId = setInterval(() => {
        setTimerMine((prev) => prev + 1)
      }, 1000)
      setClearTimer(intervalId)
    }

    if (squares[rowIdx][colIdx].isRevealed || squares[rowIdx][colIdx].isFlagged) {
      return
    }

    if (squares[rowIdx][colIdx].hasBomb) {
      squares[rowIdx][colIdx].isRevealed = true
      setGameOver(true)
      setGameDisable(true)
      setGameDisable(true)
      return
    }

    const stack = [{ rowIdx, colIdx }]

    while (stack.length > 0) {
      const { rowIdx, colIdx } = stack.pop()

      const currentCell = squares[rowIdx][colIdx]
      if (!currentCell.isRevealed) {
        currentCell.isRevealed = true

        if (!currentCell.hasBomb && currentCell.neighborBombs === 0) {
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const newRow = rowIdx + i
              const newCol = colIdx + j
              if (
                newRow >= 0 &&
                newRow < ROWS &&
                newCol >= 0 &&
                newCol < COLS &&
                !squares[newRow][newCol].hasBomb &&
                !squares[newRow][newCol].isRevealed
              ) {
                stack.push({ rowIdx: newRow, colIdx: newCol })
              }
            }
          }
        }
      }
    }
    setSquares([...squares])
  }

  const setFlag = (e, rowIdx, colIdx) => {
    e.preventDefault()

    // Prevent flagging revealed squares
    if (squares[rowIdx][colIdx].isRevealed) return

    // Deep copy the squares to avoid mutating the original state
    const newSquares = squares.map((row, rIdx) =>
      row.map((square, cIdx) =>
        rIdx === rowIdx && cIdx === colIdx ? { ...square, isFlagged: !square.isFlagged } : square
      )
    )

    // Update tempMine count based on the new flag status
    const isFlagged = newSquares[rowIdx][colIdx].isFlagged
    setTempMine(tempMine + (isFlagged ? -1 : 1))

    // Update the squares state
    setSquares(newSquares)
  }

  useEffect(() => {
    const revealed = squares.reduce((acc, row) => {
      acc += row.reduce((acc2, sq) => {
        acc2 += sq.isRevealed ? 1 : 0
        return acc2
      }, 0)
      return acc
    }, 0)

    if (revealed === ROWS * COLS - MINES) {
      clearInterval(clearTimer)
      setGameDisable(true)
      setGameOver(true)
      setShowFlag(true)
      //update level
      let storeLevel = localStorage.getItem('level')
      if (Number(storeLevel) >= 20) {
        return
      }
      if (storeLevel) {
        storeLevel = Number(storeLevel) + 1
        localStorage.setItem('level', storeLevel)
        setMINES(storeLevel * 2)
      } else {
        localStorage.setItem('level', 2)
        setMINES(2 * 2)
      }

      return
    }
  }, [squares])

  const getBackgroundColor = (rowIdx, colIdx) => {
    const square = squares[rowIdx][colIdx]
    if (square.isRevealed && square.hasBomb) {
      return 'red'
    }
    return ''
  }

  function handleNewGame() {
    setSquares(init())
    clearInterval(clearTimer)
    setTimerMine(0)
    setShowFlag(false)
    setGameOver(false)
    setGameDisable(false)
    setGameDisable(false)
    setFirstTimeCount(true)
    setTempMine(MINES)
  }

  return (
    <Draggable
      axis="both"
      handle={'.folder_dragbar-MineSweeper'}
      cancel={'.folder_barbtn-MineSweeper'}
      grid={[1, 1]}
      scale={1}
      disabled={MineSweeperExpand.expand}
      bounds={{ top: 37 }}
      defaultPosition={{
        x: window.innerWidth <= 500 ? 20 : 50,
        y: window.innerWidth <= 500 ? 40 : 120,
      }}
      onStop={(event, data) => {
        handleDragStop(event, data)
        playSoundInterrupt('windowMoveStop')
      }}
      onStart={() => {
        handleSetFocusItemTrue('MineSweeper')
        playSound('windowMoveIdle')
      }}
    >
      <div
        className="folder_folder-MineSweeper"
        onClick={(e) => {
          e.stopPropagation()
          handleSetFocusItemTrue('MineSweeper')
        }}
        onContextMenu={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setRightClickDefault(false)
        }}
        style={MineSweeperExpand.expand ? inlineStyleExpand('MineSweeper') : inlineStyle('MineSweeper')}
      >
        <div
          className="folder_dragbar-MineSweeper"
          // onDoubleClick={handleExpandStateToggle}
          // onTouchStart={handleExpandStateToggleMobile}
        >
          <div className="folder_barname-MineSweeper">
            <img src={MineSweeperPic} alt="MineSweeper" />
            <span>Mine Sweeper</span>
          </div>
          <div className="folder_barbtn-MineSweeper">
            <div
              onClick={
                !isTouchDevice
                  ? (e) => {
                      e.stopPropagation()
                      playSound('windowCollapse')
                      setMineSweeperExpand((prev) => ({ ...prev, hide: true, focusItem: false }))
                      StyleHide('MineSweeper')
                    }
                  : undefined
              }
              onTouchEnd={(e) => {
                e.stopPropagation()
                playSound('windowCollapse')
                setMineSweeperExpand((prev) => ({ ...prev, hide: true, focusItem: false }))
                StyleHide('MineSweeper')
              }}
              onTouchStart={(e) => e.stopPropagation()}
            >
              <p className="dash-MineSweeper"></p>
            </div>
            <div>
              <div className={`expand-MineSweeper ${MineSweeperExpand.expand ? 'full' : ''}`}></div>
              {MineSweeperExpand.expand ? <div className="expand_2-MineSweeper"></div> : null}
            </div>
            <div>
              <p
                className="x-MineSweeper"
                onClick={
                  !isTouchDevice
                    ? () => {
                        playSound('windowClose')
                        deleteTap('MineSweeper')
                        handleNewGame()
                      }
                    : undefined
                }
                onTouchEnd={() => {
                  playSound('windowClose')
                  deleteTap('MineSweeper')
                  handleNewGame()
                }}
              >
                ×
              </p>
            </div>
          </div>
        </div>

        <div className="file_edit_container-MineSweeper">
          <p>
            Game<span style={{ left: '-37px' }}>_</span>
          </p>
          <p>
            Help<span style={{ left: '-28px' }}>_</span>
          </p>
        </div>
        <div
          className="folder_content-MineSweeper"
          onClick={() => iconFocusIcon('')}
          style={MineSweeperExpand.expand ? { height: 'calc(100svh - 100px)' } : {}}
        >
          <div className="timer_mine_container">
            <div className="count">
              <p>{tempMine < 10 && tempMine > -1 ? '00' + tempMine : tempMine < 0 ? tempMine : '0' + tempMine}</p>
            </div>
            <div className="face_container">
              <img src={gameOver && !showFlag ? dead : smile} alt="" onClick={handleNewGame} />
            </div>
            <div className="count">
              <p>
                {timerMine < 10
                  ? '00' + timerMine
                  : timerMine < 100
                    ? '0' + timerMine
                    : timerMine > 999
                      ? 999
                      : timerMine}
              </p>
            </div>
          </div>
          <div className="border_row">
            {squares.map((row, rowIdx) => (
              <div key={rowIdx} className="row">
                {row.map((square, colIdx) => (
                  <div
                    key={colIdx}
                    style={{
                      backgroundColor: getBackgroundColor(rowIdx, colIdx),
                      pointerEvents: gameDisable ? 'none' : 'auto',
                    }}
                    className={`square square--${square.isRevealed ? 'revealed' : undefined}`}
                    data-value={square.neighborBombs}
                    onClick={!isTouchDevice ? (e) => reveal(e, rowIdx, colIdx) : undefined}
                    onContextMenu={(e) => setFlag(e, rowIdx, colIdx)}
                    onTouchStart={(e) => {
                      reveal(e, rowIdx, colIdx)
                    }}
                  >
                    {square.isRevealed && square.neighborBombs !== 0 ? square.neighborBombs : ''}
                    {square.isFlagged && !square.isRevealed && !gameOver ? '🚩' : ''}
                    {gameOver && squares[rowIdx][colIdx].hasBomb ? (
                      <img
                        src={showFlag && squares[rowIdx][colIdx].hasBomb ? flag : mine}
                        alt="mine"
                        className="mine_reveal"
                      />
                    ) : null}
                    {gameOver && square.isFlagged && !squares[rowIdx][colIdx].hasBomb && !square.isRevealed ? (
                      <span>🚩</span>
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Draggable>
  )
}

// Helper functions for Minesweeper game
const createBoard = (rows, cols) => {
  return new Array(rows).fill(null).map(() =>
    new Array(cols).fill(null).map(() => ({
      isRevealed: false,
      isFlagged: false,
      hasBomb: false,
      neighborBombs: 0,
    }))
  )
}

const randomizeMines = (squares, mines) => {
  const rows = squares.length
  const cols = squares[0].length

  const distinctNumbers = new Set()

  while (distinctNumbers.size < mines) {
    const number = Math.floor(Math.random() * rows * cols)
    distinctNumbers.add(number)
  }

  ;[...distinctNumbers].forEach((number) => {
    const row = Math.floor(number / cols)
    const col = number % cols
    squares[row][col].hasBomb = true
  })

  return squares
}

const getMinesAround = (squares) => {
  const rows = squares.length
  const cols = squares[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (squares[i][j].hasBomb) continue

      let bombs = 0

      for (let i_offset = -1; i_offset <= 1; i_offset++) {
        for (let j_offset = -1; j_offset <= 1; j_offset++) {
          const row = i + i_offset
          const col = j + j_offset

          if (row >= 0 && row < rows && col >= 0 && col < cols && squares[row][col].hasBomb) {
            bombs++
          }
        }
      }

      squares[i][j].neighborBombs = bombs
    }
  }

  return squares
}

export default MineSweeper
