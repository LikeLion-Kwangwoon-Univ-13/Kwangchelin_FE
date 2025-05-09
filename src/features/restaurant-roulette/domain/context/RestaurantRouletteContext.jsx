import { createContext, useContext, useEffect, useState } from 'react'

import { getFilteredRestaurants } from '@/mock'

const RestaurantRouletteContext = createContext()

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

export const useRestaurantRoulette = () => {
  const context = useContext(RestaurantRouletteContext)

  if (!context) throw new Error('RestaurantRouletteProvider 안에서 사용해야 합니다.')

  return context
}
