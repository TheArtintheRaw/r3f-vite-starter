// useKeyboardControls.js
import { useEffect } from 'react'

const useKeyboard = ({ draggedItem, setDraggedItemRotation, setMultipleMode, setRemoveMode}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (draggedItem !== null && (e.key.toLowerCase() === 'r' || e.keyCode === 82)) {
        setDraggedItemRotation((prevRotation) => (prevRotation + 1) % 8)
      }

      if (e.key.toLowerCase() === 'shift' || e.keyCode === 16) {
        if (e.type === 'keydown') {
          setMultipleMode(true)
        } else if (e.type === 'keyup') {
          setMultipleMode(false)
        }
      }

      if (e.key.toLowerCase() === 'delete' || e.keyCode === 46) {
        if (e.type === 'keydown') {
          setRemoveMode(true)
        } else if (e.type === 'keyup') {
          setRemoveMode(false)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyDown)
    }
  }, [draggedItem, setDraggedItemRotation, setMultipleMode, setRemoveMode])
}

export default useKeyboard
