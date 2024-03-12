import React, { useEffect, useRef, useState } from 'react'
import Usestate from './Usestate'

function Useref() {
 const[numberup,setNumberup]=useState('')
//  const[rendercount,setRendercount]=Usestate()

const rendercount=useRef(1)
//rendercount.count
const focusoninput=useRef()//we can use this to get a ref from any html tag directly

useEffect(()=>{
    rendercount.current=rendercount.current+1
})
// wrong method 


// useEffect(()=>{
//     setRendercount((prev)=>prev+1)//this will go into a infinite loop because state is getting updated for times
// })
 

 
 
    return (
    <div className='usestate'>
       
<span>we need to count the how many renders</span>
<input className="form-control " ref={focusoninput} value={numberup} onChange={(e)=>setNumberup(e.target.value)}></input>
   
<span>rendered these times : {rendercount.current}</span>

<button className="btn btn-dark" onClick={(e)=>focusoninput.current.focus()}>click to focus on the input</button>





    </div>
  )
}

export default Useref
