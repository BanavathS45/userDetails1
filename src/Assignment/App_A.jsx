import React,{useState} from "react";
import Greet from './Q1/Greet'
import FormHandle from "./Q2/FormHandle"; 
import Api from "./Q3/Api";
import StateMan from "./Q4/StateMan";
import Routing from "./Q5/Routing";
import Card from "./Q6/Card";
// import ContextApi from "./Q7/ContextApi";
import Header from "./Q7/Header";
import Fedein from "./Q8/Fedein";
import Counter from "./Q9/Counter";
import Login from "../stores/components/Q11/Login";
import Validation from "./Q12/Vaildation";
import '../Assignment/App_A.css'
import LifeCycle from "../react/LifeCycle";
import StateAndProps from "../react/PropsandState/Props";
import Rendering from "../react/oRendering/Rendering";
import { Routes,Route } from "react-router-dom";
import ReLogin from "../react/oRendering/ReLogin";
import ReactRouter from "../react/ReactRouter/ReactRouter";
// import Q11_Closure from './Q11_Closure'
// import MultiStepForm from "./page-2/MultiStep/MultiStepForm";
 
 const App_A = () => {
   
   return (

     <div className="ms-5">
 
    <h1 className="text-center mt-5">Front End Developer - Paper - 1</h1>
 
    <span style={{background:"red",color:"white"}}>React_04</span> <ReactRouter/>
    <span style={{background:"green",color:"white"}}>React_03</span> 

      <Routes>
        <Route path="/" element={<Rendering />}/>
        <Route path="/reLogin" element={<ReLogin />}/>
      </Routes>
    <span style={{background:"red",color:"white"}}>React_02</span><StateAndProps/>
<span style={{background:"blue",color:"white"}}>React_01</span><LifeCycle/>

   <span style={{background:"red"}}>Q1</span><Greet islogedin={true} />
  <span style={{background:"green"}}>Q2</span> <FormHandle/>
    <span style={{background:"blue"}}>Q3</span><Api/>
    <span style={{background:"red"}}>Q4</span><StateMan/>
    <span style={{background:"green"}}>Q5</span><Routing/>
    <span style={{background:"blue"}}>Q6</span><Card/>
    {/* <span style={{background:"red"}}>Q7</span><ContextApi/> */}
    <span style={{background:"green",color:"white"}}>Q7</span><Header/>
    <span style={{background:"blue"}}>Q8</span><Fedein/>
    <span style={{background:"red"}}>Q9</span><Counter/>
    <span style={{background:"red"}}>Q11</span><Login/>
    <span style={{background:"red"}}>Q12</span>< Validation/>
    {/* <span style={{background:"red"}}>Q11_Closure</span><Q11_Closure/> */}


    

 
    </div>
   
  )
}

export default App_A