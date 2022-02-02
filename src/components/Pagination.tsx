import React, { FC } from 'react'
import { Icon, Pagination } from '@levco/shared-components'
import Page from './Page'
import usePagination from './usePagination'

const noop = () => undefined

type PaginatorProps = {
  onPage: (page: number) => void
  page?: number
  pageSize?: number
  totalItems: number
}

const Paginator: FC<PaginatorProps> = ({
  page: currentPage = 1,
  pageSize = 10,
  totalItems,
  onPage = noop,
}) => {
  const { pages, showNext, showPrevious, totalPages } = usePagination(
    totalItems,
    pageSize,
    currentPage,
  )

  return totalPages > 1 ? (
    <Pagination listClassName="m-0 p-0 mb-2 mb-sm-0 border-0 flex-row">
      <Page page={1} disabled={!showPrevious} onClick={onPage}>
        <Icon name="first_page" />
      </Page>
      <Page page={currentPage - 1} disabled={!showPrevious} onClick={onPage}>
        <Icon name="chevron_left" />
      </Page>
      {pages.map((page: number) => (
        <Page
          key={page}
          page={page}
          current={currentPage === page}
          onClick={onPage}
        >
          {page}
        </Page>
      ))}
      <Page page={currentPage + 1} onClick={onPage} disabled={!showNext}>
        <Icon name="chevron_right" />
      </Page>
      <Page page={totalPages} onClick={onPage} disabled={!showNext}>
        <Icon name="last_page" />
      </Page>
    </Pagination>
  ) : null
}

Paginator.displayName = 'Paginator'

export default Paginator
