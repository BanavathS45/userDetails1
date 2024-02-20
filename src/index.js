import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "./index.css";
import "./Srikanth/FormHandleC.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./stores/context/CartContext";
import App_A from "./Assignment/App_A";
import { ThemeProvider } from "./Assignment/Q7/ContextApi";
import { ReactDOM } from "react-dom";
import { Provider } from "react-redux";
import store from "./Assignment/Q9/store";
import Logintext from "./stores/Logintext";
import Login from "./stores/components/Q11/Login";
// import "./App.css";
import PageNation from "./stores/pages/PageNation";
import Protect from "./stores/context/Protect";
import Validation from "./Assignment/Q12/Vaildation";
import MultiStep from "./Assignment/page-2/MultiStep/MultiStepForm";
import Collapse from "./Assignment/page-2/Collapse";
import RouteringFile from "./Assignment/page-2/DynamicR/RouteringFile";
import Home from "./Assignment/page-2/DynamicR/Home";
import About from "./Assignment/page-2/DynamicR/About";
import Contact from "./Assignment/page-2/DynamicR/Contact";
import Routingpage from "./Portfolio/Rourtingpage";
import ProfileCard from "./Srikanth/ProfileCard";
import Comments from './Srikanth/Comment'
import Details from "./Srikanth/Details";
import UseState from "./Srikanth/UseState&HideShow";
import FormHandleC from "./Srikanth/FormHandleC";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
  <div>
  {/* // <BrowserRouter> */}
    {/* <Provider store={store}> */}
      {/* <React.StrictMode> */}
        {/* <CartProvider> */}
          {/* <ThemeProvider> */}
            {/* <Routes>
  <Route path='/app' element={<App/>}/>
 </Routes> */}
            {/* <Login/> */}
            {/* <Route path='/login' element={<Login/>}/> */}
            {/* <App /> */}
            {/* <Routes> 
      <Route path='/' element={<Protect/>} /> */}
            {/* <App />  */}
{/* <UseState/> */}
{/* <Validation/> */}
            {/* </Route>  */}
     
    {/* </Routes>  */}
            {/* <App_A/>   */}
            {/*---------------MultiSetpForm--------------------------  */}
            {/* <span style={{background:"green",color:"white"}}>React_05</span> <MultiStep/> */}

            {/*---------------MultiSetpForm--------------------------  */}

            {/* <span style={{background:"blue",color:"white"}}>React_06</span> <Collapse/> */}

            {/* ----------------Router-------------------- */}

            {/* <RouteringFile/>
        <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes> */}

            {/* <Routingpage /> */}
            {/* <ProfileCard/> */}
            {/* <Comments/> */}
         

            {/* <Logintext/> */}
            {/* <PageNation/> */}
          {/* </ThemeProvider> */}
        {/* </CartProvider>  */}
    {/* </React.StrictMode> */}
    {/* </Provider> */}
  {/* // </BrowserRouter> */}
  </div>
  <FormHandleC/>
   
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
