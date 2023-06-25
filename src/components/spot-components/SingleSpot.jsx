import React from 'react'
import HeaderSpot from './HeaderSpot'
import { AiOutlineMenuUnfold } from "react-icons/ai"
import { TbChartCandle } from "react-icons/tb"
import { BsThreeDots } from "react-icons/bs"
import { BsSearch } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti"
import { useState } from 'react'
import changeCurrency from '../../Util'
import { useRef } from 'react'
import data from "../markets-component/data/data-crypto.json"
import { Link } from 'react-router-dom'
import "./spot.scss"

const SingleSpot = () => {

    const [activeSelect, setActiveSelect] = useState("buy")
    const [active, setActive] = useState("All")
    const [counter, setCounter] = useState(1253153)
    const [menu, setMenu] = useState(false)
    const [limtDrop, setLimitDrop] = useState(false)
    const [threePointMenu, setThreePointMenu] = useState(false)
    const [secondDrop, setSecondDrop] = useState(false)
    const [menuFormatPrice, setMenuFromatPrice] = useState(false)
    const [formatPriceValue, setFormatPriceValue] = useState("1")
    const [menuCrypto, setMenuCrypto] = useState(false)
    const [menuItem, setMenuItem] = useState("Market")
    const [activeOrder, setActiveOrder] = useState("Open Orders")
    const catMenu = useRef(null)
    const cat2Menu = useRef(null)
    const cat3Menu = useRef(null)
    const cat4Menu = useRef(null)


    const categories = ["All", ...new Set(data.crypto.map((item) => item.cat))]

    const [items, setItems] = useState(data.crypto)


    const filterProduct = (categori) => {
        setActive(categori)
        if (categori === "All") {
            return setItems(data.crypto)
        }

        const newItem = data.crypto.filter((item) => item.cat === categori)
        setItems(newItem)
    }


    const closeOpenMenus = (e) => {
        if (catMenu.current && menuFormatPrice && !catMenu.current.contains(e.target)) {
            setMenuFromatPrice(false)
        }
        if (cat3Menu.current && threePointMenu && !cat3Menu.current.contains(e.target)) {
            setThreePointMenu(false)
        }
        if (cat2Menu.current && menuCrypto && !cat2Menu.current.contains(e.target)) {
            setMenuCrypto(false)
        }
        if (cat4Menu.current && menu && !cat4Menu.current.contains(e.target)) {
            setMenu(false)
        }

    }


    const changeMenuItem = (value) => {
        setMenuItem(value)
        if (value === "Limit") {
            setLimitDrop(true)
            setSecondDrop(true)
        } else if (value === "TP/SL") {
            setLimitDrop(false)
            setSecondDrop(true)

        } else if (value === "Trigger") {
            setLimitDrop(false)
            setSecondDrop(true)
        } else {
            setLimitDrop(false)
            setSecondDrop(false)
        }

    }
    const changeFormatPriceValue = (value) => {
        setFormatPriceValue(value)
        setMenuFromatPrice(false)
    }
    const change = (status) => {
        if (status === "sell") {
            setActiveSelect("sell")
        } else {
            setActiveSelect("buy")
        }
    }

    document.addEventListener('mousedown', closeOpenMenus)
    return (
        <>
            <HeaderSpot />

            <div className="custom-container">
                <div className="crypto-name">
                    <div className="name-box" onClick={() => setMenuCrypto(true)}>
                        <AiOutlineMenuUnfold />
                        <div className="name">BTC/USDT</div>
                        <div className="changes">-0.5%</div>
                    </div>
                    <div className="menu">
                        <Link to="/spot/single-post/single-crypto"><TbChartCandle /></Link>
                        <div className="drop-menu" ref={cat3Menu}>
                            <BsThreeDots onClick={() => setThreePointMenu(!threePointMenu)} >
                            </BsThreeDots>
                            <ul className={threePointMenu ? "drop active" : "drop"}>
                                <li >Add Favorites</li>
                                <li >Spot Grid</li>
                                <li >Spot Infinity Grid</li>
                                <li >Prefernces</li>
                            </ul>

                        </div>
                    </div>

                    <div className={menuCrypto ? "crypto-list-menu active" : "crypto-list-menu"}>
                        <div className="content" ref={cat2Menu} >
                            <div className="search-box">
                                <BsSearch />
                                <input type="text" placeholder='Search' />
                            </div>
                            <div className="crypto-list-markets-menu">
                                <div className="menu-item">
                                    {
                                        categories.map((item, index) => (
                                            <div onClick={() => filterProduct(item)} key={index} className={item === active ? "item active" : "item"}>{item}</div>
                                        ))
                                    }
                                </div>

                            </div>
                            <div className="title">
                                <div className="name">Name</div>
                                <div className="price">
                                    <div className="last-price">Last price</div>
                                    <div className="change">Change</div>
                                </div>
                            </div>
                            <div className="crypto-list-item">
                                {
                                    items.map((item) =>

                                    (
                                        <div className="item" key={item.id}>
                                            <div className="name">{item.name}</div>
                                            <div className="desc">
                                                <div className="price">
                                                    <div className="most">{changeCurrency(item.most)}</div>
                                                    <div className={item.status.includes("-") ? "percentage red" : "percentage"}>{item.status}</div>
                                                </div>
                                            </div>

                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="crypto-information">
                    <div className="buy-sell">
                        <div className="box-buy-sell">
                            <span className={activeSelect === "buy" ? "buy active " : "buy"} onClick={() => change("buy")}>Buy</span>
                            <span className={activeSelect === "sell" ? "sell active " : "sell"} onClick={() => change("sell")}>Sell</span>
                        </div>
                        <div className="type-menu" ref={cat4Menu}>
                            <div className="default" onClick={() => setMenu(!menu)}>{menuItem} <TiArrowSortedDown className={menu ? " active" : ""} />

                                <ul  className={menu ? "drop-menu active" : "drop-menu"}>
                                    <li onClick={() => changeMenuItem("Market")}>Market</li>
                                    <li onClick={() => changeMenuItem("Limit")}>Limit</li>
                                    <li onClick={() => changeMenuItem("TP/SL")}>TP/SL</li>
                                    <li onClick={() => changeMenuItem("Trigger")}>Trigger</li>
                                </ul>

                            </div>
                        </div>
                        <div className="amount">
                            <input className='text' type="text" placeholder='Amount' />
                            <div className={limtDrop ? "limit active" : "limit"}>
                                <div className="value">{changeCurrency(counter)}</div>
                                <div className="controll">
                                    <div className="minus" onClick={() => setCounter(counter - 1)}>-</div>
                                    <div className="plus" onClick={() => setCounter(counter + 1)}>+</div>
                                </div>
                            </div>
                            <input className={secondDrop ? "text2 active" : "text2"} type="text" placeholder='Amount' />
                            <input className='range' type="range" />
                        </div>
                        <div className="available">Available 0.00 USDT</div>

                        <div className={activeSelect === "sell" ? "buy-link red" : "buy-link"}>{activeSelect === "buy" ? "Buy BTC" : "Sell BTC"}</div>


                    </div>
                    <div className="momentary-changes">
                        <div className="title">
                            <div className="price"><p>Price</p><span>(USDT)</span></div>
                            <div className="amount"><p>Amount</p><span>(BTC)</span></div>
                        </div>
                        <div className="content">
                            <div className="item 1 -red">
                                <div className="width"></div>
                                <div className="price">{changeCurrency(23565867)} </div>
                                <div className="amount">{changeCurrency(565652)}</div>
                            </div>
                            <div className="item 2 -red">
                                <div className="width"></div>

                                <div className="price">{changeCurrency(45565645)}</div>
                                <div className="amount">{changeCurrency(546456)}</div>
                            </div>
                            <div className="item 3 -red">
                                <div className="width"></div>

                                <div className="price">{changeCurrency(343543)}</div>
                                <div className="amount">{changeCurrency(3435)}</div>
                            </div>
                            <div className="item 4 -red">
                                <div className="width"></div>

                                <div className="price">{changeCurrency(834333343)}</div>
                                <div className="amount">{changeCurrency(345384)}</div>
                            </div>
                            <div className="item 5 -red">
                                <div className="width"></div>

                                <div className="price">{changeCurrency(348345)}</div>
                                <div className="amount">{changeCurrency(3434)}</div>
                            </div>
                            <div className="main-price">
                                <p>{changeCurrency(245531)}</p>
                                <span>{changeCurrency(12354)}</span>
                            </div>
                            <div className="item 1 -green">
                                <div className="width"></div>

                                <div className="price">{changeCurrency(245253)}</div>
                                <div className="amount">{changeCurrency(25424)}</div>
                            </div>
                            <div className="item 2 -green">
                                <div className="width"></div>

                                <div className="price">{changeCurrency(524)}</div>
                                <div className="amount">{changeCurrency(456)}</div>
                            </div>
                            <div className="item 3 -green">
                                <div className="width"></div>

                                <div className="price">{changeCurrency(245245)}</div>
                                <div className="amount">{changeCurrency(24)}</div>
                            </div>
                            <div className="item 4 -green">
                                <div className="width"></div>

                                <div className="price">{changeCurrency(45245)}</div>
                                <div className="amount">{changeCurrency(24)}</div>
                            </div>
                            <div className="item 5 -green">
                                <div className="width"></div>

                                <div className="price">{changeCurrency(23565867)}</div>
                                <div className="amount">{changeCurrency(23565867)}</div>
                            </div>
                        </div>
                        <div className="filter-fromat-price">
                            <div className="default-format" onClick={() => setMenuFromatPrice(true)}>
                                <div className="text">{formatPriceValue}</div>
                                <TiArrowSortedDown />
                            </div>

                            <div className={menuFormatPrice ? "format-price-menu active" : "format-price-menu"}>
                                <div className="content" ref={catMenu}>
                                    <div className="items">
                                        <div className="element" onClick={() => changeFormatPriceValue("0.01")}>0.01</div>
                                        <div className="element" onClick={() => changeFormatPriceValue("0.1")}>0.1</div>
                                        <div className="element" onClick={() => changeFormatPriceValue("1")}>1</div>
                                        <div className="element" onClick={() => changeFormatPriceValue("10")}>10</div>
                                        <div className="element" onClick={() => changeFormatPriceValue("50")}>50</div>
                                        <div className="element" onClick={() => changeFormatPriceValue("100")}>100</div>
                                    </div>
                                    <div className="cancel" onClick={() => setMenuFromatPrice(false)}>Cancel</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="orders">
                    <div className="tab-order">
                        <span className={activeOrder === "Open Orders" ? "tab active" : "tab"} onClick={() => setActiveOrder("Open Orders")}>Open Orders</span>
                        <span className={activeOrder === "Assets" ? "tab active" : "tab"} onClick={() => setActiveOrder("Assets")}>Assets</span>
                    </div>
                    <div className="order-list">
                        <p>No order yet</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleSpot