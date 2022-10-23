import { formatDistanceToNow } from 'date-fns'
import {
  ArrowLeft,
  ArrowSquareOut,
  Calendar,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { IPost } from '../../../../@types/post'
import { Link } from '../../../../components/Link'
import { Tag } from '../../../../components/Tag'
import {
  CardContent,
  CardHeader,
  CardWrapper,
  TagsWrapper,
  Title,
} from './styles'
import ptBR from 'date-fns/locale/pt-BR'

interface PostHeaderProps {
  post: IPost | null
}

export function PostHeader({ post }: PostHeaderProps) {
  if (post) {
    return (
      <CardWrapper>
        <CardContent>
          <CardHeader>
            <Link text="Voltar" to="/" leftIcon={<ArrowLeft />} />
            <Link
              text="Github"
              to={post.html_url}
              rightIcon={<ArrowSquareOut />}
              externalLink
            />
          </CardHeader>

          <Title>{post.title}</Title>

          <TagsWrapper>
            <Tag leftIcon={<GithubLogo />} text={post.user.login} />
            <Tag
              leftIcon={<Calendar />}
              text={formatDistanceToNow(new Date(post.updated_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            />
            <Tag
              leftIcon={<ChatCircle />}
              text={`${post.comments} comentários`}
            />
          </TagsWrapper>
        </CardContent>
      </CardWrapper>
    )
  } else {
    return null
  }
}
