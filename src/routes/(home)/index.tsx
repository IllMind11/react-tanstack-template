import { createFileRoute } from '@tanstack/react-router'
import { usePostsQuery } from '~/shared/api'
import { PostsList } from './-components'

export const Route = createFileRoute('/(home)/')({
  component: Home,
  loader: async ({ context }) => {
    return await context.queryClient.ensureQueryData(usePostsQuery.getFetchOptions())
  },
})

function Home() {
  return (
    <div className="p-2">
      <PostsList />
    </div>
  )
}
