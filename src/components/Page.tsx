import React, { FC, MouseEvent } from 'react'
import { PaginationItem, PaginationLink } from '@levco/shared-components'

type PageProps = {
  current: boolean
  onClick: (pageNumber: number) => void
  page: number
}

const Page: FC<PageProps> = ({ current, page, ...props }) => {
  const onClick = (event: MouseEvent) => {
    event.preventDefault()
    props.onClick(page)
  }

  return (
    <PaginationItem active={current}>
      <PaginationLink onClick={onClick}>{page}</PaginationLink>
    </PaginationItem>
  )
}

Page.displayName = 'Page'

export default Page
