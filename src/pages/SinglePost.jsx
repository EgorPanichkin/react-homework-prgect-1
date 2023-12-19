import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import axios from 'axios'

export default function SinglePost() {
  const { postId } = useParams()
  const [postData, setPostData] = useState({})

  async function getPost(id) {
    try {
      console.log(id);
      const responce = await axios.get(`https://dummyjson.com/posts/${id}`)
      setPostData(responce.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPost(postId)
  }, [postId])


  return (
    <div className="wrapper">
      <h3>{postData.title}</h3>
      <p>{postData.body}</p>
      <Outlet />
    </div>
  )
}
