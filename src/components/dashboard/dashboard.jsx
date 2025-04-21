import { useContext } from "react"

import { UserContext } from "../../contexts/UserContext"

const Dashboard = () => {
  const { user } = useContext(UserContext)

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This dashboard page is for you to see all users
      </p>
    </main>
  )
}

export default Dashboard