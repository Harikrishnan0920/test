import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Usestate from './component/Usestate'; 
import Useffect from './component/Useffect';
import Headingpage from './component/Headingpage';
import UseeffectUnmount from './component/UseeffectUnmount';
import Usecontext from './component/Usecontext';
import Usememo from './component/Usememo';
import Useref from './component/Useref';
import Usecallback from './component/Usecallback';
export let Commonvalue=React.createContext()
function App() {
const[type,setType]=useState('edit the text')

let typetext=(e)=>{
  setType(e)
}


return <>
<Commonvalue.Provider value={{ message: type, type:typetext}}>

<BrowserRouter>
<div className='title'>
<Headingpage/>
</div>
<Routes>
    <Route path='/usestate' element={<Usestate/>}/>
    <Route path='/useeffect' element={<Useffect/>}/>
    <Route path='/useeffectunmount' element={<UseeffectUnmount/>}/>
    <Route path='/usecontext' element={<Usecontext/>}/>
    <Route path='/usememo' element={<Usememo/>}/>
    <Route path='/useref' element={<Useref/>}/>
    <Route path='/usecallback' element={<Usecallback/>}/>



  </Routes>
</BrowserRouter>

</Commonvalue.Provider>
</>
}

export default App;
