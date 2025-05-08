import { useNavigate } from 'react-router'

import { YellowButton } from '@/components/Button/YellowButton'
import { CategoryFilterTagList } from '@/components/CategoryFilterTagList'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { RestaurantMap } from '@/features/restaurant-map/ui'

import { useSelectedCategory } from '../domain/hooks'
import styles from './RestaurantMapPage.module.css'

export const RestaurantMapPage = () => {
  const navigate = useNavigate()
  const selectedCategory = useSelectedCategory()

  const handleCategoryClick = (category) => {
    const nextCategory = selectedCategory === category ? null : category

    navigate(
      {
        pathname: '/restaurant',
        search: nextCategory ? `?category=${nextCategory}` : '',
      },
      { replace: true },
    )
  }

  const handleViewListClick = () => {
    navigate('/restaurant/list')
  }

  return (
    <MainLayout title={'광운대 근처 맛집'} hasBackgroundColor hasSearch>
      <div className={styles.container}>
        <CategoryFilterTagList
          selectedCategory={selectedCategory}
          onClickCategory={handleCategoryClick}
        />

        <RestaurantMap selectedCategory={selectedCategory} />

        <YellowButton onClick={handleViewListClick} className={styles.button}>
          목록 보기
        </YellowButton>
      </div>
    </MainLayout>
  )
}
