import { Icon } from '@/components'

import { CATEGORY_ICON_LIST } from '../domain/constants/categoryIconList'
import styles from './CategorySection.module.css'

/**
 * 메인 페이지에서 제공되는 음식 카테고리 아이콘 목록
 */

export const CategorySection = () => {
  return (
    <section className={styles.container}>
      {CATEGORY_ICON_LIST.map((icon) => (
        <Icon name={icon} key={icon} size={50} />
      ))}
    </section>
  )
}
