import { motion } from 'framer-motion'
import { useContext } from 'react'
import Draggable from 'react-draggable'
import UseContext from '../Context'
import '../css/Patch.css'
import { useSound } from '../SoundContext'

function Patch() {
  const { playSound, playSoundInterrupt } = useSound()

  const {
    PatchExpand,
    setPatchExpand,
    setResumeFileExpand,
    StyleHide,
    isTouchDevice,
    handleSetFocusItemTrue,
    inlineStyleExpand,
    inlineStyle,
    deleteTap,
    imageMapping,
  } = useContext(UseContext)

  const openResume = (e) => {
    e.preventDefault()
    setResumeFileExpand((prev) => ({ ...prev, show: true, hide: false }))
    handleSetFocusItemTrue('ResumeFile')
    playSound('windowOpen')
  }

  function handleDragStop(_event, data) {
    const positionX = data.x
    const positionY = data.y
    setPatchExpand((prev) => ({
      ...prev,
      x: positionX,
      y: positionY,
    }))
  }

  return (
    <Draggable
      axis="both"
      handle={'.folder_dragbar-resumefile'}
      cancel={'.folder_barbtn-resumefile'}
      grid={[1, 1]}
      scale={1}
      disabled={PatchExpand.expand}
      bounds={{ top: 37 }}
      defaultPosition={{
        x: window.innerWidth <= 500 ? 40 : 80,
        y: window.innerWidth <= 500 ? 100 : 90,
      }}
      onStop={(event, data) => {
        handleDragStop(event, data)
        playSoundInterrupt('windowMoveStop')
      }}
      onStart={() => {
        handleSetFocusItemTrue('Patch')
        playSound('windowMoveIdle')
      }}
    >
      <div
        className="folder_folder-resumefile"
        onClick={(e) => {
          e.stopPropagation()
          handleSetFocusItemTrue('Patch')
        }}
        style={{
          height: window.innerHeight <= 700 ? '80%' : '320px',
          width: '280px',
          resize: 'none',
          ...(PatchExpand.expand ? inlineStyleExpand('Patch') : inlineStyle('Patch')),
        }}
      >
        <div className="folder_dragbar-resumefile">
          <div className="folder_barname-resumefile">
            <img src={imageMapping('Patch')} alt="About" />
            <span>About Me</span>
          </div>
          <div className="folder_barbtn-resumefile">
            <div
              onClick={
                !isTouchDevice
                  ? (e) => {
                      e.stopPropagation()
                      playSound('windowCollapse')
                      setPatchExpand((prev) => ({ ...prev, hide: true, focusItem: false }))
                      StyleHide('Patch')
                    }
                  : undefined
              }
              onTouchEnd={(e) => {
                e.stopPropagation()
                playSound('windowCollapse')
                setPatchExpand((prev) => ({ ...prev, hide: true, focusItem: false }))
                StyleHide('Patch')
              }}
              onTouchStart={(e) => e.stopPropagation()}
            >
              <p className="dash-resumefile"></p>
            </div>
            <div>
              <motion.div
                className={`expand-resumefile ${PatchExpand.expand ? 'full' : ''}`}
                style={{ borderColor: 'grey' }}
              ></motion.div>
              {PatchExpand.expand ? <div className="expand_2-resumefile"></div> : null}
            </div>
            <div>
              <p
                className="x-resumefile"
                onClick={
                  !isTouchDevice
                    ? () => {
                        playSound('windowClose')
                        deleteTap('Patch')
                      }
                    : undefined
                }
                onTouchEnd={() => {
                  playSound('windowClose')
                  deleteTap('Patch')
                }}
              >
                ×
              </p>
            </div>
          </div>
        </div>

        <div className="content_container">
          <div className="about_content">
            <div className="about_header">
              <h1>Ridho Assuryadi</h1>
              <p>Creative Thinker</p>
              <p>Indonesia</p>
            </div>

            <div className="about_divider"></div>

            <div className="about_section">
              <h2>Find me on:</h2>
              <div className="about_links">
                <a href="https://github.com/ridhoassuryadi" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/ridhoassuryadi" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="mailto:ridho@assuryadi.com">
                  Email
                </a>
              </div>
            </div>

            <div className="about_section">
              <h2>And of course:</h2>
              <div className="about_links">
                <a
                  href="#"
                  onClick={openResume}
                >
                  Resume
                </a>
                <span>Portfolio (You're looking at it!)</span>
              </div>
            </div>

            <div className="about_footer">
              This website was built with React and styled to look like Windows 95
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  )
}

export default Patch
