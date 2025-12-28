import { Howl, Howler } from 'howler'
import { createContext, useCallback, useContext, useEffect, useRef } from 'react'

// Sound file paths
const SOUNDS = {
  buttonDown: '/sounds/ClassicyButtonClickDown.mp3',
  buttonUp: '/sounds/ClassicyButtonClickUp.mp3',
  click: '/sounds/ClassicyClick.mp3',
  windowOpen: '/sounds/ClassicyWindowOpen.mp3',
  windowClose: '/sounds/ClassicyWindowClose.mp3',
  windowFocus: '/sounds/ClassicyWindowFocus.mp3',
  windowCollapse: '/sounds/ClassicyWindowCollapse.mp3',
  windowExpand: '/sounds/ClassicyWindowExpand.mp3',
  windowMoveIdle: '/sounds/ClassicyWindowMoveIdle.mp3',
  windowMoveMoving: '/sounds/ClassicyWindowMoveMoving.mp3',
  windowMoveStop: '/sounds/ClassicyWindowMoveStop.mp3',
  windowResizeIdle: '/sounds/ClassicyWindowResizeIdle.mp3',
  windowResizeResizing: '/sounds/ClassicyWindowResizeResizing.mp3',
  windowResizeStop: '/sounds/ClassicyWindowResizeStop.mp3',
  windowControlDown: '/sounds/ClassicyWindowControlClickDown.mp3',
  windowControlUp: '/sounds/ClassicyWindowControlClickUp.mp3',
  windowZoomMax: '/sounds/ClassicyWindowZoomMaximize.mp3',
  windowZoomMin: '/sounds/ClassicyWindowZoomMinimize.mp3',
  menuOpen: '/sounds/ClassicyMenuOpen.mp3',
  menuClose: '/sounds/ClassicyMenuClose.mp3',
  menuItemHover: '/sounds/ClassicyMenuItemHover.mp3',
  menuItemClick: '/sounds/ClassicyMenuItemClick.mp3',
}

const SoundContext = createContext(null)

export function SoundProvider({ children }) {
  const soundsRef = useRef({})
  const currentlyPlayingRef = useRef(null)
  const unlockedRef = useRef(false)

  // Lazy load sounds - defined first so it can be used in useEffects
  const getSound = useCallback((soundName) => {
    if (!soundsRef.current[soundName] && SOUNDS[soundName]) {
      soundsRef.current[soundName] = new Howl({
        src: [SOUNDS[soundName]],
        volume: 1.0,
        preload: true,
        html5: true,
        onplayerror: () => Howler.ctx?.resume(),
      })
    }
    return soundsRef.current[soundName]
  }, [])

  // Play a sound
  const playSound = useCallback(
    (soundName) => {
      if (Howler.ctx && Howler.ctx.state === 'suspended') {
        Howler.ctx.resume()
      }
      const sound = getSound(soundName)
      if (sound) {
        sound.play()
      }
    },
    [getSound]
  )

  // Play sound and interrupt any currently playing
  const playSoundInterrupt = useCallback(
    (soundName) => {
      // Stop current sound if playing
      if (currentlyPlayingRef.current) {
        currentlyPlayingRef.current.stop()
      }

      const sound = getSound(soundName)
      if (sound) {
        currentlyPlayingRef.current = sound
        sound.play()
      }
    },
    [getSound]
  )

  // Stop all sounds
  const stopAllSounds = useCallback(() => {
    Object.values(soundsRef.current).forEach((sound) => {
      if (sound?.playing()) {
        sound.stop()
      }
    })
  }, [])

  // Unlock audio context on first user interaction
  useEffect(() => {
    const unlock = () => {
      if (!unlockedRef.current) {
        // Create and play a silent sound to unlock audio
        const silentSound = new Howl({
          src: [
            'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAABhgC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7v////////////////////////////////AAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAABhgC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7v////////////////////////////////AAAAAAAAAAAA',
          ],
          volume: 0,
          onend: () => {
            unlockedRef.current = true
          },
        })
        silentSound.play()
      }
    }

    document.addEventListener('click', unlock, { once: true })
    document.addEventListener('touchstart', unlock, { once: true })
    document.addEventListener('keydown', unlock, { once: true })

    return () => {
      document.removeEventListener('click', unlock)
      document.removeEventListener('touchstart', unlock)
      document.removeEventListener('keydown', unlock)
    }
  }, [])

  // Global click sound for buttons and interactive elements
  useEffect(() => {
    const isClickableElement = (element) => {
      if (!element) return false
      const tagName = element.tagName?.toLowerCase()
      const clickableTags = ['button', 'a', 'input', 'select']
      const clickableClasses = [
        'btn',
        'button',
        'clickable',
        'bio_btn',
        'folder_barbtn',
        'start_item',
        'sub_start_item',
        'folder_select_btn',
        'undo_btn',
        'file_tap_container',
        'start_icon',
        'icon',
      ]
      const clickableRoles = ['button', 'link', 'menuitem', 'tab', 'option']

      // Check tag name
      if (clickableTags.includes(tagName)) return true

      // Check role attribute
      if (clickableRoles.includes(element.getAttribute('role'))) return true

      // Check classes
      if (element.classList) {
        for (const cls of clickableClasses) {
          if (element.classList.contains(cls)) return true
        }
      }

      // Check if element has cursor pointer style
      const style = window.getComputedStyle(element)
      if (style.cursor === 'pointer') return true

      return false
    }

    const findClickableParent = (element, maxDepth = 5) => {
      let current = element
      let depth = 0
      while (current && depth < maxDepth) {
        if (isClickableElement(current)) return current
        current = current.parentElement
        depth++
      }
      return null
    }

    const handleMouseDown = (e) => {
      const clickable = findClickableParent(e.target)
      if (clickable) {
        const sound = getSound('buttonDown')
        if (sound) sound.play()
      }
    }

    const handleMouseUp = (e) => {
      const clickable = findClickableParent(e.target)
      if (clickable) {
        const sound = getSound('buttonUp')
        if (sound) sound.play()
      }
    }

    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchstart', handleMouseDown)
    document.addEventListener('touchend', handleMouseUp)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchstart', handleMouseDown)
      document.removeEventListener('touchend', handleMouseUp)
    }
  }, [getSound])

  const value = {
    playSound,
    playSoundInterrupt,
    stopAllSounds,
  }

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}

export function useSound() {
  const context = useContext(SoundContext)
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider')
  }
  return context
}

export default SoundContext
