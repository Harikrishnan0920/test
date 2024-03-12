import React, { useCallback, useMemo, useState } from 'react'

function Usememo() {
 const[num,setNum]=useState(0)
const[states,setStates]=useState(false)
 

 const slowFunction = (num) => {
  console.log('Calling slow function');
  for(let i = 0; i <= 1000000000; i++){}
  return num * 2
 }
 
//  let double=useMemo(()=>slowFunction(num),[num])
 let double=useMemo(()=>slowFunction(num),[num]) 
//  let doubles=useCallback(()=>slowFunction(num),[num])
 console.warn(double)
    return (
    
    <div className='usestate'>
  <button className="btn btn-dark" onClick={((e)=>setStates((prev)=>!prev))}> click here</button>
   <input className="form-control " type='number' value={num}   onChange={((e)=>setNum(e.target.value))}></input>
<span>{double}</span>
<span>{states?"notice how fast it changes":"it takes time"}</span>
    </div>
  )
}

export default Usememo
