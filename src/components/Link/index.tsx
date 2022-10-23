import { ReactNode } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { StyledExternalLink, StyledLink } from './styles'

interface LinkProps extends NavLinkProps {
  rightIcon?: ReactNode
  text: string
  leftIcon?: ReactNode
  externalLink?: boolean
}

export function Link({
  rightIcon,
  text,
  leftIcon,
  externalLink,
  ...props
}: LinkProps) {
  if (externalLink) {
    return (
      <StyledExternalLink href={String(props.to)} target="_blank">
        {leftIcon && leftIcon}
        <span>{text}</span>
        {rightIcon && rightIcon}
      </StyledExternalLink>
    )
  } else {
    return (
      <StyledLink to={props.to}>
        {leftIcon && leftIcon}
        <span>{text}</span>
        {rightIcon && rightIcon}
      </StyledLink>
    )
  }
}
