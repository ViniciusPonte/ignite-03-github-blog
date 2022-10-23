import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;

  svg {
    width: 12px;
    height: 12px;
  }

  span {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSizes[12]};
    font-weight: bold;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.blue};
  }
`

export const StyledExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;

  svg {
    width: 12px;
    height: 12px;
  }

  span {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSizes[12]};
    font-weight: bold;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.blue};
  }
`
