import { useState } from 'react'

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(true)
  return (
    <div>
      <button onClick={() => setShowAlert(!showAlert)}>click</button>
      {showAlert && <Alert />}
    </div>
  )
}

const Alert = () => {
  return <div className='alert alert-danger'>Danger Alert</div>
}

export default ToggleChallenge
