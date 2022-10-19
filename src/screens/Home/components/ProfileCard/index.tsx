import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
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

export function ProfileCard() {
  return (
    <CardWrapper>
      <ProfileImage
        src="https://github.com/ViniciusPonte.png"
        alt="Vinicius Ponte"
      />
      <CardContent>
        <CardHeader>
          <h1>Title</h1>
          <Link text="Github" to="/teste" rightIcon={<ArrowSquareOut />} />
        </CardHeader>

        <CardDescription>
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </span>
        </CardDescription>

        <TagsWrapper>
          <Tag leftIcon={<GithubLogo />} text="cameronwll" />
          <Tag leftIcon={<Buildings />} text="Rocketseat" />
          <Tag leftIcon={<Users />} text="32 seguidores" />
        </TagsWrapper>
      </CardContent>
    </CardWrapper>
  )
}
