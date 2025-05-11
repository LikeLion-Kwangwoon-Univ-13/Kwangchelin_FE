import { createContext, useContext, useEffect, useState } from 'react'

import { getFilteredRestaurants } from '@/mock'

const RestaurantRouletteContext = createContext()

/**
 * 식당 룰렛 전용 상태를 관리하는 Provider 컴포넌트
 *
 * - selectedCategory: 현재 선택된 카테고리
 * - restaurantList: 선택된 카테고리에 해당하는 식당 이름 리스트
 * - resultRestaurant: 룰렛 결과로 선택된 식당
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - 하위 컴포넌트
 */

export const RestaurantRouletteProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const [restaurantList, setRestaurantList] = useState(null)
  const [resultRestaurant, setResultRestaurant] = useState(null)

  const clearRestaurantRoulette = () => {
    setRestaurantList(null)
    setResultRestaurant(null)
  }

  useEffect(() => {
    const restaurantNameList = getFilteredRestaurants(selectedCategory).map((item) => item.name)

    setRestaurantList(restaurantNameList)
  }, [selectedCategory])

  return (
    <RestaurantRouletteContext.Provider
      value={{
        selectedCategory,
        resultRestaurant,
        restaurantList,
        setSelectedCategory,
        setResultRestaurant,
        clearRestaurantRoulette,
      }}
    >
      {children}
    </RestaurantRouletteContext.Provider>
  )
}

/**
 * 식당 룰렛 컨텍스트를 사용하는 커스텀 훅
 *
 * @returns {{
 *   selectedCategory: string | null,
 *   restaurantList: string[] | null,
 *   resultRestaurant: string | null,
 *   setSelectedCategory: (category: string) => void,
 *   setResultRestaurant: (restaurant: string) => void,
 *   clearRestaurantRoulette: () => void
 * }}
 */

export const useRestaurantRoulette = () => {
  const context = useContext(RestaurantRouletteContext)

  if (!context) throw new Error('RestaurantRouletteProvider 안에서 사용해야 합니다.')

  return context
}
