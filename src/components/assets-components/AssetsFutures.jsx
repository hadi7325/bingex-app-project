import React from 'react'
import HeaderAssets from './HeaderAssets'
import { TiArrowSortedDown } from "react-icons/ti"
import { BiTransferAlt } from "react-icons/bi"
import { BsSearch } from "react-icons/bs";
import { BsEye } from "react-icons/bs"
import { useRef } from 'react'
import { useState } from 'react'
import "./assets.scss"

export const AssetsFutures = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [valueActiveMenu, setValueActiveMenu] = useState("USDT")

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

            <div className="item transfer">
              <div className="icon"><BiTransferAlt /></div>
              <div className="text">Transfer</div>
            </div>

          </div>
        </div>
      </div>
      <div className="custom-container">
        <div className="search">
          <div className="head">
            <div className="left">
              <input type="checkbox" />
              <div className="text">Hide 0 Balances</div>
            </div>
            <div className="right">
              <BsSearch />
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
