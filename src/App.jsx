import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Form from './pages/Form'
import SinglePost from './pages/SinglePost'
import DeletePost from './components/DeletePost'
import DeleteBtn from './components/DeleteBtn'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/Posts' element={<Posts />}/>
          <Route path='/Form' element={<Form />}/>
          <Route path='/Posts/:postId' element={<SinglePost />}>
            <Route path='/Posts/:postId' element={<DeleteBtn />}/>
            <Route path='/Posts/:postId/delete' element={<DeletePost />}/>
          </Route>
          
          <Route path='*' element={<ErrorPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
