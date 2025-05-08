const parseDate = (dateString) => {
  const [datePart, timePart] = dateString.split('. ')
  const [year, month, day] = datePart.split('.').map(Number)
  const [hour, minute] = timePart.split(':').map(Number)

  return new Date(2000 + year, month - 1, day, hour, minute).getTime()
}

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
