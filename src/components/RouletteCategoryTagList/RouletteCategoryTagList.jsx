import { CategoryTag } from '@/components'
import { CATEGORY_LIST } from '@/constants'

import styles from './RouletteCategoryTagList.module.css'

/**
 * 룰렛에서 사용되는 카테고리 선택 컴포넌트
 *
 * @param {Object} props
 * @param {string|string[]} props.selectedCategory - 선택된 카테고리 (단일 or 배열)
 * @param {(category: string) => void} props.onSelect - 카테고리 클릭 핸들러
 * @param {boolean} [props.multiple=false] - 복수 선택 여부
 * @returns {JSX.Element}
 */

export const RouletteCategoryTagList = ({ selectedCategory, onSelect, multiple = false }) => {
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
