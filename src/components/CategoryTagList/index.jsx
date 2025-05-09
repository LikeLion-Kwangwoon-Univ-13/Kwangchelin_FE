import { CategoryTag } from '@/components/Tag/CategoryTag'
import { CATEGORY_LIST } from '@/constants'

import styles from './CategoryTagList.module.css'

export const CategoryTagList = ({ selectedCategory, onSelect, multiple = false }) => {
  const isSelected = (category) => {
    if (multiple) {
      return Array.isArray(selectedCategory) && selectedCategory.includes(category)
    } else {
      return selectedCategory === category
    }
  }

  return (
    <div className={styles.container}>
      {CATEGORY_LIST.map((category) => (
        <CategoryTag
          key={category}
          variant='roulette'
          label={category}
          selected={isSelected(category)}
          onClick={() => onSelect(category)}
        />
      ))}
    </div>
  )
}
