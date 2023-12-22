import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import style from '../styles/Posts.module.css'


export default function Posts() {
  const [postData, setPostData] = useState()
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
  const [pageArray, setPageArray] = useState([])

  async function fetchPosts(searchParams) {
    try {
      const responce = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${(searchParams.get('page') - 1) * 10}`)
      setPostData(responce.data);

      const pages = [] // Считаем количество страниц и создаем массив страниц
      for (let i = 1; i <= (Math.ceil(responce.data.total / 10)); i++) {
        pages.push(i)
      }
      setPageArray(pages)
    } catch (error) {
      console.error(`Responce ERROR`, error.message);
    }
  }

  useEffect(() => {
    fetchPosts(searchParams)
  }, [searchParams])

  function handleClick(target) {
    setSearchParams({ page: target.value })
  }

  return (
    <div className="wrapper">
        <div> 
          <div className={style.buttonBox}>
          {pageArray.map(item => 
            <button onClick={(e) => handleClick(e.target)} key={item} value={item}>{item}</button>
          )}
          </div>
          {postData?.posts.map(post => {
            return (
              <div key={post.id} className={style.post}>
                <Link to={`/Posts/${post.id}`}><h3 className={style.header}>{post.title}</h3></Link>
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
    </div>
  )
}