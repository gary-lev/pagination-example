import range from 'lodash.range'

/**
 * Stores and calculates current pagination state based on the current page, page size, and total
 * items
 */
function usePagination(
  totalItems: number,
  pageSize: number = 10,
  page: number = 1,
  visiblePages: number = 5,
) {
  let totalPages = Math.ceil(totalItems / pageSize)
  const offsetToMiddle = Math.floor(visiblePages / 2)
  let from = page - offsetToMiddle
  let to = page + offsetToMiddle

  if (from <= 0) {
    from = 1
    to = totalPages < visiblePages ? totalPages : visiblePages
  } else if (to > totalPages) {
    from = totalPages > visiblePages ? from - (to - totalPages) : 1
    to = totalPages
  }

  const showPrevious = page > 1
  const showNext = page < totalPages

  return {
    from,
    to,
    pages: range(from, to + 1),
    showNext,
    showPrevious,
    totalPages,
  }
}

export default usePagination
