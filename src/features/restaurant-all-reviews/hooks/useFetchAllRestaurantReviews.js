import { useState } from 'react'

export const useFetchAllRestaurantReviews = ({ placeId, sortBy }) => {
  const [reviewList, setReviewList] = useState([]) // 리뷰 목록 상태
  const [page, setPage] = useState(1) // 현재 페이지 번호
  const [isLastPage, setIsLastPage] = useState(false) // 마지막 페이지 여부
  const [isError, setIsError] = useState(false) // 에러 발생 여부
  const [isLoading, setIsLoading] = useState(false) // 로딩 중 여부

  // 다음 페이지 요청 가능 여부
  const enabled = false

  // 다음 페이지를 요청하는 함수
  const loadNextPage = () => {}

  return { reviewList, loadNextPage, enabled, isError, isLoading }
}
