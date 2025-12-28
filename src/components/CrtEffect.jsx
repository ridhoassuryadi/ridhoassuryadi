import { useEffect, useState, useCallback } from 'react'
import '../css/CrtEffect.css'

function CrtEffect({ children }) {
  const [showPowerOn, setShowPowerOn] = useState(true)
  const [isPoweredOn, setIsPoweredOn] = useState(true)

  useEffect(() => {
    if (isPoweredOn && showPowerOn) {
      // Remove overlay after animation completes (2s animation)
      const timer = setTimeout(() => {
        setShowPowerOn(false)
      }, 2100)

      return () => clearTimeout(timer)
    }
  }, [isPoweredOn, showPowerOn])

  const handlePowerToggle = useCallback(() => {
    if (isPoweredOn) {
      // Turn off
      setIsPoweredOn(false)
    } else {
      // Turn on - reset and show power on animation
      setShowPowerOn(true)
      setIsPoweredOn(true)
    }
  }, [isPoweredOn])

  return (
    <div className="monitor-wrapper">
      {/* Monitor frame */}
      <div className="monitor-frame">
        {/* Monitor bezel top */}
        <div className="monitor-bezel-top"></div>

        {/* Screen area */}
        <div className="monitor-screen">
          <div className={`crt-container mac-theme ${showPowerOn && isPoweredOn ? 'crt-power-on-active' : ''}`}>
            {isPoweredOn ? (
              <>
                <div className="crt-content">{children}</div>

                {/* CRT overlay effects */}
                <div className="crt-overlay">
                  {/* Scanner - horizontal line moving down */}
                  <div className="crt-scanner"></div>
                  {/* Scanlines + RGB noise */}
                  <div className="crt-scanlines"></div>
                  {/* Vignette - dark edges */}
                  <div className="crt-vignette"></div>
                </div>

                {/* CRT Power-on animation overlay */}
                {showPowerOn && <div className="crt-power-on-overlay"></div>}
              </>
            ) : (
              /* Screen off - black screen */
              <div className="crt-screen-off"></div>
            )}
          </div>
        </div>

        {/* Monitor bezel bottom with logo */}
        <div className="monitor-bezel-bottom">
          <button className={`monitor-logo-btn ${isPoweredOn ? 'powered-on' : ''}`} type="button" aria-label="Power" onClick={handlePowerToggle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="power-gradient-on" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00ff88" />
                  <stop offset="50%" stopColor="#00cc66" />
                  <stop offset="100%" stopColor="#009944" />
                </linearGradient>
                <linearGradient id="power-gradient-off" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#888888" />
                  <stop offset="50%" stopColor="#666666" />
                  <stop offset="100%" stopColor="#444444" />
                </linearGradient>
              </defs>
              <path fillRule="evenodd" clipRule="evenodd" d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V3ZM8.6092 5.8744C9.09211 5.60643 9.26636 4.99771 8.99839 4.5148C8.73042 4.03188 8.12171 3.85763 7.63879 4.1256C4.87453 5.65948 3 8.61014 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.66747 19.1882 5.75928 16.5007 4.20465C16.0227 3.92811 15.4109 4.09147 15.1344 4.56953C14.8579 5.04759 15.0212 5.65932 15.4993 5.93586C17.5942 7.14771 19 9.41027 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 9.3658 6.45462 7.06997 8.6092 5.8744Z" fill={isPoweredOn ? "url(#power-gradient-on)" : "url(#power-gradient-off)"}/>
            </svg>
          </button>
          <div className={`monitor-power-led ${isPoweredOn ? '' : 'off'}`}></div>
        </div>
      </div>
    </div>
  )
}

export default CrtEffect
