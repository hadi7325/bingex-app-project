import React from 'react'
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import { AiOutlineMenuUnfold } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { TiArrowSortedDown } from "react-icons/ti"
import { CgArrowsExpandRight } from "react-icons/cg"
import { useRef } from 'react'
import { BsSearch } from "react-icons/bs";
import TradingViewWidget from 'react-tradingview-widget';
import data from "../markets-component/data/data-crypto.json"
import changeCurrency from '../../Util'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./futures.scss"

const SingleCryptoFuture = () => {

    const categories = ["All", ...new Set(data.crypto.map((item) => item.cat))]

    const [activeTime, setActiveTime] = useState("5 min")
    const [activeMoreTime, setActibeMoreTime] = useState(false)
    const [activeMoreIndicators, setActiveMoreIndicators] = useState(false)
    const [valueTime, setValueTime] = useState("More")
    const [activeTabDesc, setActiveTabDesc] = useState("Order Book")
    const [menuCrypto, setMenuCrypto] = useState(false)
    const [active, setActive] = useState("All")
    const [menuFormatPrice, setMenuFromatPrice] = useState(false)
    const [formatPriceValue, setFormatPriceValue] = useState("1")
    const [items, setItems] = useState(data.crypto)


    const cat2Menu = useRef(null)
    const catMenuFormatPrice = useRef(null)

    const filterProduct = (categori) => {
        setActive(categori)
        if (categori === "All") {
            return setItems(data.crypto)
        }

        const newItem = data.crypto.filter((item) => item.cat === categori)
        setItems(newItem)
    }

    const showMoreTime = () => {
        setActibeMoreTime(!activeMoreTime)
        setActiveMoreIndicators(false)
    }
    const showMoreIndicators = () => {
        setActiveMoreIndicators(!activeMoreIndicators)
        setActibeMoreTime(false)
    }
    const changeValueTime = (value) => {
        setValueTime(value)
        setActibeMoreTime(false)
        setActiveTime("")
    }

    const closeOpenMenus = (e) => {

        if (cat2Menu.current && menuCrypto && !cat2Menu.current.contains(e.target)) {
            setMenuCrypto(false)
        }
        if (catMenuFormatPrice.current && menuFormatPrice  && !catMenuFormatPrice.current.contains(e.target)) {
            setMenuFromatPrice(false)
        }


    }
    const changeFormatPriceValue = (value) => {
        setFormatPriceValue(value)
        setMenuFromatPrice(false)
    }


    document.addEventListener('mousedown', closeOpenMenus)




    return (
        <div className="single-crypto">
            <div className="header-single-crypto">
                <div className="custom-container">
                    <div className="header-title">
                        <Link to="/futuers/perpetual" className="back"><MdOutlineArrowBackIosNew /></Link>
                        <div className="menu-icon" onClick={() => setMenuCrypto(true)}><AiOutlineMenuUnfold /> <div className="name">BTC/USDT</div></div>
                        <div className="star"><AiOutlineStar /></div>
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


                    <div className="price-box">
                        <div className="main-price">
                            <p>{changeCurrency(2215616)}</p>
                            <div className="desc">
                                <span>456462</span>
                                <div className="change">+23%</div>
                            </div>
                        </div>
                        <div className="Recent-change">
                            <div className="item">
                                <div className="time">24h High</div>
                                <div className="price">{changeCurrency(65232653)}</div>
                            </div>
                            <div className="item">
                                <div className="time">24h Low</div>
                                <div className="price">{changeCurrency(543453)}</div>
                            </div>
                            <div className="item">
                                <div className="time">24h Vol.(USDT)</div>
                                <div className="price">{changeCurrency(54353)}</div>
                            </div>
                            <div className="item">
                                <div className="time">24h Vol.(BTC)</div>
                                <div className="price">{changeCurrency(454534)}</div>
                            </div>
                        </div>

                    </div>

                    <div className="nav-time">
                        <div className={activeTime === "1 min" ? "item active" : "item"} onClick={() => setActiveTime("1 min")} >1 min</div>
                        <div className={activeTime === "5 min" ? "item active" : "item"} onClick={() => setActiveTime("5 min")} >5 min</div>
                        <div className={activeTime === "15 min" ? "item active" : "item"} onClick={() => setActiveTime("15 min")} >15 min</div>
                        <div className={activeTime === "30 min" ? "item active" : "item"} onClick={() => setActiveTime("30 min")} >30 min</div>
                        <div className={activeTime === '' ? "item more active" : "item more"} onClick={() => showMoreTime()}><div className="text">{valueTime}</div>  <TiArrowSortedDown />
                            <div className={activeMoreTime ? "more-time active" : "more-time"}>
                                <div className="element" onClick={() => changeValueTime("Time")}>Time</div>
                                <div className="element" onClick={() => changeValueTime("3 min")}>3 min</div>
                                <div className="element" onClick={() => changeValueTime("1 H")}>1 H</div>
                                <div className="element" onClick={() => changeValueTime("2 H")}>2 H</div>
                            </div>

                        </div>
                        <div className="item indicators" onClick={() => showMoreIndicators()} ><div className="text">Indicators</div>  <TiArrowSortedDown />

                            <div className={activeMoreIndicators ? "more-indicators active" : "more-indicators"}>
                                <div className="element" >MA</div>
                                <div className="element" >EMA</div>
                                <div className="element" >boxMuller</div>
                                <div className="element" >VOL</div>
                            </div>
                        </div>
                        <CgArrowsExpandRight />
                    </div>
                    <div className="chart">
                        <TradingViewWidget symbol="NASDAQ:AAPL" autosize />

                    </div>
                    <div className="description-crypto">
                        <div className="description-tab">
                            <div className={activeTabDesc === "Order Book" ? "tab active" : "tab"}
                                onClick={() => setActiveTabDesc("Order Book")} >Order Book</div>
                            <div className={activeTabDesc === "Trades" ? "tab active" : "tab"}
                                onClick={() => setActiveTabDesc("Trades")} >Trades</div>
                            <div className={activeTabDesc === "Coin Info" ? "tab active" : "tab"}
                                onClick={() => setActiveTabDesc("Coin Info")} >Coin Info</div>


                        </div>


                        <div className={activeTabDesc === 'Order Book' ? "order-book-section active" : "order-book-section"}>
                            <div className="title-1">
                                <div className="item">Buy</div>
                                <div className="item">Sell</div>
                                <div className="filter-fromat-price">
                                    <div className="default-format" onClick={() => setMenuFromatPrice(true)}>
                                        <div className="text">{formatPriceValue}</div>
                                        <TiArrowSortedDown />
                                    </div>

                                    <div className={menuFormatPrice ? "format-price-menu active" : "format-price-menu"}>
                                        <div className="contents" ref={catMenuFormatPrice}>
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
                                </div>                            </div>
                            <div className="title-2">
                                <div className="item">Amount(BTC)</div>
                                <div className="item">Price</div>
                                <div className="item">Amount(BTC)</div>
                            </div>

                            <div className="content">
                                <div className="red">
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
                                </div>

                                <div className="green"> <div className="item 1 -green">
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
                            </div>
                        </div>
                        <div className={activeTabDesc === 'Trades' ? "trade-section active" : "trade-section"}>
                            <div className="tades-title">
                                <div className="item">Time</div>
                                <div className="item">Price</div>
                                <div className="item">Amount</div>
                            </div>
                            <div className="trade-items">
                                <div className="item">
                                    <div className="time">15 : 38 : 15</div>
                                    <div className="price">{changeCurrency(65065265)}</div>
                                    <div className="amount">{changeCurrency(65065265)}</div>
                                </div>
                                <div className="item">
                                    <div className="time">15 : 38 : 15</div>
                                    <div className="price">{changeCurrency(65065265)}</div>
                                    <div className="amount">{changeCurrency(65065265)}</div>
                                </div>
                                <div className="item">
                                    <div className="time">15 : 38 : 15</div>
                                    <div className="price">{changeCurrency(65065265)}</div>
                                    <div className="amount">{changeCurrency(65065265)}</div>
                                </div>
                                <div className="item">
                                    <div className="time">15 : 38 : 15</div>
                                    <div className="price">{changeCurrency(65065265)}</div>
                                    <div className="amount">{changeCurrency(65065265)}</div>
                                </div>
                                <div className="item">
                                    <div className="time">15 : 38 : 15</div>
                                    <div className="price">{changeCurrency(65065265)}</div>
                                    <div className="amount">{changeCurrency(65065265)}</div>
                                </div>
                                <div className="item">
                                    <div className="time">15 : 38 : 15</div>
                                    <div className="price">{changeCurrency(65065265)}</div>
                                    <div className="amount">{changeCurrency(65065265)}</div>
                                </div>
                                <div className="item">
                                    <div className="time">15 : 38 : 15</div>
                                    <div className="price">{changeCurrency(65065265)}</div>
                                    <div className="amount">{changeCurrency(65065265)}</div>
                                </div>
                            </div>
                        </div>
                        <div className={activeTabDesc === 'Coin Info' ? "coin-info-section active" : "trade-section"}>
                            <div className="title">BitCoin</div>
                            <div className="informaion">
                                <div className="item">
                                    <div className="text">Publication Date</div>
                                    <div className="amount">2008/5/3</div>
                                </div>
                                <div className="item">
                                    <div className="text">Max Supply</div>
                                    <div className="amount">{changeCurrency(21542124)}</div>
                                </div>
                                <div className="item">
                                    <div className="text">CirCulating Supply</div>
                                    <div className="amount">{changeCurrency(4515453)}</div>
                                </div>
                            </div>
                            <div className="links">
                                <div className="title">Link</div>
                                <div className="link">
                                    <a href="">Official Website</a>
                                    <a href="">CoinMArketCap</a>
                                </div>
                            </div>
                            <div className="intro">
                                <div className="title">Introdution</div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam itaque fuga dolore, deleniti illo dolorum aliquam natus maxime nesciunt. Aspernatur doloribus facilis deleniti error ipsam dolore, magni temporibus qui explicabo.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nav-buy-sell">
                    <button>Buy</button>
                    <button className='red'>Sell</button>
                </div>
            </div>
        </div>
    )
}

export default SingleCryptoFuture