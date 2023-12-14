import { Link, Outlet } from "react-router-dom";
import style from '../styles/Layout.module.css'

export default function Layout() {
  return (
    <div className="container">
      <nav>
        <ul className={style.navList}>
          <li ><Link className={style.link} to='/'>Home</Link></li>
          <li><Link className={style.link} to='/Posts'>Posts</Link></li>
          <li><Link className={style.link} to='/Form'>Form</Link></li>
        </ul>
      </nav>
      <Outlet />
      <footer>
        <p className="wrapper">Geeks 2023</p>
      </footer>
    </div>
  )
}
