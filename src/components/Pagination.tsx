import React, { FC } from 'react'
import { Icon, Pagination } from '@levco/shared-components'
import Page from './Page'
import ShortcutLink from './ShortcutLink'
import usePagination from './usePagination'

const DEFAULT_PER_PAGE = 20

type LinkProps = {
  disabled?: boolean
  page: number
  onClick: (page: number) => void
}

const FirstPageLink: FC<LinkProps> = ({ disabled, page, onClick }) => (
  <ShortcutLink name="first" page={page} disabled={disabled} onClick={onClick}>
    <Icon name="first_page" />
  </ShortcutLink>
)

const PrevPageLink: FC<LinkProps> = ({ disabled, page, onClick }) => (
  <ShortcutLink
    name="previous"
    page={page}
    disabled={disabled}
    onClick={onClick}
  >
    <Icon name="chevron_left" />
  </ShortcutLink>
)

const NextPageLink: FC<LinkProps> = ({ disabled, page, onClick }) => (
  <ShortcutLink name="next" page={page} disabled={disabled} onClick={onClick}>
    <Icon name="chevron_right" />
  </ShortcutLink>
)

const LastPageLink: FC<LinkProps> = ({ disabled, page, onClick }) => (
  <ShortcutLink name="last" page={page} disabled={disabled} onClick={onClick}>
    <Icon name="last_page" />
  </ShortcutLink>
)

type PaginatorProps = {
  currentPage: number
  onClick: (page: number) => void
  perPage?: number
  totalItems: number
}

const noop = () => undefined

const Paginator: FC<PaginatorProps> = ({
  currentPage,
  perPage = DEFAULT_PER_PAGE,
  totalItems,
  onClick = noop,
}) => {
  const { pages, showNext, showPrevious, totalPages } = usePagination(
    totalItems,
    perPage,
    currentPage
  )

  return totalPages > 1 ? (
    <Pagination listClassName="m-0 p-0 mb-2 mb-sm-0 border-0 flex-row">
      <FirstPageLink page={1} disabled={!showPrevious()} onClick={onClick} />
      <PrevPageLink
        page={currentPage - 1}
        disabled={!showPrevious()}
        onClick={onClick}
      />
      {pages.map((page: number) => (
        <Page
          key={page}
          page={page}
          current={currentPage === page}
          onClick={onClick}
        />
      ))}
      <NextPageLink
        page={currentPage + 1}
        disabled={!showNext()}
        onClick={onClick}
      />
      <LastPageLink
        page={totalPages}
        disabled={!showNext()}
        onClick={onClick}
      />
    </Pagination>
  ) : (
    <></>
  )
}

Paginator.displayName = 'Paginator'

export default Paginator
