import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import ReactMarkdown from 'react-markdown'
import { IProfile } from '../../../../@types/profile'
import { Link } from '../../../../components/Link'
import { Tag } from '../../../../components/Tag'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardWrapper,
  ProfileImage,
  TagsWrapper,
} from './styles'

interface ProfileCardProps {
  user: IProfile | null
}

export function ProfileCard({ user }: ProfileCardProps) {
  if (user) {
    return (
      <CardWrapper>
        <ProfileImage src={user.avatar_url} alt={user.name} />
        <CardContent>
          <CardHeader>
            <h1>{user.name}</h1>
            <Link
              text="Github"
              to={user.html_url}
              rightIcon={<ArrowSquareOut />}
              externalLink
            />
          </CardHeader>

          <CardDescription>
            <span>{user.bio}</span>
          </CardDescription>

          <TagsWrapper>
            <Tag leftIcon={<GithubLogo />} text={user.login} />
            <Tag leftIcon={<Buildings />} text={user.company} />
            <Tag leftIcon={<Users />} text={`${user.followers} seguidores`} />
          </TagsWrapper>
        </CardContent>
      </CardWrapper>
    )
  } else {
    return null
  }
}
