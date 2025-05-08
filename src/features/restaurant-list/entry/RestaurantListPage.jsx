import { useNavigate } from 'react-router'

import { CategoryFilterTagList } from '@/components/CategoryFilterTagList'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { CATEGORY_LIST } from '@/constants/category'
import { useSelectedCategory } from '@/hooks/useSelectedCategory'

import { RestaurantList } from '../ui/RestaurantList'
import styles from './RestaurantListPage.module.css'

export const RestaurantListPage = () => {
  const navigate = useNavigate()
  const selectedCategory = useSelectedCategory()

  const handleCategoryClick = (category) => {
    navigate(
      {
        pathname: '/restaurant/list',
        search: `?category=${category}`,
      },
      { replace: true },
    )
  }

  return (
    <MainLayout title='주변 맛집' hasSearch>
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
