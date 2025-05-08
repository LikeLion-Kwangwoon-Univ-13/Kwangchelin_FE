import { CategoryTag } from '../Tag/CategoryTag'
import styles from './CategoryTagList.module.css'

export const CategoryFilterTagList = ({ categoryList, selectedCategory, onClickCategory }) => {
  return (
    <div className={styles.container}>
      {categoryList.map((category) => {
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
