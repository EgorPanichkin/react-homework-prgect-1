import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

export default function DeletePost() {
  const { postId } = useParams()
  const nav = useNavigate()

  async function handleDelete() {
    const deleteRequest = await axios.delete(`https://dummyjson.com/posts/${postId}`)
    console.log(deleteRequest);
    nav('/Posts')
  }

  return (
    <div className="wrapper">
      <h2>Are you sure you want to delete the post (ID {postId})?</h2>
      <button className="yesBtn" onClick={handleDelete}>Yes</button>
      <button className="delete" onClick={() => nav(-1)}>No</button>
    </div>
  )
}
