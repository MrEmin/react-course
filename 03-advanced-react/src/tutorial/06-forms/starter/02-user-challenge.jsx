import { useState } from 'react'
import { data } from '../../../data'

const UsersChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    const fakeId = users.length + 1
    const newUsers = { id: fakeId, name: name }
    const updatedUsers = [...users, newUsers]
    setUsers(updatedUsers)
    setName('')
  }

  const removeItem = (id) => {
    const newUsers = users.filter((person) => person.id !== id)
    setUsers(newUsers)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add Users</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h2>Userss</h2>
      {users.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type='button'
              className='btn'
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UsersChallenge
