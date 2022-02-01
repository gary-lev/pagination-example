import React, { useState } from 'react'
import { render } from 'react-dom'
import { Card, Container, Spinner, Table } from '@levco/shared-components'
import Pagination from './components/Pagination'
import useUsers from './hooks/useUsers'
import './style.css'

const App = () => {
  const [page, setPage] = useState(1)
  const { users, loading, total } = useUsers((page - 1) * 10, 10)

  return (
    <Container className="py-5">
      <Card
        title="Users"
        bodyClassName="p-0"
        footer={
          <div className="d-flex justify-content-end">
            <Pagination
              currentPage={page}
              perPage={10}
              totalItems={total}
              onClick={(page) => setPage(page)}
            />
          </div>
        }
      >
        {loading && (
          <div className="text-center py-5">
            <Spinner />
          </div>
        )}
        {users && (
          <Table
            columns={[
              {
                key: 'name.first',
                cell: (user) => user.name.first,
                header: 'First Name',
                width: '25%',
                sortable: false,
              },
              {
                key: 'name.last',
                cell: (user) => user.name.last,
                header: 'Last Name',
                width: '25%',
                sortable: false,
              },
              {
                key: 'email',
                cell: (user) => user.email,
                header: 'Email',
                width: '50%',
                sortable: false,
              },
            ]}
            rows={users}
          />
        )}
      </Card>
    </Container>
  )
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
