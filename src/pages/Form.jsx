import axios from "axios"
import { useState } from "react"
import style from "../styles/Form.module.css"

export default function Form() {
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const newPost = {
      Title: title,
      Post: post,
      userId: 5
    }
    const postRequest = await axios.post('https://dummyjson.com/posts/add', newPost)
    console.log(postRequest);
    if (postRequest.status === 200) {
      setTitle('')
      setPost('')
      alert('Post published successfull')
    }
  }

  function handleChange(target) {
    switch (target.id) {
      case 'title':
        setTitle(target.value)
        break;
      case 'post':
        setPost(target.value)
        break;
      default:
        break;
    }
  }

  return (
    <div className="wrapper">
      <h3>Write new post</h3>
      <form className={style.form}>
        <label>
          Title:
          <input className={style.titleInput} value={title} onChange={(e) => handleChange(e.target)} type="text" id="title"/>
        </label>
        <label>
          Post:
          <textarea className={style.postInput} value={post} onChange={(e) => handleChange(e.target)} type="text" id="post"/>
        </label>
        <button className={style.submitBtn} type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}
