import React from 'react'
import Student from './student'

function App() {
  let a=12
  const mystyle={
    backgroundColor:"red"
  }
  return (
    <div style={mystyle}>ABES engineering college
    <div style={mystyle}>ABES engineering college</div>
    <div style={mystyle}>
      <Student/>
    </div>
    </div>
    
  )
}
export default App