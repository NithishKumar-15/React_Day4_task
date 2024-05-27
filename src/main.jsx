import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from "./Components/NavBarComp";
import CompAfterNav from "./Components/CompAfterNav";
import Footer from './Components/Footer';
import ThirdComp from "./Components/ThirdComp";
import CompFour from "./Components/CompFour";
import FifthComp from './Components/FifthComp';
import SixthComp from './Components/SixthComp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <NavBar></NavBar>
    <CompAfterNav></CompAfterNav>
    <ThirdComp></ThirdComp>
    <CompFour></CompFour>
    <FifthComp></FifthComp>
    <SixthComp></SixthComp>
    <Footer></Footer>
  </>
)
