import React, { useState } from 'react'
import pilla from './download.jpg'

function Imagemanipulation() {
    const[height,setHeight]=useState(150)
    const[width,setWidth]=useState(150)
    const[red,setRed]=useState()
    const[green,setGreen]=useState()
    const[blue,setBlue]=useState()
    const[rotate,setrotate]=useState()
    function IncreaseHeight(){
        setHeight(height+10)

    }
    
    function IncreaseWidth(){
        setWidth(width+10)

    }
    function Reset(){
        setHeight(150)
        setWidth(150)
        setRed(255)
        setBlue(255)
        setGreen(255)
    }
    function colorChange(){
        setRed(Math.random()*255)
        setBlue(Math.random()*255)
        setGreen(Math.random()*255)
    }
    function rotation(){
        const img = document.getElementById('image')
        img.style.transform = `rotateZ(${setrotate(rotate + 15)}deg)`
    }
  return (
    <div style={{height:"600px" , width:"700px",border:"2px solid red",marginLeft:"200px",backgroundColor:`RGB(${red},${green},${blue})`}}>
        <div style={{paddingLeft:"100px",marginLeft:"170px"}}>
            <img id='image' src={pilla} height={height} width={width} style={{transform:`rotateZ(${rotate}deg)`}}/>
            <br />
        </div>
        <div>
            <button onClick={IncreaseHeight}>Inhance Height</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={IncreaseWidth}>Inhance Width</button>&nbsp;&nbsp;&nbsp;
            <button onClick={Reset}>Reset</button>&nbsp;&nbsp;&nbsp;
            <button onClick={rotation}>rotate</button>&nbsp;&nbsp;&nbsp;
            <button onClick={colorChange}>background color change</button>&nbsp;&nbsp;
         </div>
    </div>
  )
}

export default Imagemanipulation