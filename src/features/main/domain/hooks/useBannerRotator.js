import { useEffect, useState } from 'react'

import { BANNER_PHRASES } from '../constants/bannerPhrases'

const ROTATE_INTERVAL = 1600

/**
 * BANNER_PHRASES를 일정 시간마다 순환하는 커스텀 훅
 *
 * @returns {{ text: string, icon: string }} 현재 출력 중인 배너 구문
 */

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
