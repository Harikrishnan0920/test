import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Usecontext from "./Usecontext";
import { useContext } from "react";
import { Commonvalue } from "../App";
function Headingpage() {
  let navigate = useNavigate();
  let { message, type } = useContext(Commonvalue);

  return (
    <div className="">
      <h3 className="important">Important Hooks</h3>
      <div className="nav">
        <button className="btn btn-dark" onClick={() => navigate("/usestate")}>useState</button>
        <button className="btn btn-dark" onClick={() => navigate("/useeffect")}>useEffect</button>
        <button className="btn btn-dark" onClick={() => navigate("/usememo")}>useMemo</button>
        <button className="btn btn-dark" onClick={() => navigate("/useref")}>useRef</button>
        <button className="btn btn-dark" onClick={() => navigate("/usecallback")}>usecallback</button>

        <button className="btn btn-dark" onClick={() => navigate("/useeffectunmount")}>
          UseeffectUnmount
        </button>
        <button className="btn btn-dark" onClick={() => navigate("/usecontext")}>usecontext</button>
      </div>
      <span style={{fontSize:"medium"}}>dynamically changing value that can accessed from any components : {message}</span>
    </div>
  );
}

export default Headingpage;
