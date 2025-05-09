import { useSearchParams } from 'react-router'

/**
 * URL 쿼리스트링에서 'category' 값을 추출하는 커스텀 훅
 * @returns {string | null} 선택된 카테고리 쿼리 파라미터 값
 */

export const useSelectedCategory = () => {
  const [searchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category')

  return selectedCategory
}
