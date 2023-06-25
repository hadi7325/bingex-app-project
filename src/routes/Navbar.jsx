import React from 'react'
import { Link } from 'react-router-dom'
import {MdHomeFilled,MdBarChart,MdArticle,MdGroup} from "react-icons/md"
import {TbArrowsDoubleSwNe} from "react-icons/tb"
import {BsFillCreditCardFill} from "react-icons/bs"
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Navbar() {
  
    const location = useLocation()
  const {pathname} = location
   
   const splitLocation = pathname.split("/")
  
  return (
      <nav>
          <div className="links">
               <Link   className={ splitLocation[1] === "" ? "link active" : "link"} to='/'>
                   <div className="icon"><MdHomeFilled/></div>
                   <div className="lable">Home</div>
               </Link>
               <Link  className={  splitLocation[1] === "markets" ? "link active" : "link"} to='/markets'>
                   <div className="icon"><MdBarChart/></div>
                   <div className="lable">Markets</div>
               </Link>
               <Link  className={  splitLocation[1] === "spot" ? "link active" : "link"} to='/spot/single-post'>
                   <div className="icon"><TbArrowsDoubleSwNe/></div>
                   <div className="lable">Spot</div>
               </Link>
               <Link  className={ splitLocation[1] === "futuers" ? "link active" : "link"} to='/futuers/perpetual'>
                   <div className="icon"><MdArticle/></div>
                   <div className="lable">Futures</div>
               </Link>
               <Link  className={   splitLocation[1] === "copy-trading" ? "link active" : "link"} to='/copy-trading/traders'>
                   <div className="icon"><MdGroup/></div>
                   <div className="lable">Copy Trading</div>
               </Link>
               <Link  className={splitLocation[1] === "assets" ? "link active" : "link"} to='/assets/overview'>
                   <div className="icon"><BsFillCreditCardFill/></div>
                   <div className="lable">Assets</div>
               </Link>
          </div>
      </nav>
  )
}

export default Navbar