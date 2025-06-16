import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [error, setError] = useState('')

  function addValue() {
    if(count >= 20){
      setCount(count)
      setError('value above 20')
    }
    else{
      setCount(count+1)
      setError('')
    }
  }

  function subValue() {
    if(count<=0){
      setCount(count)
      setError('value below 0')
    }
    else{
    setCount(count-1)
    setError('')
    }
  }


  return (
    <>
      <h1>Counter: {count}</h1>
      
      <button onClick={addValue}>Add Value</button>
      <br></br>
      <button onClick={subValue}>Sub Value</button>
      <br></br>
      <button onClick={() => setCount(0)}>Reset</button>
      <h2>{error}</h2>
    </>
  )
}

export default App


//add more functionality
//like error handling, max and min values, etc.