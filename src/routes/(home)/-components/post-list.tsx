import { usePostsQuery } from '~/shared/api'
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/ui/card'

export function PostsList() {
  const { data: posts } = usePostsQuery()

  return (
    <div className="grid grid-cols-4 gap-6">
      {posts?.map(post => (
        <Card key={post.id}>
          <CardHeader>
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full rounded-md"
            />

            <CardTitle>
              {post.title}
            </CardTitle>
          </CardHeader>

          <CardContent className={`
            h-[3em] overflow-hidden leading-6 text-ellipsis
          `}
          >
            {post.content}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
