import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;

  svg {
    color: ${(props) => props.theme.colors['base-label']};
    width: 18px;
    height: 18px;
  }

  span {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.fontSizes[16]};
  }
`
