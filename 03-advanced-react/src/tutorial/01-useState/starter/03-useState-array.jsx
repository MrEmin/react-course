import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <div>
      {people.map(({ id, name }) => {
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        )
      })}

      <button
        type='button'
        style={{ marginTop: '1rem' }}
        className='btn'
        onClick={() => setPeople([])}
      >
        Clear Items
      </button>
    </div>
  )
}

export default UseStateArray
