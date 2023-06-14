const UserContainer = ({ user, logout }) => {
  console.log(user)
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
