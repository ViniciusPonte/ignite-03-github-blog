import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPost } from '../../@types/post'
import { PostContent } from './components/PostContent'
import { PostHeader } from './components/PostHeader'
import { PostDetailContainer } from './styles'

export function PostDetail() {
  const { number } = useParams()
  const [post, setPost] = useState<IPost | null>(null)

  const activeRepository = 'ignite-03-github-blog'
  const activeProfile = 'ViniciusPonte'

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/repos/${activeProfile}/${activeRepository}/issues/${number}`,
      )
      .then((response) => setPost(response.data))
      .catch((err) => console.log(err))
  }, [])

  console.log(post)

  if (post) {
    return (
      <PostDetailContainer>
        <PostHeader post={post} />

        <PostContent postBody={post.body} />
      </PostDetailContainer>
    )
  } else {
    return null
  }
}
