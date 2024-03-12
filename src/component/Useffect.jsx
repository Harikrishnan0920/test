import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Commonvalue } from '../App';
function Useffect() {
  const[change,Setchange]=useState(0)

  const[just,Setjustclick]=useState(0)
  
  const [todos, setTodos] = useState([]);
  
  let {message,key}=useContext(Commonvalue)


   

//syntax
useEffect(()=>{
  if(change<0){
    Setchange(0)
  }
 



},[change])





  //  useEffect(()=>{

  //   console.log("i capture whenever number up is updated")
  //  },[change])

   
  //  useEffect(()=>{

  //   console.log("i capture whenever there is a render")
  //  })


  //  usecase







  return <>
    {/* // why we use 
    // three steps 
    //getting rendererd everytime 
    //with a console log and a function with settimeout function
    //include mock api if you want  */}

    <div className='usestate'>
      <button className="btn btn-dark" onClick={(()=>Setchange((prev)=>prev+1))}>number up</button>
        {change}
        <button className="btn btn-dark" onClick={(()=>Setchange((prev)=>prev-1))}>number down</button>
       <button className="btn btn-dark" onClick={(e)=>Setjustclick((prev)=>prev+1)}>render the component</button>
    </div>
    {/* from parent 
<div>{message}</div> */}



    </>
}

export default Useffect
