import React, { useCallback, useMemo, useState } from 'react'
import List from './List'

function Usecallback() {
  const[numberup,Setnumberup]=useState(0)
  const[trigger,setTrigger]=useState(0)

 let  getnnumbers=useCallback(()=>{
return [numberup,numberup+1]
  },[numberup])

console.log(getnnumbers)

    return <>
    <div className='usestate'>
    <input className="form-control "   value={numberup} type='number' onChange={((e)=>Setnumberup(e.target.value))}/>
    <input className="form-control "  value={trigger} type='number' onChange={((e)=>setTrigger(e.target.value))}/>
    </div>
    <div></div>
    <List fun={getnnumbers}/>
    </>
}

export default Usecallback
