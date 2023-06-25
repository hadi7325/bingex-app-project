import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import "./copy-trading.scss"
import { TiArrowSortedDown } from "react-icons/ti"
import { BiFilterAlt } from "react-icons/bi"
import { MdOutlineArrowBackIosNew } from "react-icons/md"

import { useRef } from 'react';


const Traders = () => {
  const [activeTab, setActiveTab] = useState("Futures");
  const [showSearch, setShowSerach] = useState(false)
  const [showFilterTarders, setShowFilterTraders] = useState(false)
  const [showFilterTardersRange, setShowFilterTradersRange] = useState(false)
  const [defaultValueFilter, setDefaultValueFilter] = useState("Comperhensive")
  const [amountValue,setAMountValue] = useState("10")
  const [cumulativeProfitValue,setCumulativeProfitValue] = useState("1000")
  const [copiresValue,setCopiresValue] = useState("100")
  const [apyValue,setApyValue] = useState("500")
  const [cumulativeROIValue,setCumulativeROIValue] = useState("20")
  const catMenu = useRef(null)

  const closeOpenMenus = (e) => {
    if (catMenu.current && showFilterTarders && !catMenu.current.contains(e.target)) {
      setShowFilterTraders(false)
    }
  }

  const changeValueFilter = (value) => {
    setDefaultValueFilter(value)
    setShowFilterTraders(false)
  }
  const resetFilter = () => {
    setAMountValue("10")
    setCumulativeProfitValue("1000")
    setCopiresValue("100")
    setApyValue("500")
    setCumulativeROIValue("20")
  }
  
  const closeFilterRange = () =>{
    setAMountValue("10")
    setCumulativeProfitValue("1000")
    setCopiresValue("100")
    setApyValue("500")
    setCumulativeROIValue("20")
    setShowFilterTradersRange(false)
  }

  document.addEventListener("mousedown", closeOpenMenus)


  return (
    <div className="traders">
      <div className="traders-filter">
        <div className="filters">
          <div onClick={() => setActiveTab("Futures")} className={activeTab === "Futures" ? "tab active" : "tab"}>Futures</div>
          <div onClick={() => setActiveTab("Spot Grid")} className={activeTab === "Spot Grid" ? "tab active" : "tab"}>Spot Grid</div>
        </div>
        <div className="search-icon" onClick={() => setShowSerach(true)}><BsSearch /></div>

      </div>
      <div className={showSearch ? 'search-page active' : "search-page"}>
        <div className="search">
          <input type="text" placeholder='Search' />
          <div onClick={() => setShowSerach(false)} className="cancel">Cansel</div>
        </div>
      </div>
      <div className={showFilterTardersRange ? "search-traders-page active" : "search-traders-page"}>
        <div className="back" onClick={() => closeFilterRange()}><MdOutlineArrowBackIosNew /></div>
        <div className="title-page">Search Traders</div>
        <div className="filter-range">
          <div className="range">
            <div className="title">
              <div className="label">Amount(USDT)</div>
              <div className="amount">0-{amountValue},000+</div>
            </div>
            <input type="range" onChange={(e) => setAMountValue(e.target.value)} value={amountValue} min="0" max="10" />
          </div>
          <div className="range">
            <div className="title">
              <div className="label">Cumulative Profit(USDT)</div>
              <div className="amount">{cumulativeProfitValue}-1,000+</div>
            </div>
            <input type="range" onChange={(e) => setCumulativeProfitValue(e.target.value)} value={cumulativeProfitValue} min="0" max="1000" />
          </div>
          <div className="range">
            <div className="title">
              <div className="label">Copiers</div>
              <div className="amount">{copiresValue}-100+</div>
            </div>
            <input type="range" onChange={(e) => setCopiresValue(e.target.value)} value={copiresValue}  min="0" max="100" />
          </div>
          <div className="range">
            <div className="title">
              <div className="label">APY</div>
              <div className="amount">{apyValue}%-500%+</div>
            </div>
            <input type="range" onChange={(e) => setApyValue(e.target.value)} value={apyValue}  min="0" max="500" />
          </div>
          <div className="range">
            <div className="title">
              <div className="label">Cumulative ROI</div>
              <div className="amount">{cumulativeROIValue}%-20%</div>
            </div>
            <input type="range" onChange={(e) => setCumulativeROIValue(e.target.value)} value={cumulativeROIValue}  min="0" max="20" />
          </div>
        </div>
        <div className="action">
          <div className="reset" onClick={() => resetFilter()}>Reset</div>
          <div className="ok"  onClick={() => setShowFilterTradersRange(false)}>OK</div>
        </div>
      </div>

      <div className="page-trades">
        <div className="custom-container">
          <div className="title">
            <div className="default" onClick={() => setShowFilterTraders(true)}>
              <p>{defaultValueFilter}</p>
              <TiArrowSortedDown />

            </div>
            <div className={showFilterTarders ? "drop-menu active" : "drop-menu"}>
              <div className="content" ref={catMenu}>
                <div className="items">
                  <div className="title-filetr">Sort</div>
                  <div className="item" onClick={() => changeValueFilter("Comperhensive")}>Comperhensive</div>
                  <div className="item" onClick={() => changeValueFilter("Investment Decending")}>Investment Decending</div>
                  <div className="item" onClick={() => changeValueFilter("Copires Decending")}>Copires Decending</div>
                  <div className="item" onClick={() => changeValueFilter("Cumulative ROI Decending")}>Cumulative ROI Decending</div>
                  <div className="item" onClick={() => changeValueFilter("Cumulative Earnings Decending")}>Cumulative Earnings Decending</div>
                  <div className="item" onClick={() => changeValueFilter("APY Decending")}>APY Decending</div>
                </div>
                <div onClick={() => setShowFilterTraders(false)} className="cancel">Cansel</div>
              </div>
            </div>
            <div className="filter-icons"> <BiFilterAlt onClick={() => setShowFilterTradersRange(true)} />

            </div>

          </div>

          <div className={activeTab === 'Futures' ? "items futures active" : "items "}>
            <div className="item">
              <div className="name-box">
                <div className="intro">
                  <img src="/image/user.jpg" alt="" />
                  <div className="name">
                    <div className="text">moceon</div>
                    <div className="desc">BinGx Standard Futures</div>
                  </div>
                </div>
                <div className="copy-link">Copy</div>
              </div>
              <div className="description-box">
                <div className="grow">
                  <div className="value">+563%</div>
                  <div className="desc">30D ROI</div>
                </div>
                <div className="cpoies">
                  <div className="count">565</div>
                  <div className="label">Copiers</div>
                </div>
                <div className="risk">
                  <div className="count">3</div>
                  <div className="label">Risk</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="name-box">
                <div className="intro">
                  <img src="/image/user.jpg" alt="" />
                  <div className="name">
                    <div className="text">moceon</div>
                    <div className="desc">BinGx Standard Futures</div>
                  </div>
                </div>
                <div className="copy-link">Copy</div>
              </div>
              <div className="description-box">
                <div className="grow">
                  <div className="value">+563%</div>
                  <div className="desc">30D ROI</div>
                </div>
                <div className="cpoies">
                  <div className="count">565</div>
                  <div className="label">Copiers</div>
                </div>
                <div className="risk">
                  <div className="count">3</div>
                  <div className="label">Risk</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="name-box">
                <div className="intro">
                  <img src="/image/user.jpg" alt="" />
                  <div className="name">
                    <div className="text">moceon</div>
                    <div className="desc">BinGx Standard Futures</div>
                  </div>
                </div>
                <div className="copy-link">Copy</div>
              </div>
              <div className="description-box">
                <div className="grow">
                  <div className="value">+563%</div>
                  <div className="desc">30D ROI</div>
                </div>
                <div className="cpoies">
                  <div className="count">565</div>
                  <div className="label">Copiers</div>
                </div>
                <div className="risk">
                  <div className="count">3</div>
                  <div className="label">Risk</div>
                </div>
              </div>
            </div>
          </div>
          <div className={activeTab === 'Spot Grid' ? "items spot active" : "items "}>
            <div className="item spot">
              <div className="type">BONK/USDT</div>
              <div className="name-box">
                <div className="intro">
                  <img src="/image/user.jpg" alt="" />
                  <div className="name">
                    <div className="text">Rhitta</div>
                    <div className="desc">BinGx Spot Grid</div>
                  </div>
                </div>
                <div className="copy-link">Copy</div>
              </div>
              <div className="description-box">
                <div className="grow">
                  <div className="value">+563%</div>
                  <div className="desc">30D ROI</div>
                </div>
                <div className="cpoies">
                  <div className="count">565</div>
                  <div className="label">Copiers</div>
                </div>
                <div className="investment">
                  <div className="count">3</div>
                  <div className="label">Investment</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Traders