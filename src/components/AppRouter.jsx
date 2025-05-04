import { Route, Routes } from 'react-router'

import { MainPage } from '@/pages/main'
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
      {/* <Route path='/restaurant' element={<RestaurantMapPage />}>
        <Route path='list' element={<RestaurantListPage />} />
        <Route path=':restaurantId' element={<RestaurantDetailPage />} />
        <Route path=':restaurantId/review' element={<RestaurantReviewPage />} />
        <Route path=':restaurantId/reviews' element={<RestaurantAllReviewsPage />} />
      </Route> */}

      {/* 룰렛 */}
      {/* <Route path='/roulette' element={<RoulettePage />}> */}
      {/* 카테고리 룰렛 */}
      {/* <Route path='category' element={<CategoryRoulettePage />}>
          <Route path='select' element={<CategorySelectPage />} />
          <Route path='play' element={<RouletteGamePage />} />
        </Route> */}

      {/* 식당 룰렛 */}
      {/* <Route path='restaurant' element={<RestaurantRoulettePage />}>
          <Route path='select' element={<RestaurantCategorySelectPage />} />
          <Route path='play' element={<RestaurantRouletteGamePage />} />
        </Route>
      </Route> */}

      {/* 카드 뒤집기 */}
      {/* <Route path='/card-flip' element={<CardFlipPage />}>
        <Route path='select' element={<CardFlipSelectPage />} />
        <Route path='play' element={<CardFlipGamePage />} />
      </Route> */}

      {/* 광운 PICK 맛집 */}
      {/* <Route path='/kwangwoon' element={<KwangwoonPickPage />} /> */}
    </Routes>
  )
}
