import './App.css'
import { PostList } from './Components/PostList'
import { UserList } from './Components/UserList'
import { UserListLoading } from './Components/UserListLoading'

function App() {

  return (
    <>
      <h1>hello fetch</h1>
      {/* <PostList /> */}
      {/* <UserList /> */}
      <UserListLoading />

    </>
  )
}

export default App
