import { ReactNode } from 'react'
import { TagWrapper } from './styles'

interface TagProps {
  text: string
  leftIcon: ReactNode
}

export function Tag({ text, leftIcon, ...props }: TagProps) {
  return (
    <TagWrapper>
      {leftIcon && leftIcon}
      <span>{text}</span>
    </TagWrapper>
  )
}
