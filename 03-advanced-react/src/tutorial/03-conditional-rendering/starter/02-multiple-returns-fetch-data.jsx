import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url)
        const user = await response.json()
        console.log(user)
        setUser(user)
      } catch (error) {
        console.log(error)
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchUser()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>There was an error</h2>
  }

  const { avatar_url, name, company, bio } = user

  return (
    <div>
      <section>
        <img
          style={{ width: '150px', borderRadius: '25px' }}
          src={avatar_url}
          alt={name}
        />
        <div>
          <h2>{name}</h2>
          <h4>Works At {company}</h4>
          <p>{bio}</p>
        </div>
      </section>
    </div>
  )
}
export default MultipleReturnsFetchData
