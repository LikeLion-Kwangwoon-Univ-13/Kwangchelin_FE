import { useCallback, useEffect, useRef, useState } from 'react'

const ITEM_HEIGHT = 50
const VISIBLE_COUNT = 5
const SCROLL_SPEED = 20
const ROLL_DURATION = 1000
const CENTER_INDEX = Math.floor(VISIBLE_COUNT / 2)

export const useRouletteSpin = ({ items, onSelect }) => {
  const totalHeight = items.length * ITEM_HEIGHT

  const [isRolling, setIsRolling] = useState(false)
  const [renderPosition, setRenderPosition] = useState(0)

  const animationRef = useRef(null)
  const startTimeRef = useRef(0)
  const targetIndexRef = useRef(null)
  const positionRef = useRef(0)

  const start = useCallback(() => {
    if (isRolling || items.length === 0) return

    const randomIndex = Math.floor(Math.random() * items.length)
    targetIndexRef.current = randomIndex
    startTimeRef.current = performance.now()
    setIsRolling(true)
  }, [isRolling, items])

  const stop = useCallback(() => {
    cancelAnimationFrame(animationRef.current)

    const targetPosition =
      (Math.floor(positionRef.current / totalHeight) + 1) * totalHeight +
      targetIndexRef.current * ITEM_HEIGHT -
      CENTER_INDEX * ITEM_HEIGHT +
      ITEM_HEIGHT * 2

    positionRef.current = targetPosition
    setRenderPosition(positionRef.current)
    setIsRolling(false)

    onSelect(items[targetIndexRef.current])
  }, [items, totalHeight, onSelect])

  useEffect(() => {
    if (!isRolling) return

    const roll = (now) => {
      const elapsed = now - startTimeRef.current

      positionRef.current += SCROLL_SPEED

      if (elapsed >= ROLL_DURATION) {
        stop()
        return
      }

      setRenderPosition(positionRef.current)

      animationRef.current = requestAnimationFrame(roll)
    }

    animationRef.current = requestAnimationFrame(roll)

    return () => cancelAnimationFrame(animationRef.current)
  }, [isRolling, stop])

  const wrappedPosition =
    ((renderPosition % totalHeight) + totalHeight - 2 * ITEM_HEIGHT) % totalHeight

  return {
    isRolling,
    wrappedPosition,
    start,
  }
}
