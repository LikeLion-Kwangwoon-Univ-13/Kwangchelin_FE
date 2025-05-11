import { useEffect, useRef } from 'react'

/**
 * 마우스 드래그 또는 터치 드래그를 통해 수평 스크롤을 구현하는 커스텀 훅
 *
 * PC: 마우스 클릭 & 드래그로 스크롤 이동
 *
 * Mobile 환경: 터치 드래그로 스크롤 이동
 */

export const useDragScroll = () => {
  const containerRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseDown = (e) => {
      isDragging.current = true
      startX.current = e.pageX - container.offsetLeft
      scrollLeft.current = container.scrollLeft
    }

    const handleMouseMove = (e) => {
      if (!isDragging.current) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = x - startX.current
      container.scrollLeft = scrollLeft.current - walk
    }

    const handleMouseUp = () => {
      isDragging.current = false
    }

    const handleTouchStart = (e) => {
      startX.current = e.touches[0].pageX - container.offsetLeft
      scrollLeft.current = container.scrollLeft
    }

    const handleTouchMove = (e) => {
      const x = e.touches[0].pageX - container.offsetLeft
      const walk = x - startX.current
      container.scrollLeft = scrollLeft.current - walk
    }

    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mouseleave', handleMouseUp)
    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchmove', handleTouchMove)

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mouseleave', handleMouseUp)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return containerRef
}
