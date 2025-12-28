import { motion } from 'framer-motion'
import { useContext, useState } from 'react'
import Draggable from 'react-draggable'
import resumefile from '../assets/resume.png'
import resumePDF from '../assets/Full-Stack.pdf'
import UseContext from '../Context'
import '../css/ResumeFile.css'
import { useSound } from '../SoundContext'

function ResumeFile() {
  const { playSound, playSoundInterrupt } = useSound()

  const {
    ResumeFileExpand,
    setResumeFileExpand,
    lastTapTime,
    setLastTapTime,
    StyleHide,
    isTouchDevice,
    handleSetFocusItemTrue,
    inlineStyleExpand,
    inlineStyle,
    deleteTap,
  } = useContext(UseContext)

  const [_downloadBox, setDownloadBox] = useState(false)

  function handleDragStop(_event, data) {
    const positionX = data.x
    const positionY = data.y
    setResumeFileExpand((prev) => ({
      ...prev,
      x: positionX,
      y: positionY,
    }))
  }

  function handleExpandStateToggle() {
    setResumeFileExpand((prevState) => ({
      ...prevState,
      expand: !prevState.expand,
    }))
  }

  function handleExpandStateToggleMobile() {
    const now = Date.now()
    if (now - lastTapTime < 300) {
      setResumeFileExpand((prevState) => ({
        ...prevState,
        expand: !prevState.expand,
      }))
    }
    setLastTapTime(now)
  }

  return (
    <Draggable
      axis="both"
      handle={'.folder_dragbar-resumefile'}
      cancel={'.folder_barbtn-resumefile'}
      grid={[1, 1]}
      scale={1}
      disabled={ResumeFileExpand.expand}
      bounds={{ top: 37 }}
      defaultPosition={{
        x: window.innerWidth <= 500 ? 5 : 80,
        y: window.innerWidth <= 500 ? 100 : 90,
      }}
      onStop={(event, data) => {
        handleDragStop(event, data)
        playSoundInterrupt('windowMoveStop')
      }}
      onStart={() => {
        handleSetFocusItemTrue('ResumeFile')
        playSound('windowMoveIdle')
      }}
    >
      <div
        className="folder_folder-resumefile"
        onClick={(e) => {
          e.stopPropagation()
          handleSetFocusItemTrue('ResumeFile')
        }}
        style={ResumeFileExpand.expand ? inlineStyleExpand('ResumeFile') : inlineStyle('ResumeFile')}
      >
        <div
          className="folder_dragbar-resumefile"
          onDoubleClick={handleExpandStateToggle}
          onTouchStart={handleExpandStateToggleMobile}
        >
          <div className="folder_barname-resumefile">
            <img src={resumefile} alt="resumefile" />
            <span>Resume</span>
          </div>
          <div className="folder_barbtn-resumefile">
            <div
              onClick={
                !isTouchDevice
                  ? (e) => {
                      e.stopPropagation()
                      playSound('windowCollapse')
                      setResumeFileExpand((prev) => ({ ...prev, hide: true, focusItem: false }))
                      StyleHide('ResumeFile')
                    }
                  : undefined
              }
              onTouchEnd={(e) => {
                e.stopPropagation()
                playSound('windowCollapse')
                setResumeFileExpand((prev) => ({ ...prev, hide: true, focusItem: false }))
                StyleHide('ResumeFile')
              }}
              onTouchStart={(e) => e.stopPropagation()}
            >
              <p className="dash-resumefile"></p>
            </div>
            <div
              onClick={!isTouchDevice ? () => handleExpandStateToggle() : undefined}
              onTouchEnd={handleExpandStateToggle}
            >
              <motion.div className={`expand-resumefile ${ResumeFileExpand.expand ? 'full' : ''}`}></motion.div>
              {ResumeFileExpand.expand ? <div className="expand_2-resumefile"></div> : null}
            </div>
            <div>
              <p
                className="x-resumefile"
                onClick={
                  !isTouchDevice
                    ? () => {
                        playSound('windowClose')
                        deleteTap('ResumeFile')
                        setDownloadBox(false)
                      }
                    : undefined
                }
                onTouchEnd={() => {
                  playSound('windowClose')
                  deleteTap('ResumeFile')
                  setDownloadBox(false)
                }}
              >
                ×
              </p>
            </div>
          </div>
        </div>

        <div
          className="folder_content-resumefile"
          style={
            ResumeFileExpand.expand
              ? { height: 'calc(100svh - 72px)' } /// fullscreen btm nav
              : {}
          }
        >
          {ResumeFileExpand.show ? (
            <iframe
              onClick={() => setDownloadBox(false)}
              src={resumePDF}
              frameBorder="0"
            ></iframe>
          ) : null}
        </div>
      </div>
    </Draggable>
  )
}

export default ResumeFile
