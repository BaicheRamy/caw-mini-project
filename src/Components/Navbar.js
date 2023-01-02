import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {ReactComponent as Logo} from "./logoipsum-288.svg"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <Logo />
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/contacts">Contacts</CustomLink>
      </ul>
    </nav>
  )
}

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}