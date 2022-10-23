import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CardWrapper = styled(NavLink)`
  height: 260px;
  max-height: 260px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 20px;
  background-color: ${(props) => props.theme.colors['base-post']};
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    line-clamp: 6;
    -webkit-box-orient: vertical;
    color: ${(props) => props.theme.colors['base-text']};
  }

  border: 2px solid ${(props) => props.theme.colors['base-post']};
  transition: all 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.colors['base-label']};
  }
`

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`

export const Title = styled.span`
  color: ${(props) => props.theme.colors['base-title']};
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 70%;
`

export const Time = styled.span`
  color: ${(props) => props.theme.colors['base-span']};
  font-size: ${(props) => props.theme.fontSizes[14]};
`
