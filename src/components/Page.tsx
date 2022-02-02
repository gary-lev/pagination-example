import React, { FC } from 'react'
import { Button, ButtonProps } from '@levco/shared-components'

interface PageProps extends Omit<ButtonProps, 'onClick'> {
  current?: boolean
  onClick: (pageNumber: number) => void
  page: number
}

const Page: FC<PageProps> = ({
  children,
  current = false,
  onClick,
  page,
  ...props
}) => {
  return (
    <Button
      className="me-1"
      color="primary"
      onClick={() => onClick(page)}
      outline={!current}
      {...props}
    >
      <div style={{ width: '1.25rem' }}>{children}</div>
    </Button>
  )
}

Page.displayName = 'Page'

export default Page
