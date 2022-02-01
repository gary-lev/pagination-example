import range from 'lodash.range'

const PAGINATION_WINDOW_SIZE = 5

/**
 * Stores and calculates current pagination state based on the current page, page size, and total
 * items
 */
function usePagination(
  totalItems: number,
  pageSize: number = 10,
  currentPage: number = 1
) {
  let totalPages = Math.ceil(totalItems / pageSize)
  const offsetToMiddle = Math.floor(PAGINATION_WINDOW_SIZE / 2)
  let from = currentPage - offsetToMiddle
  let to = currentPage + offsetToMiddle

  if (from <= 0) {
    from = 1
    to =
      totalPages < PAGINATION_WINDOW_SIZE ? totalPages : PAGINATION_WINDOW_SIZE
  } else if (to > totalPages) {
    from = totalPages > PAGINATION_WINDOW_SIZE ? from - (to - totalPages) : 1
    to = totalPages
  }

  const showPrevious = () => currentPage > 1
  const showNext = () => currentPage < totalPages

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
