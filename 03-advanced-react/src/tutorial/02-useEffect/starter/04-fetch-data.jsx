import { useState, useEffect, useCallback } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.log('Hataa', error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, avatar_url, login, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url} target='_blank'>
                  profile
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
