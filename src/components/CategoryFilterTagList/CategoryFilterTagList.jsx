import { CategoryTag } from '@/components'
import { useDragScroll } from '@/hooks'

import styles from './CategoryFilterTagList.module.css'

/**
 * 필터용 카테고리 태그 목록 컴포넌트 (단일 선택)
 *
 * @param {Object} props
 * @param {string[]} props.categoryList - 렌더링할 카테고리 항목 배열
 * @param {string} props.selectedCategory - 현재 선택된 카테고리
 * @param {(category: string) => void} props.onClickCategory - 카테고리 클릭 핸들러
 * @returns {JSX.Element}
 */

export const CategoryFilterTagList = ({ categoryList, selectedCategory, onClickCategory }) => {
  const containerRef = useDragScroll()

  return (
    <div ref={containerRef} className={styles.container}>
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
