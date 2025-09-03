import type { Post } from './types'
import { createSuspenseQuery } from 'react-query-kit'
import { httpClient } from '~/shared/lib/http-client'

export const usePostsQuery = createSuspenseQuery({
  queryKey: ['posts'],
  fetcher: () => httpClient.get<Post[]>('posts/').json(),
})
