import { useContext } from 'react'
import { NavbarContext } from './Navbar'

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext)
  //return 'hello world'
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className='btn' onClick={logout}>
            Log Out
          </button>
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  )
}
export default UserContainer
