import { Icon } from '@/components/Icon/Icon'

import { CATEGORY_LIST } from '../../constants/categoryList'
import styles from './CategorySection.module.css'

export const CategorySection = () => {
  return (
    <section className={styles.container}>
      {CATEGORY_LIST.map((icon) => (
        <Icon name={icon} key={icon} size={50} />
      ))}
    </section>
  )
}
