import { useSearchParams } from 'react-router'

export const useSelectedCategory = () => {
  const [searchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category')

  return selectedCategory
}
