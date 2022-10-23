export interface IPost {
  id: number
  body: string
  comments_url: string
  title: string
  updated_at: string
  user: {
    login: string
  }
  number: number
  html_url: string
  comments: number
}
