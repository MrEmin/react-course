const UserContainer = ({ user, logOut }) => {
  return (
    <div>
      {!user.name ? <p>please login</p> : <h2>{user.name}</h2>}
      <button onClick={() => logOut()}>Log Out</button>
    </div>
  )
}
export default UserContainer
