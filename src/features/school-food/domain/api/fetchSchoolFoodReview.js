import { REVIEW_DUMMY_DATA } from '@/mock'

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
 * 학식 리뷰 목록을 최신순으로 정렬하여 반환
 * @returns {Array} 최신순으로 정렬된 리뷰 목록
 */

export const fetchSchoolFoodReviewList = () => {
  const copied = [...REVIEW_DUMMY_DATA]

  return copied.sort((a, b) => parseDate(b.date) - parseDate(a.date))
}
