import { useSearchParams } from 'react-router'

export const useSearchKeyword = () => {
  const [searchParams] = useSearchParams()
  const searchKeyword = searchParams.get('keyword')

  return searchKeyword
}
