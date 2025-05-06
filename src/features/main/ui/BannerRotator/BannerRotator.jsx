import { Icon } from '@/components/Icon/Icon'
import { useBannerRotator } from '@/features/main/domain/hooks'

import styles from './BannerRotator.module.css'

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
