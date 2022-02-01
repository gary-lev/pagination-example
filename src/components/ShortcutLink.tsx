import React, { FC } from 'react'
import { PaginationItem, PaginationLink } from '@levco/shared-components'

type ShortcutLinkProps = {
  children?: React.ReactNode
  disabled?: boolean
  onClick: (page: number) => void
  page: number
  name?: string
}

/**
 * A clickable link to the first/previous/next/last page in the pagination bar
 */
const ShortcutLink: FC<ShortcutLinkProps> = ({
  page,
  children,
  disabled,
  ...props
}) => {
  const onClick = (event: React.MouseEvent) => {
    event.preventDefault()
    props.onClick(page)
  }

  return (
    <PaginationItem disabled={disabled}>
      <PaginationLink onClick={onClick} tabIndex={disabled ? -1 : undefined}>
        {children}
      </PaginationLink>
    </PaginationItem>
  )
}

ShortcutLink.displayName = 'ShortcutLink'

export default ShortcutLink
