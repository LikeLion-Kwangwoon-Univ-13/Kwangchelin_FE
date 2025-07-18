export const formatDateTime = (isoString) => {
  const date = new Date(isoString)
  const year = date.getFullYear() % 2000
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${year}.${month}.${day}. ${hours}:${minutes}`
}
