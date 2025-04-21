import { useContext } from "react"
import { Link } from "react-router"

import { UserContext } from "../../contexts/UserContext"

const NavBar = () => {
  const { user, setUser } = useContext(UserContext)

  const handleSignOut = () => {
    localStorage.removeItem('token')

    setUser(null)
  }

  return (
    <nav>
      {user ? (
        <ul>
          <li>
            Welcome, {user.username}
          </li>
          <li>
            <Link to='/fighterForm'>Fighter Form</Link>
          </li>
          <li>
          <Link to='/fighterList'>Fighter List</Link>
          </li>
          <li>
          <Link to='/fighterDetails'>Fighter Details</Link>
          </li>
          <li>
            <Link to='/' onClick={handleSignOut}>Sign Out</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/signin'>Sign In</Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar