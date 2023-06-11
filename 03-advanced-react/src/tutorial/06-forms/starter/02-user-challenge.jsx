import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)
  const handleSubmit = (e) => {
    e.preventDefault()
    setPeople([...people, { id: people.length + 1, name: name }])
    setName('')
  }

  const removeItem = (id) => {
    const newList = people.filter((person) => person.id !== id)
    setPeople(newList)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
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
      {people.map((person) => {
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
export default UserChallenge
