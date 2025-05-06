import { useEffect, useState } from 'react'

import { BANNER_PHRASES } from '../constants'

const ROTATE_INTERVAL = 1600

export const useBannerRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BANNER_PHRASES.length)
    }, ROTATE_INTERVAL)

    return () => clearInterval(timer)
  }, [])

  return BANNER_PHRASES[currentIndex]
}
