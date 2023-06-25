import React from 'react'
import { BsThreeDots } from "react-icons/bs"
import { MdKeyboardArrowDown } from "react-icons/md"
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import { BiFilterAlt } from "react-icons/bi"
import { TiArrowSortedDown } from "react-icons/ti"
import { BsSearch } from "react-icons/bs";
import { useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import data from "./data/data-type.json"
import changeCurrency from '../../Util'
import "./spot.scss"


const P2P = () => {

  const [activeTabP2p, setActiveTabP2p] = useState("Express")
  const [activeBuyAndSell, setActiveBuyAndSell] = useState("I Want to Buy")
  const [activeBuyAndSell2, setActiveBuyAndSell2] = useState("I Want to Buy")
  const [showList, setShowList] = useState(false)
  const [type, setType] = useState("USD")
  const [img, setImg] = useState("/image/BTC.webp")
  const [menuHeaderPoint, setMenuHeaderPoint] = useState(false)
  const [filterTab, setFilterTab] = useState("")
  const [menuPayment, setMenuPayment] = useState(false)
  const [paymentValue, setPaymentValue] = useState("ALl Payments")
  const catMenu = useRef(null)
  const catMenu1 = useRef(null)

  const methodMenu = useRef(null)
  const changeTypeCurrency = (name, img) => {
    setType(name)
    setShowList(false)
    setImg(img)
  }


  const changePaymentMethod = (value) => {
    setPaymentValue(value)
    setMenuPayment(false)
  }



  const closeOpenMenus = (e) => {

    if (methodMenu.current && menuPayment && !methodMenu.current.contains(e.target)) {
      setMenuPayment(false)

    }
    if (catMenu.current && filterTab && !catMenu.current.contains(e.target)) {

      setFilterTab(false)


    }
    if (catMenu1.current && menuHeaderPoint && !catMenu1.current.contains(e.target)) {

      setMenuHeaderPoint(false)


    }


  }
  document.addEventListener("mousedown", closeOpenMenus)



  const changeTab = (value) => {
    setActiveBuyAndSell(value)
  }


  return (
    <div className="p2p">

      <div className="header-p2p">
        <div className="custom-container">
          <div className="header-content">
            <Link to="/spot/single-post" className="back"><MdOutlineArrowBackIosNew /></Link>
            <div className="menu">
              <div className="currency-type" onClick={() => setShowList(true)}>
                <img src={img} alt="" />
                <div className="name">{type}</div>
                <MdKeyboardArrowDown />
              </div>
              <div className="drop-menu" ref={catMenu1}>
                <div className="icon" onClick={() => setMenuHeaderPoint(!menuHeaderPoint)}><BsThreeDots></BsThreeDots></div>
                <ul className={menuHeaderPoint ? "drop active" : "drop"}>
                  <li>Beginners Guide</li>
                  <li>Payment method</li>
                </ul>
              </div>
            </div>
            <div className={showList ? "type-list active" : "type-list"}>
              <div className="search-box">
                <div className="search">
                  <BsSearch />
                  <input type="text" placeholder='Enter currency' />
                </div>
                <div className="cancel" onClick={() => setShowList(false)}>Cancel</div>
              </div>

              <div className="list">
                {
                  data.types.map((item) => (
                    <div className="item" key={item.id} onClick={() => changeTypeCurrency(item.name, item.img)}>
                      <img src={item.img} alt="" />
                      <div className="name">{item.name}</div>
                    </div>

                  ))
                }
              </div>
            </div>
          </div>
          <div className="tab-p2p">
            <span className={activeTabP2p === 'Express' ? "tab active" : "tab"} onClick={() => setActiveTabP2p("Express")}>Express</span>
            <span className={activeTabP2p === 'Flexible' ? "tab active" : "tab"} onClick={() => setActiveTabP2p("Flexible")}>Flexible</span>
          </div>
        </div>

      </div>
      <div className={activeTabP2p === 'Express' ? "buy-sell-crypto active" : "buy-sell-crypto"}>
        <div className="custom-container">
          <div className="tab-buy-sell">
            <div onClick={() => changeTab("I Want to Buy")} className={activeBuyAndSell === "I Want to Buy" ? "tab active" : "tab"}>I Want to Buy</div>
            <div onClick={() => changeTab("I Want to Sell")} className={activeBuyAndSell === "I Want to Sell" ? "tab active" : "tab"}>I Want to Sell</div>
          </div>
          <div className="amount">
            <div className="title">{activeBuyAndSell === 'I Want to Sell' ? "Value" : "Amount"}</div>
            <input type="number" />
            <div className="action">
              <div className="title">Price $ 1.03</div>
              <div className={activeBuyAndSell === 'I Want to Sell' ? "action-btn red" : "action-btn"}>{
                activeBuyAndSell === 'I Want to Sell' ? "Sell with 0 Fee" : "Buy with 0 Fee"
              }</div>
            </div>
          </div>

        </div>


      </div>
      <div className="custom-container">
        <div className={activeTabP2p === 'Flexible' ? "flexible-tab active" : "flexible-tab"}>
          <div className="tab-buy-sell">
            <div onClick={() => setActiveBuyAndSell2("I Want to Buy")} className={activeBuyAndSell2 === "I Want to Buy" ? "tab active" : "tab"} >I Want to Buy</div>
            <div onClick={() => setActiveBuyAndSell2("I Want to Sell")} className={activeBuyAndSell2 === "I Want to Sell" ? "tab active" : "tab"} >I Want to Sell</div>
          </div>
          <div className="title">
            <div className="left">
              <div className="item amount-box" ref={catMenu}>
                <div onClick={() => setFilterTab(!filterTab)}  >Amount   <TiArrowSortedDown /></div>
                <div className={filterTab ? "drop-amount active" : "drop-amount"}>
                  <input type="number" placeholder='Enter amount' />
                  <div className="btns">
                    <div className="reset" onClick={() => setFilterTab(false)}>Reset</div>
                    <div className="ok" onClick={() => setFilterTab(false)}>OK</div>
                  </div>
                </div>



              </div>
              <div className="item payment-box">
                <div className="text" onClick={() => setMenuPayment(true)}>{paymentValue} <TiArrowSortedDown /></div>

                <div className={menuPayment ? "payment-method-menu active" : "payment-method-menu"}>
                  <div className="content" ref={methodMenu}>
                    <div className="items">
                      <div className="element" onClick={() => changePaymentMethod("All Payments")}>All Payments</div>
                      <div className="element" onClick={() => changePaymentMethod("Bank Card")}>Bank Card</div>
                      <div className="element" onClick={() => changePaymentMethod("JKOPAY")}>JKOPAY</div>
                      <div className="element" onClick={() => changePaymentMethod("Gcash")}>Gcash</div>
                      <div className="element" onClick={() => changePaymentMethod("Line Pay")}>50</div>
                      <div className="element" onClick={() => changePaymentMethod("Bank Transfer")}>Bank Transfer</div>
                      <div className="element" onClick={() => changePaymentMethod("wise")}>wise</div>
                    </div>
                    <div className="cancel" onClick={() => setMenuPayment(false)}>Cancel</div>
                  </div>
                </div>
              </div>

            </div>
            <div className="right">
              <BiFilterAlt />
            </div>
          </div>
          <div className="items">
            <div className="crypto-user-box">
              <div className="user">
                <div className="user-name">
                  <img src="/image/user.jpg" alt="" />
                  <div className="text">eric97</div>
                </div>
                <div className="trade-count">30D Trades 117</div>
              </div>
              <div className="price">${changeCurrency(23266)}</div>

              <div className="action">
                <div className="infromation">
                  <div className="available item">
                    <div className="text">Available</div>
                    <div className="amount">13153 USDT</div>
                  </div>
                  <div className="limit item">
                    <div className="text">Limit</div>
                    <div className="amount">$100 - $500</div>
                  </div>

                </div>
                <div className="btn-action">Buy USDT</div>
              </div>

            </div>
            <div className="crypto-user-box">
              <div className="user">
                <div className="user-name">
                  <img src="/image/user.jpg" alt="" />
                  <div className="text">eric97</div>
                </div>
                <div className="trade-count">30D Trades 117</div>
              </div>
              <div className="price">${changeCurrency(23266)}</div>

              <div className="action">
                <div className="infromation">
                  <div className="available item">
                    <div className="text">Available</div>
                    <div className="amount">13153 USDT</div>
                  </div>
                  <div className="limit item">
                    <div className="text">Limit</div>
                    <div className="amount">$100 - $500</div>
                  </div>

                </div>
                <div className="btn-action">Buy USDT</div>
              </div>

            </div>

            <div className="crypto-user-box">
              <div className="user">
                <div className="user-name">
                  <img src="/image/user.jpg" alt="" />
                  <div className="text">eric97</div>
                </div>
                <div className="trade-count">30D Trades 117</div>
              </div>
              <div className="price">${changeCurrency(23266)}</div>

              <div className="action">
                <div className="infromation">
                  <div className="available item">
                    <div className="text">Available</div>
                    <div className="amount">13153 USDT</div>
                  </div>
                  <div className="limit item">
                    <div className="text">Limit</div>
                    <div className="amount">$100 - $500</div>
                  </div>

                </div>
                <div className="btn-action">Buy USDT</div>
              </div>

            </div>


          </div>
        </div>

      </div>
    </div >
  )
}

export default P2P