import { useSearchParams } from 'react-router'

/**
 * URL 쿼리스트링에서 'keyword' 값을 추출하는 커스텀 훅
 * @returns {string | null} 검색어 쿼리 파라미터 값
 */

export const useSearchKeyword = () => {
  const [searchParams] = useSearchParams()
  const searchKeyword = searchParams.get('keyword')

  return searchKeyword
}
