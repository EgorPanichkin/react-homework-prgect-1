import axios from "axios"
import { useEffect, useState } from "react";
import style from '../styles/Posts.module.css'

export default function Posts() {
  const [postData, setPostData] = useState()

  async function fetchPosts() {
    try {
      const responce = await axios.get('https://dummyjson.com/posts')
      console.log(responce);
      setPostData(responce.data)
    } catch (error) {
      console.error(`Responce ERROR`);
    }
  }
  
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="wrapper">
      {postData && (
        <div>
          {postData.posts.map(post => {
            return (
              <div key={post.id} className={style.post}>
                <h3 className={style.header}>{post.title}</h3>
                <p>{post.body}</p>
                <div className={style.tagBox}>
                  {post.tags.map((tag) => {
                    return (
                      <p key={post.id+tag} className={style.tag}>{tag}</p>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

