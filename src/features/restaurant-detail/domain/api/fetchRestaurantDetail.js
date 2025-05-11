import { RESTAURANT_DUMMY_DATA } from '@/mock'

/**
 * location_id를 기반으로 단일 식당 정보 반환
 * @param {number|string} locationId 식당 고유 ID
 * @returns {object|null} 해당 ID의 식당 정보 객체 (없으면 null)
 */

export const fetchRestaurantDetail = (locationId) => {
  const parsedId = Number(locationId)

  if (isNaN(parsedId)) {
    console.warn(`잘못된 ID: ${locationId}`)
    return null
  }

  return RESTAURANT_DUMMY_DATA.find((restaurant) => restaurant.location_id === parsedId) || null
}
