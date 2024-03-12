import React, { useEffect, useState } from 'react'

function List({fun}) {
  const[getnum,Setgetnum]=useState([])
  useEffect(()=>{
    
    Setgetnum(fun())
    console.warn('updated in link component')
  },[fun])//object ==object is not same because their refernce is differnect 


  
    return (
    <div className='usestate ' style={{ position: 'relative',top: '58vh'}}>
    <span>list rendered</span>
      {getnum&&getnum.map((e,i)=>{return <div class="card"> <span class="card-body">{e}</span> 
</div>
      })}
    </div>
  )
}

export default List
