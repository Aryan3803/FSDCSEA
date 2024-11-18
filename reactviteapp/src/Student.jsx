import React from 'react'
import  './Student.css'


export default function Student(props) {
  
  return (
    <div>
        <div className="Icard">
      <table border = "1">
        <tbody>
        <tr><td colSpan={2}>{props.College}</td></tr>
        <tr><th>props.Roll_no</th><th>name</th><th>branch</th></tr>
        <tr><td>{props}</td><td>aayush</td><td>cse</td></tr>
        </tbody>
          
      </table>
      </div>
    </div>
  )
}