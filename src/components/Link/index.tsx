import { ReactNode } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { StyledLink } from './styles'

interface LinkProps extends NavLinkProps {
  rightIcon?: ReactNode
  text: string
  leftIcon?: ReactNode
}

export function Link({ rightIcon, text, leftIcon, ...props }: LinkProps) {
  return (
    <StyledLink to={props.to}>
      {leftIcon && leftIcon}
      <span>{text}</span>
      {rightIcon && rightIcon}
    </StyledLink>
  )
}
