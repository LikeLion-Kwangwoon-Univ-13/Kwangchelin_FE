/**
 * 문자열 형식의 날짜를 밀리초 단위의 timestamp로 변환
 * @param {string} dateString - 'yy.mm.dd. hh:mm' 형식의 문자열
 * @returns {number} 밀리초 단위의 timestamp
 */
const parseDate = (dateString) => {
  const [datePart, timePart] = dateString.split('. ')
  const [year, month, day] = datePart.split('.').map(Number)
  const [hour, minute] = timePart.split(':').map(Number)

  return new Date(2000 + year, month - 1, day, hour, minute).getTime()
}

/**
 * 리뷰 목록을 정렬 기준에 따라 정렬
 * @param {Array} reviews - 리뷰 객체 배열 (각 객체는 date와 rating 속성을 포함)
 * @param {'latest' | 'rating'} sortBy - 정렬 기준 ('latest'는 최신순, 'rating'은 평점순)
 * @returns {Array} 정렬된 리뷰 배열
 */
export const getSortedReviews = (reviews, sortBy = 'latest') => {
  const copied = [...reviews]

  if (sortBy === 'latest') {
    return copied.sort((a, b) => parseDate(b.date) - parseDate(a.date))
  }

  if (sortBy === 'rating') {
    return copied.sort((a, b) => b.rating - a.rating)
  }

  return copied
}
