import coverImg from '../../assets/images/cover.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coverImg} alt="" />
    </HeaderContainer>
  )
}
