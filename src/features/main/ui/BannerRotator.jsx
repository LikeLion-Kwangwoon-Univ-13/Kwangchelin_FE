import { Icon } from '@/components'

import { useBannerRotator } from '../domain/hooks/useBannerRotator'
import styles from './BannerRotator.module.css'

/**
 * 랜덤 배너 텍스트 + 아이콘을 일정 간격으로 출력하는 컴포넌트
 */

export const BannerRotator = () => {
  const currentPhrase = useBannerRotator()

  const { text, icon } = currentPhrase

  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <Icon name={icon} />
    </div>
  )
}
