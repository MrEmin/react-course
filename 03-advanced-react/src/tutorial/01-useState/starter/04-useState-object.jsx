import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  })

  const displayPerson = () => {
    //setPerson({ name: 'john', age: 28, hobby: 'scream at the computer' })
    setPerson({ ...person, name: 'susan' })
  }

  const { name, age, hobby } = person

  return (
    <>
      <h2>UseState Object Example</h2>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys To : {hobby}</h4>
      <button type='button' onClick={displayPerson} className='btn'>
        Show John
      </button>
    </>
  )
}

export default UseStateObject
