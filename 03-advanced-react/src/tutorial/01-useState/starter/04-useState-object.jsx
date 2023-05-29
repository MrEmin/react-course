import { useState } from 'react'

const UseStateObject = () => {
  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(24)
  const [hobby, setHobby] = useState('Read Books')

  const displayPerson = () => {
    setName('John')
    setAge(28)
    setHobby('Scream At The Computer')
  }

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
