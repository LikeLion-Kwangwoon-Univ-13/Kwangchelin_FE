import { useEffect, useState } from 'react'

import { Icon } from '@/components/Icon/Icon'

import styles from './TextRotator.module.css'

// const ROTATE_INTERVAL = 1600
const ROTATE_INTERVAL = 160000

const PHRASES = [
  { text: '커피 한잔 할래용~ 커피 한잔~', icon: 'banner-coffee' },
  { text: '식빵 물고 등교하는 나 에헷~', icon: 'banner-bread' },
  { text: '오늘 아침부터 완전히 햄버거 모드다!', icon: 'banner-hamburger' },
  { text: '오늘 맛있는거 먹고 정신 체리!!!', icon: 'banner-cherry' },
  { text: '당충전에는 딸기 생크림 케이크~', icon: 'banner-cake' },
  { text: '오늘 텐션은 완전 양념 반 후라이드 반!', icon: 'banner-chicken' },
  { text: '어깨 피자! 허리 피자! 웃음 피자!', icon: 'banner-pizza' },
  { text: '도넛이 돌았다! 나도 돌았다!', icon: 'banner-donut' },
  { text: '오늘도 기분은 바닐라~(순한맛)', icon: 'banner-ice-cream' },
]

export const TextRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % PHRASES.length)
    }, ROTATE_INTERVAL)

    return () => clearInterval(intervalId)
  }, [])

  const { text, icon } = PHRASES[currentIndex]

  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <Icon name={icon} />
    </div>
  )
}
