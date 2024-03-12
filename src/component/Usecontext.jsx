import React, { useContext } from 'react'
import { Commonvalue } from '../App'

function Usecontext() {
    let {type}=useContext(Commonvalue)
  return (
    <div className='usestate'>
    <span>Typing here will change the value in usecontext globaly</span>
    <input className="form-control " onChange={(e)=>type(e.target.value)}></input>
    </div>
  )
}

export default Usecontext
