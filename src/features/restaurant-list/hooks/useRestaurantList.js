import { useEffect, useState } from 'react'

import { instance } from '@/api/client'

export const useRestaurantList = ({ category, keyword }) => {
  const [restaurantList, setRestaurantList] = useState([])
  const [page, setPage] = useState(1)
  const [isLastPage, setIsLastPage] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const enabled = !isLoading && !isLastPage

  useEffect(() => {
    setPage(1)
    setRestaurantList([])
    setIsLastPage(false)
  }, [category, keyword])

  useEffect(() => {
    const fetchRestaurants = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        const resolvedCategory = category === '전체' ? undefined : category

        const data = await instance.get(`/places/page/${page}`, {
          params: {
            category: resolvedCategory,
            name: keyword,
          },
        })

        const rawList = data.placeInfosList
        const lastPage = data.last

        const newRestaurants = rawList.map((item) => ({
          ...item,
          location_id: item.id,
        }))

        setRestaurantList((prev) => [...prev, ...newRestaurants])
        setIsLastPage(lastPage)
      } catch {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRestaurants()
  }, [page, category, keyword])

  const loadNextPage = () => {
    if (enabled) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  return {
    restaurantList,
    loadNextPage,
    enabled,
    isError,
    isLoading,
  }
}
