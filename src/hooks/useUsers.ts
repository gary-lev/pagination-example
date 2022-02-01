import useSWR from 'swr'
import orderby from 'lodash.orderby'
export interface RequestOptions {
  headers: Record<string, string>
}

const fetcher = async (url: string, options?: any) => {
  const res = await fetch(url, options)
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data)
  }

  return data
}

function useUsers(start = 0, size = 10) {
  const total = 100
  const { data, error } = useSWR(
    `https://randomuser.me/api?results=${total}`,
    fetcher
  )

  return {
    users: data
      ? orderby(data?.results, ['name.last'], ['asc']).slice(
          start,
          start + size
        )
      : undefined,
    error,
    loading: !data && !error,
    total,
  }
}

export default useUsers
