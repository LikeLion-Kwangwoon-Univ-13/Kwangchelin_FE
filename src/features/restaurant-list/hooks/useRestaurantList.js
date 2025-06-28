import axios from 'axios'
import { useEffect, useState } from 'react'

export const useRestaurantList = ({ category, keyword }) => {
  const [restaurantList, setRestaurantList] = useState([]) // 식당 목록 상태
  const [page, setPage] = useState(1) // 현재 페이지 번호
  const [isLastPage, setIsLastPage] = useState(false) // 마지막 페이지 여부
  const [isError, setIsError] = useState(false) // 에러 발생 여부
  const [isLoading, setIsLoading] = useState(false) // 로딩 중 여부

  // 다음 페이지 요청 가능 여부
  const enabled = !isLoading && !isLastPage

  useEffect(() => {
    const fetchRestaurants = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        const response = await axios.get(
          `/places/page/{page}[?category={category}][&name={name}]`,
          {
            params: {
              page,
              category,
              keyword,
            },
          },
        )

        const newRestaurants = response.data.restaurants
        const lastPage = response.data.lastPage

        setRestaurantList((prev) => [...prev, ...newRestaurants])
        setIsLastPage(lastPage)
      } catch (error) {
        setIsError(true)
        console.error('오류 발생', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRestaurants()
  }, [page, category, keyword])

  // 다음 페이지를 요청하는 함수
  const loadNextPage = () => {
    if (enabled) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  return { restaurantList, loadNextPage, enabled, isError, isLoading }
}
