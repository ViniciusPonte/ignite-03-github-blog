import ReactMarkdown from 'react-markdown'
import { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react'
import { PostContentContainer } from './styles'

interface PostContentProps {
  postBody: string
}

export function PostContent({ postBody }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown>{postBody}</ReactMarkdown>
    </PostContentContainer>
  )
}
