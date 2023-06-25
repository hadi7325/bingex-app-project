import React from 'react'
import { Link } from 'react-router-dom'
import {MdHomeFilled,MdBarChart,MdArticle,MdGroup} from "react-icons/md"
import {TbArrowsDoubleSwNe} from "react-icons/tb"
import {BsFillCreditCardFill} from "react-icons/bs"
import { useState } from 'react'

function Navbar() {

  

   const [active,setActive] = useState("Home")
    
   const changeTab = (status) => {

        setActive(status)
   }
  return (
      <nav>
          <div className="links">
               <Link  onClick={() => changeTab("Home")} className={ active === "Home" ? "link active" : "link"} to='Bingex-Webapp-mobile-version'>
                   <div className="icon"><MdHomeFilled/></div>
                   <div className="lable">Home</div>
               </Link>
               <Link onClick={() => changeTab("Markets")} className={ active === "Markets" ? "link active" : "link"} to='/markets'>
                   <div className="icon"><MdBarChart/></div>
                   <div className="lable">Markets</div>
               </Link>
               <Link  onClick={() => changeTab("Spot")}className={ active === "Spot" ? "link active" : "link"} to='/spot/single-post'>
                   <div className="icon"><TbArrowsDoubleSwNe/></div>
                   <div className="lable">Spot</div>
               </Link>
               <Link onClick={() => changeTab("Futures")} className={ active === "Futures" ? "link active" : "link"} to='/futuers/perpetual'>
                   <div className="icon"><MdArticle/></div>
                   <div className="lable">Futures</div>
               </Link>
               <Link onClick={() => changeTab("Copy Trading")} className={ active === "Copy Trading" ? "link active" : "link"} to='/copy-trading/traders'>
                   <div className="icon"><MdGroup/></div>
                   <div className="lable">Copy Trading</div>
               </Link>
               <Link onClick={() => changeTab("Assets")} className={ active === "Assets" ? "link active" : "link"} to='/assets/overview'>
                   <div className="icon"><BsFillCreditCardFill/></div>
                   <div className="lable">Assets</div>
               </Link>
          </div>
      </nav>
  )
}

export default Navbar