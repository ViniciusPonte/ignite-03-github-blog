import { formatDistanceToNow } from 'date-fns'
import { CardHeader, CardWrapper, Time, Title } from './styles'
import ptBR from 'date-fns/locale/pt-BR'
import { IPost } from '../../../../@types/post'

interface PublishCardProps {
  post: IPost
}

export function PublishCard({ post }: PublishCardProps) {
  return (
    <CardWrapper to={`/issue/${post.number}`}>
      <CardHeader>
        <Title>{post.title}</Title>
        <Time>
          {formatDistanceToNow(new Date(post.updated_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </Time>
      </CardHeader>

      <p>{post.body}</p>
    </CardWrapper>
  )
}
