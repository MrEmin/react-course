import UserContainer from './UserContainer'

const NavLinks = ({ user, logOut }) => {
  return (
    <div>
      NavLinks
      <UserContainer user={user} logOut={logOut} />
    </div>
  )
}
export default NavLinks
