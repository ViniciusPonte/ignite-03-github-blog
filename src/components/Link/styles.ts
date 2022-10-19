import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;

  svg {
    width: 12px;
    height: 12px;
  }

  span {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSizes[12]};
    font-weight: bold;
  }
`
