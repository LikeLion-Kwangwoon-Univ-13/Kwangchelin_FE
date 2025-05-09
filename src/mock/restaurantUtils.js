import { RESTAURANT_DUMMY_DATA } from '@/mock/restaurantDummyData'

/**
 * 카테고리와 검색어로 식당 목록 필터링
 * @param {string | null} category - 선택된 카테고리 (null이면 전체)
 * @param {string | null} keyword - 검색어 (null 또는 빈 문자열이면 전체)
 * @returns {Array}
 */
export const getFilteredRestaurants = (category, keyword) => {
  return RESTAURANT_DUMMY_DATA.filter((restaurant) => {
    const matchCategory = !category || restaurant.category === category
    const matchKeyword = !keyword || restaurant.name.toLowerCase().includes(keyword.toLowerCase())

    return matchCategory && matchKeyword
  })
}

/**
 * location_id로 식당 단일 정보 반환
 * @param {number} locationId
 * @returns {object|null}
 */
export const getRestaurantById = (locationId) => {
  const parsedId = Number(locationId)

  if (isNaN(parsedId)) {
    console.warn(`Invalid locationId: ${locationId}`)
    return null
  }

  return RESTAURANT_DUMMY_DATA.find((restaurant) => restaurant.location_id === parsedId) || null
}

export const getRestaurantNamesByCategory = (category) => {
  return RESTAURANT_DUMMY_DATA.filter((item) => item.category === category).map((item) => item.name)
}
