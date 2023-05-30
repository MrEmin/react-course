import { useState } from 'react'

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('')

  // truthy
  const [name, setName] = useState('susan')

  const codeExample = text || 'hello world'

  return (
    <div>
      <h4>Falsy OR : {text || 'hello world'}</h4>
      <h4>Falsy AND : {text && 'hello world'}</h4>
      <h4>Truthy OR : {name || 'HELLO'}</h4>
      <h4>Truthy AND : {name && 'HELLO'}</h4>
      {codeExample}
    </div>
  )
}
export default ShortCircuitOverview
