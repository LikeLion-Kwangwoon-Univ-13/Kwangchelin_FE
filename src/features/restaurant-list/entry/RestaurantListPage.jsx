import { useNavigate } from 'react-router'

import { CategoryFilterTagList, MainLayout } from '@/components'
import { CATEGORY_LIST } from '@/constants'
import { useSelectedCategory } from '@/hooks'

import { RestaurantList } from '../ui/RestaurantList'
import styles from './RestaurantListPage.module.css'

export const RestaurantListPage = () => {
  const navigate = useNavigate()
  const selectedCategory = useSelectedCategory()

  const handleCategoryClick = (category) => {
    const nextCategory = selectedCategory === category ? null : category

    const params = new URLSearchParams()
    if (nextCategory) params.set('category', nextCategory)

    navigate({ pathname: '/restaurant/list', search: params.toString() }, { replace: true })
  }

  return (
    <MainLayout title='주변 맛집' searchBaseURL={'/restaurant/list'} hasSearch>
      <div className={styles.container}>
        <CategoryFilterTagList
          categoryList={['전체', ...CATEGORY_LIST]}
          selectedCategory={selectedCategory || '전체'}
          onClickCategory={handleCategoryClick}
        />

        <RestaurantList />
      </div>
    </MainLayout>
  )
}
