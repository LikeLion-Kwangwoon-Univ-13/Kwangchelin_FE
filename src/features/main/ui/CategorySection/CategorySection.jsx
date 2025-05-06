import { Icon } from '@/components/Icon/Icon'
import { CATEGORY_ICON_LIST } from '@/features/main/domain/constants'

import styles from './CategorySection.module.css'

export const CategorySection = () => {
  return (
    <section className={styles.container}>
      {CATEGORY_ICON_LIST.map((icon) => (
        <Icon name={icon} key={icon} size={50} />
      ))}
    </section>
  )
}
