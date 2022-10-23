import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { IPost } from '../../@types/post'
import { IProfile } from '../../@types/profile'
import { ProfileCard } from './components/ProfileCard'
import { PublishCard } from './components/PublishCard'
import { SearchInput } from './components/SearchInput'
import _ from 'lodash'
import { HomeContainer, PostsList } from './styles'

export function Home() {
  const [user, setUser] = useState<IProfile | null>(null)
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState<IPost[]>([])

  const activeRepository = 'ignite-03-github-blog'
  const activeProfile = 'ViniciusPonte'

  const fetchPosts = useCallback(async () => {
    await axios
      .get(
        `https://api.github.com/search/issues?q=${encodeURIComponent(
          search,
        )}repo:${activeProfile}/${activeRepository}`,
      )
      .then((response) => {
        console.log(response.data.items)
        const updatedItems = response.data.items.map((item: any) => {
          return {
            id: item.id,
            body: item.body,
            comments_url: item.comments_url,
            title: item.title,
            updated_at: item.updated_at,
            user: {
              login: item.user.login,
            },
            number: item.number,
          }
        })

        setPosts(updatedItems)
      })
      .catch((err) => console.log(err))
  }, [search])

  function onChangeSearch(newValue: string) {
    setSearch(newValue)
  }

  useEffect(() => {
    axios
      .get('https://api.github.com/users/ViniciusPonte')
      .then((response) =>
        setUser({
          avatar_url: response.data.avatar_url,
          name: response.data.name,
          html_url: response.data.html_url,
          bio: response.data.bio,
          followers: response.data.followers,
          company: response.data.company,
          login: response.data.login,
        }),
      )
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    const getData = setTimeout(() => {
      fetchPosts()
    }, 1000)

    return () => clearTimeout(getData)
  }, [fetchPosts, search])

  return (
    <HomeContainer>
      <ProfileCard user={user} />

      <SearchInput
        quantity={posts.length}
        search={search}
        onChangeSearch={onChangeSearch}
      />

      <PostsList>
        {posts.map((post) => (
          <PublishCard key={post.id} post={post} />
        ))}
      </PostsList>
    </HomeContainer>
  )
}
