import { RESTAURANT_DUMMY_DATA } from '@/mock/restaurantDummyData'

/**
 * 카테고리로 식당 목록 필터링
 * @param {string|null} category
 * @returns {Array}
 */
export const getRestaurantsByCategory = (category) => {
  if (!category) return RESTAURANT_DUMMY_DATA
  return RESTAURANT_DUMMY_DATA.filter((restaurant) => restaurant.category === category)
}

/**
 * 검색어로 식당 목록 필터링 (이름 기준)
 * @param {string} keyword
 * @returns {Array}
 */
export const getRestaurantsByKeyword = (keyword) => {
  if (!keyword) return RESTAURANT_DUMMY_DATA

  const lowerKeyword = keyword.toLowerCase()

  return RESTAURANT_DUMMY_DATA.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(lowerKeyword),
  )
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
