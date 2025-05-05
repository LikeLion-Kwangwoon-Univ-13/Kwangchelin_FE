import { useCallback, useEffect, useRef, useState } from 'react'

const items = ['푸른스시', '하이레', '카츠백', '바다회', '김밥천국', '스시로']

const ITEM_HEIGHT = 50
const VISIBLE_COUNT = 5
const SCROLL_SPEED = 20
const ROLL_DURATION = 1000
const CENTER_INDEX = Math.floor(VISIBLE_COUNT / 2)

export const useSlotRoulette = (openModal) => {
  const totalHeight = items.length * ITEM_HEIGHT

  const [isRolling, setIsRolling] = useState(false)
  const [position, setPosition] = useState(0)
  const [targetIndex, setTargetIndex] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const [shouldStop, setShouldStop] = useState(false)

  const animationRef = useRef(null)
  const startTimeRef = useRef(0)

  const showResult = () => openModal(items[targetIndex])

  const start = () => {
    if (isRolling) return
    const randomIndex = Math.floor(Math.random() * items.length)
    setTargetIndex(randomIndex)
    setIsRolling(true)
  }

  const stop = useCallback(() => {
    cancelAnimationFrame(animationRef.current)

    const targetPosition =
      (Math.floor(position / totalHeight) + 1) * totalHeight +
      targetIndex * ITEM_HEIGHT -
      CENTER_INDEX * ITEM_HEIGHT +
      ITEM_HEIGHT * 2

    setPosition(targetPosition)
    setIsRolling(false)
    setShouldStop(false)
    startTimeRef.current = 0
    setSelectedItem(items[targetIndex])

    const timer = setTimeout(showResult, 700)

    return () => clearTimeout(timer)
  }, [position, totalHeight, targetIndex, showResult])

  useEffect(() => {
    if (!isRolling) return

    const roll = (now) => {
      if (!startTimeRef.current) startTimeRef.current = now

      const elapsed = now - startTimeRef.current

      setPosition((prev) => prev + SCROLL_SPEED)

      if (elapsed >= ROLL_DURATION) {
        setShouldStop(true)
        return
      }

      animationRef.current = requestAnimationFrame(roll)
    }

    animationRef.current = requestAnimationFrame(roll)

    return () => cancelAnimationFrame(animationRef.current)
  }, [isRolling])

  useEffect(() => {
    if (!shouldStop) return
    stop()
  }, [shouldStop, stop])

  const wrappedPosition = ((position % totalHeight) + totalHeight - 2 * ITEM_HEIGHT) % totalHeight

  return {
    items,
    isRolling,
    start,
    selectedItem,
    wrappedPosition,
  }
}
