import { useNavigate, useParams } from "react-router-dom";

export default function DeleteBtn() {
  const nav = useNavigate()
  const { postId } =useParams()

  return (
    <button className="delete" onClick={() => nav(`/Posts/${postId}/delete`)}>DELETE</button>
  )
}
