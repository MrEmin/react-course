import { useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  const [user, setUser] = useState({ name: 'John' })

  const logOut = () => {
    setUser({ name: null })
  }

  return (
    <div>
      Navbar
      <NavLinks user={user} logOut={logOut} />
    </div>
  )
}
export default Navbar
