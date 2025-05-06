import { Route, Routes } from 'react-router'

import { CardFlipGamePage } from '@/pages/card-flip/CardFlipGamePage'
import { CardFlipPage } from '@/pages/card-flip/CardFlipPage'
import { MainPage } from '@/pages/main'
import { RestaurantListPage } from '@/pages/restaurant/RestaurantListPage'
import { RestaurantMapPage } from '@/pages/restaurant/RestaurantMapPage'
import { CategoryRouletteGamePage } from '@/pages/roulette/CategoryRouletteGamePage'
import { CategoryRoulettePage } from '@/pages/roulette/CategoryRoulettePage'
import { RestaurantRouletteGamePage } from '@/pages/roulette/RestaurantRouletteGamePage'
import { RestaurantRoulettePage } from '@/pages/roulette/RestaurantRoulettePage'
import { RoulettePage } from '@/pages/roulette/RoulettePage'
import { SchoolFoodPage } from '@/pages/school-food/SchoolFoodPage'
import { SchoolFoodReviewPage } from '@/pages/school-food/SchoolFoodReviewPage'

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
      {/* <Route path=':restaurantId' element={<RestaurantDetailPage />} /> */}
      {/* <Route path=':restaurantId/review' element={<RestaurantReviewPage />} /> */}
      {/* <Route path=':restaurantId/reviews' element={<RestaurantAllReviewsPage />} /> */}

      {/* 룰렛 */}
      <Route path='/roulette' element={<RoulettePage />} />

      {/* 카테고리 룰렛 */}
      <Route path='/roulette/category' element={<CategoryRoulettePage />} />
      <Route path='/roulette/category/game' element={<CategoryRouletteGamePage />} />

      {/* 식당 룰렛 */}
      <Route path='/roulette/restaurant' element={<RestaurantRoulettePage />} />
      <Route path='/roulette/restaurant/game' element={<RestaurantRouletteGamePage />} />

      {/* 카드 뒤집기 */}
      <Route path='/card-flip' element={<CardFlipPage />} />
      <Route path='/card-flip/game' element={<CardFlipGamePage />} />

      {/* 광운 PICK 맛집 */}
      {/* <Route path='/kwangwoon' element={<KwangwoonPickPage />} /> */}
    </Routes>
  )
}
