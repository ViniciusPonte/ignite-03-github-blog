import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './screens/Home'
import { PostDetail } from './screens/PostDetail'

export function Router() {
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue/:number" element={<PostDetail />} />
      </Route>
    </Routes>
  )
}
