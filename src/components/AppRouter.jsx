import { Route, Routes } from 'react-router'

import { CardFlipGamePage, CardFlipSettingPage } from '@/features/card-flip/entry'
import {
  CategoryRoulettePlayPage,
  CategoryRouletteSelectPage,
} from '@/features/category-roulette/entry'
import { KwangwoonPickPage } from '@/features/kwangwoon-pick/entry'
import { MainPage } from '@/features/main/entry'
import { RestaurantAllReviewsPage } from '@/features/restaurant-all-reviews/entry'
import { RestaurantDetailPage } from '@/features/restaurant-detail/entry'
import { RestaurantListPage } from '@/features/restaurant-list/entry'
import { RestaurantMapPage } from '@/features/restaurant-map/entry'
import { RestaurantReviewPage } from '@/features/restaurant-review/entry'
import {
  RestaurantRoulettePlayPage,
  RestaurantRouletteSelectPage,
} from '@/features/restaurant-roulette/entry'
import { RoulettePage } from '@/features/roulette/entry'
import { SchoolFoodPage, SchoolFoodReviewPage } from '@/features/school-food/entry'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />

      {/* 학식 */}
      <Route path='/school-food' element={<SchoolFoodPage />} />
      <Route path='/school-food/review' element={<SchoolFoodReviewPage />} />

      {/* 식당 지도 */}
      <Route path='/restaurant' element={<RestaurantMapPage />} />
      <Route path='/restaurant/list' element={<RestaurantListPage />} />
      <Route path='/restaurant/:restaurantId' element={<RestaurantDetailPage />} />
      <Route path='/restaurant/:restaurantId/review' element={<RestaurantReviewPage />} />
      <Route path='/restaurant/:restaurantId/reviews' element={<RestaurantAllReviewsPage />} />

      {/* 룰렛 */}
      <Route path='/roulette' element={<RoulettePage />} />

      {/* 카테고리 룰렛 */}
      <Route path='/roulette/category' element={<CategoryRouletteSelectPage />} />
      <Route path='/roulette/category/game' element={<CategoryRoulettePlayPage />} />

      {/* 식당 룰렛 */}
      <Route path='/roulette/restaurant' element={<RestaurantRouletteSelectPage />} />
      <Route path='/roulette/restaurant/game' element={<RestaurantRoulettePlayPage />} />

      {/* 카드 뒤집기 */}
      <Route path='/card-flip' element={<CardFlipSettingPage />} />
      <Route path='/card-flip/game' element={<CardFlipGamePage />} />

      {/* 광운 PICK 맛집 */}
      <Route path='/kwangwoon' element={<KwangwoonPickPage />} />
    </Routes>
  )
}
