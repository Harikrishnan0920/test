import React, { useEffect, useState } from "react";

function Usestate() {
  let Role = "Teacher";

  let Changing_the_variable_name = () => {
    Role = "Student";
  };


 

  const [role, SetRole] = useState("Teacher");//it preserves
  //syntax explain
  const [variable,setVariable]=useState('inital')
 

 
  let Changing_the_State_name = () => {
    SetRole("Student");
  };


  console.log("This page is rerendered");


  return (
    // why we cant use variable
    //show example in code
    //explain why usestate
    //show example in code




    <div className="usestate">
      <div>
        {" "}
        <h6> by using variable </h6>
        <span>{Role}</span><br/>
        <button className="btn btn-dark" onClick={() => Changing_the_variable_name()}>
          click here to change the role to student
        </button>
      </div>




      {/* changing using variable will not re render the component hence we end up not seeing the updated value */}
      <div>
        <div style={{marginTop:'82px'}}>


          {" "}
          <h6> by using State </h6>
          <span>{role}</span><br/>
          <button className="btn btn-dark" onClick={() => Changing_the_State_name()}>
            click here to change the role to student
          </button>
        </div>
      </div>
    </div>




  );
}

export default Usestate;
//familiar with the concept of re rendering 
