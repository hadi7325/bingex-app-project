import React from 'react'
import HeaderAssets from './HeaderAssets'
import { TiArrowSortedDown } from "react-icons/ti"
import { CgEnter } from "react-icons/cg"
import { MdOutlineExitToApp } from "react-icons/md"
import { BiTransferAlt } from "react-icons/bi"
import { RiExchangeFundsFill } from "react-icons/ri"
import { BsSearch } from "react-icons/bs";
import data from "./data/data-crypto.json"
import { BsEye } from "react-icons/bs"
import { useState } from 'react'
import { useRef } from 'react'
import "./assets.scss"


export const AsstesFunds = () => {


  const [valueActiveMenu, setValueActiveMenu] = useState("USDT")
  const [showCrypto,setShowCrypto] = useState(true)
  const [activeMenu, setActiveMenu] = useState(false)
  const catMenu = useRef(null)

  const closeOpenMenus = (e) => {
    if (catMenu.current && activeMenu && !catMenu.current.contains(e.target)) {
      setActiveMenu(false)
    }
  }
  const changeValue = (value) => {
    setValueActiveMenu(value)
    setActiveMenu(false)
  }

  document.addEventListener("click", closeOpenMenus)
  return (
    <>
      <HeaderAssets />
      <>
        <div className="access-box">
          <div className="custom-container">
            <div className="filter-access" ref={catMenu}>
              <div className="default" onClick={() => setActiveMenu(!activeMenu)}>Total Asset Value({valueActiveMenu}) <TiArrowSortedDown />
              </div>
              <div className={activeMenu ? "drop active" : "drop"}>
                <li onClick={() => changeValue("USDT")}>USDT</li>
                <li onClick={() => changeValue("BTC")}>BTC</li>
              </div>
              <div className="hidden"><BsEye /></div>
            </div>
            <div className="price">
              <div className="main-price">0.00</div>
              <div className="desc">$0.00</div>
            </div>
            <div className="action">
              <div className="item">
                <div className="icon"><CgEnter /></div>
                <div className="text">Deposit</div>
              </div>
              <div className="item">
                <div className="icon"><MdOutlineExitToApp /></div>
                <div className="text">Withdraw</div>
              </div>
              <div className="item">
                <div className="icon"><BiTransferAlt /></div>
                <div className="text">Transfer</div>
              </div>
              <div className="item">
                <div className="icon"><RiExchangeFundsFill /></div>
                <div className="text">Convert</div>
              </div>
            </div>
          </div>
        </div>

        <div className="funds">
          <div className="custom-container">
            <div className="title">Asset List</div>
            <div className="search">
              <div className="head">
                <div className="left">
                  <input type="checkbox" onChange={() =>setShowCrypto(!showCrypto)} />
                  <div className="text">Hide 0 Balances</div>
                </div>
                <div className="right">
                  <BsSearch />
                </div>
              </div>
              <div className="label">
                   <div className="item">QTY|Value</div>
                   <div className="item">Last|Cost Price</div>
              </div>
            </div>

            
                  <div className={showCrypto ? "crypto-list-items active" : "crypto-list-items"}>
                       {
                        data.crypto.map((item) => (
                            <div className="item" key={item.id}>
                                 <div className="name">
                                    <img src={item.img} alt="" />
                                    <div className="text">{item.name}</div>
                                 </div>
                                 <div className="price">
                                    <div className="value">
                                       <p>0.00</p>
                                       <span>$0.00</span>
                                    </div>
                                    <div className="most">
                                      <div className="text">{item.most}</div>
                                      <div className="desc">--</div>
                                    </div>
                                 </div>
                            </div>
                        ))
                       }
                    </div> 

                    <div className={!showCrypto ? "message active" : "message"}>No Record</div>    

                       
                      
          </div>
        </div>
      </>

    </>
  )
}
