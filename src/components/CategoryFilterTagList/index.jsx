import { CATEGORY_LIST } from '@/constants/category'

import { CategoryTag } from '../Tag/CategoryTag'
import styles from './CategoryTagList.module.css'

export const CategoryFilterTagList = ({ selectedCategory, onClickCategory }) => {
  return (
    <div className={styles.container}>
      {CATEGORY_LIST.map((category) => {
        const isSelected = selectedCategory === category

        return (
          <CategoryTag
            key={category}
            variant='filter'
            label={category}
            selected={isSelected}
            onClick={() => onClickCategory(category)}
          />
        )
      })}
    </div>
  )
}
