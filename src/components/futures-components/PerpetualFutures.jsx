import React from 'react'
import HeaderFutures from './HeaderFutures'
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
import "./futures.scss"
import { FaMinus, FaPlus } from 'react-icons/fa'


const PerpetualFutures = () => {
    const [activeSelect, setActiveSelect] = useState("Open")
    const [active, setActive] = useState("All")
    const [counter, setCounter] = useState(1253153)
    const [menu, setMenu] = useState(false)
    const [threePointMenu, setThreePointMenu] = useState(false)
    const [limtDrop, setLimitDrop] = useState(false)
    const [marketDrop, setMarketDrop] = useState(true)
    const [triggerDrop, setTriggerDrop] = useState(false)
    const [trailingStopDrop, setTrailingStopDrop] = useState(false)
    const [menuFormatPrice, setMenuFromatPrice] = useState(false)
    const [formatPriceValue, setFormatPriceValue] = useState("1")
    const [menuCrypto, setMenuCrypto] = useState(false)
    const [menuItem, setMenuItem] = useState("Market")
    const [activeOrder, setActiveOrder] = useState("Open Orders")
    const [showTypeAmount, setShowTypeAmount] = useState(false)
    const [showTypeTriggrer, setShowTypeTrigger] = useState(false)
    const [showTypeTrailingStop, setShowTypeTrailingStop] = useState(false)
    const [valueTypeAmount, setValueTypeAmount] = useState("BTC")
    const [valueTypeTrigger, setValueTypeTrigger] = useState("Index")
    const [valueTypeTrailingStop, setValueTypeTrailingStop] = useState("%")
    const [showTPSL, setShowTPSL] = useState(false)
    const [showMarginMenu, setShowMarginMenu] = useState(false)
    const [marginValue, setMarginValue] = useState("Cross Margin")
    const [marginValueDefault, setMarginValueDefault] = useState("Cross Margin")
    const [valueLong, setValueLong] = useState(5)
    const [valueShort, setValueShort] = useState(5)
    const [defaultValueShort, setDefaultValueShort] = useState(5)
    const [defaultValueLong, setDefaultValueLong] = useState(5)
    const [showLeverageMenu, setShowLeverageMenu] = useState(false)

    const catMenu = useRef(null)
    const cat2Menu = useRef(null)
    const cat3Menu = useRef(null)
    const cat4Menu = useRef(null)
    const cat5Menu = useRef(null)
    const cat6Menu = useRef(null)
    const cat7Menu = useRef(null)
    const cat8Menu = useRef(null)
    const cat9Menu = useRef(null)


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
        if (cat5Menu.current && showTypeAmount && !cat5Menu.current.contains(e.target)) {
            setShowTypeAmount(false)
        }
        if (cat6Menu.current && showMarginMenu && !cat6Menu.current.contains(e.target)) {
            setShowMarginMenu(false)
        }
        if (cat7Menu.current && showTypeTriggrer && !cat7Menu.current.contains(e.target)) {
            setShowTypeTrigger(false)
        }
        if (cat8Menu.current && showTypeTrailingStop && !cat8Menu.current.contains(e.target)) {
            setShowTypeTrailingStop(false)
        }
        if (cat9Menu.current && showLeverageMenu && !cat9Menu.current.contains(e.target)) {
            setShowLeverageMenu(false)
            setValueLong(defaultValueLong)
            setValueShort(defaultValueShort)
        }

    }


    const changeMenuItem = (value) => {
        setMenuItem(value)
        if (value === "Limit") {
            setLimitDrop(true)
            setMarketDrop(false)
            setTriggerDrop(false)
            setTrailingStopDrop(false)
        } else if (value === "Trailing Stop") {
            setTrailingStopDrop(true)
            setLimitDrop(false)
            setMarketDrop(false)
            setTriggerDrop(false)


        } else if (value === "Trigger") {
            setTriggerDrop(true)
            setLimitDrop(false)
            setMarketDrop(false)
            setTrailingStopDrop(false)


        } else {
            setMarketDrop(true)
            setLimitDrop(false)
            setTriggerDrop(false)
            setTrailingStopDrop(false)


        }

    }
    const changeFormatPriceValue = (value) => {
        setFormatPriceValue(value)
        setMenuFromatPrice(false)
    }

    const change = (status) => {
        if (status === "Open") {
            setActiveSelect("Open")
        } else {
            setActiveSelect("Close")
        }
    }

    const changeTypeAmount = (value) => {
        setValueTypeAmount(value)
        setShowTypeAmount(false)
    }
    const changeTypeTrigger = (value) => {
        setValueTypeTrigger(value)
        setShowTypeTrigger(false)
    }
    const changeTypeTrailingSyop = (value) => {
        setValueTypeTrailingStop(value)
        setShowTypeTrailingStop(false)
    }

    const changeValueMargin = () => {
        setMarginValueDefault(marginValue)
        setShowMarginMenu(false)
    }
    const restoreDefalut = () => {
        setMarginValue(marginValueDefault)
        setShowMarginMenu(false)
    }
    const changeValueLeverage = () => {
        setDefaultValueLong(valueLong)
        setDefaultValueShort(valueShort)
        setShowLeverageMenu(false)
    }
    const restoreDefalutLeverge = () => {
        setValueLong(defaultValueLong)
        setValueShort(defaultValueShort)
        setShowLeverageMenu(false)
    }

    const clickChangeShort = (value) => {
        if(value === "plus"){
            if(valueShort < 50){
                setValueShort(+valueShort + 1)
                
            }
        }
        if(value === "minus"){
           if(valueShort > 0 ){
             setValueShort(valueShort - 1)
           }
        }
    }
    const clickChangeLong = (value) => {
        if(value === "plus"){
            if(valueLong < 50){

                setValueLong(+valueLong + 1)
            }
        }
        if(value === "minus"){
           if(valueShort > 0 ){
            setValueLong(valueLong - 1)
           }
        }
    }






    document.addEventListener('mousedown', closeOpenMenus)
    return (
        <>
            <HeaderFutures />

            <div className="custom-container">
                <div className="crypto-name-futures">
                    <div className="name-box" onClick={() => setMenuCrypto(true)}>
                        <AiOutlineMenuUnfold />
                        <div className="name">BTC/USDT</div>
                        <div className="changes">-0.5%</div>
                    </div>
                    <div className="menu">
                        <Link to="/futures/perpetual/single-crypto"><TbChartCandle /></Link>
                        <div className="drop-menu" ref={cat3Menu}>
                        <BsThreeDots onClick={() => setThreePointMenu(!threePointMenu)} >
                        </BsThreeDots>
                        <ul  className={threePointMenu ? "drop active" : "drop"}>
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
                <div className="filter">
                    <div className="left">
                        <div className="cross-margin">
                            <div className="default-margin" onClick={() => setShowMarginMenu(true)}>{marginValueDefault} <TiArrowSortedDown /></div>
                            <div className={showMarginMenu ? "drop-menu active" : "drop-menu"}>
                                <div className="content" ref={cat6Menu}>
                                    <div className="title">Position Mode</div>
                                    <div className="items">
                                        <div
                                            className={marginValue === 'Cross Margin' ? "item active" : "item"}
                                            onClick={() => setMarginValue("Cross Margin")}>Cross Margin</div>
                                        <div
                                            className={marginValue === 'Isolated Margin' ? "item active" : "item"}
                                            onClick={() => setMarginValue("Isolated Margin")}>Isolated Margin</div>
                                    </div>
                                    <div className="desc">
                                        <div className={marginValue === 'Cross Margin' ? "cross active" : "cross"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus porro dolore ipsam quae accusantium voluptas, repellat voluptatum! Itaque quibusdam amet voluptas quas sequi ad dignissimos accusantium repellat. Explicabo, illo incidunt?</div>
                                        <div className={marginValue === 'Isolated Margin' ? "isolated active" : "isolated"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus porro dolore ipsam quae accusantium voluptas,</div>
                                    </div>
                                    <div className="action">
                                        <div className="cancel" onClick={() => restoreDefalut()}>Cancel</div>
                                        <div className="ok" onClick={() => changeValueMargin()}>OK</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leverage">
                            <div className="default" onClick={() => setShowLeverageMenu(true)}>
                                <div className="value"><div className="green">{defaultValueLong + "x"}</div><div className="red">{defaultValueShort + "x"}</div></div>
                                <TiArrowSortedDown />
                            </div>
                            <div className={showLeverageMenu ? "drop-menu active" : "drop-menu"}>
                                <div className="content" ref={cat9Menu}>
                                    <div className="title">Edit Leverage</div>
                                    <div className="items">
                                        <div className="item">
                                            <div className="change-long">
                                                <div className="text">Leverage(Long)</div>
                                                <div className="control">
                                                    <FaMinus onClick={() => clickChangeLong("minus")}/> 
                                                    <div className="value">{valueLong + "x"}</div>
                                                    <FaPlus  onClick={() => clickChangeLong("plus")}/>
                                                </div>
                                            </div>
                                            <input type="range" onChange={(e) => setValueLong(e.target.value)} value={valueLong} min="0" max="50" />
                                        </div>
                                        <div className="item">
                                            <div className="change-long red">
                                                <div className="text">Leverage(Short)</div>
                                                <div className="control">
                                                    <FaMinus
                                                        onClick={() => clickChangeShort("minus")}
                                                    /> <div className="value">{valueShort + "x"}</div>
                                                    <FaPlus
                                                        onClick={() => clickChangeShort("plus")}
                                                    />
                                                </div>
                                            </div>
                                            <input type="range" onChange={(e) => setValueShort(e.target.value)} value={valueShort} min="0" max="50" />
                                        </div>
                                    </div>

                                    <div className="action">
                                        <div className="cancel" onClick={() => restoreDefalutLeverge()}>Cancel</div>
                                        <div className="ok" onClick={() => changeValueLeverage()}>OK</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="right">
                        <div className="funding">
                            <div className="text">Funding</div>
                            <div className="amount">0.0101%</div>
                        </div>
                        <div className="time">
                            <div className="text">Settlement</div>
                            <div className="amount">03:39:25</div>
                        </div>
                    </div>
                </div>
                <div className="crypto-information-futures">
                    <div className="open-close">
                        <div className="box-open-close">
                            <span className={activeSelect === "Open" ? "open active " : "open"} onClick={() => change("Open")}>Open</span>
                            <span className={activeSelect === "Close" ? "close active " : "close"} onClick={() => change("Close")}>Close</span>
                        </div>
                        <div className="type-menu">
                            <div className="default" onClick={() => setMenu(!menu)}>{menuItem} <TiArrowSortedDown className={menu ? " active" : ""} />

                                <ul ref={cat4Menu} className={menu ? "drop-menu active" : "drop-menu"}>
                                    <div className="content">
                                        <ul className="items">
                                            <li onClick={() => changeMenuItem("Market")}>Market</li>
                                            <li onClick={() => changeMenuItem("Limit")}>Limit</li>
                                            <li onClick={() => changeMenuItem("Trailing Stop")}>Trailing Stop</li>
                                            <li onClick={() => changeMenuItem("Trigger")}>Trigger</li>
                                        </ul>
                                        <div className="cancel">Cancel</div>
                                    </div>
                                </ul>

                            </div>
                        </div>
                        <div className="amount">
                            <div className={marketDrop ? "market-message active" : "market-message"}>Please an Order</div>
                            <div className={triggerDrop ? "trigger-price active" : "trigger-price"}>
                                <input type="number" placeholder='Trigger Price' />
                                <div className="type-Trigger">
                                    <div className="default-type" ><div className="menu" onClick={() => setShowTypeTrigger(true)}>{valueTypeTrigger} <TiArrowSortedDown /></div>
                                        <div className={showTypeTriggrer ? "drop-menu active" : "drop-menu"}>
                                            <div className="content" ref={cat7Menu}>
                                                <div className="items">
                                                    <div className="item" onClick={() => changeTypeTrigger("Mark")}>Mark</div>
                                                    <div className="item" onClick={() => changeTypeTrigger("Index")}>Index</div>
                                                    <div className="item" onClick={() => changeTypeTrigger("Last")}>Last</div>
                                                </div>
                                                <div onClick={() => setShowTypeTrigger(false)} className="cancel">Cansel</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={trailingStopDrop ? "trailing-stop active" : "trailing-stop"}>
                                <input type="number" placeholder='Callback Rate' />
                                <div className="type-Trailing">
                                    <div className="default-type" ><div className="menu" onClick={() => setShowTypeTrailingStop(true)}>{valueTypeTrailingStop} <TiArrowSortedDown /></div>
                                        <div className={showTypeTrailingStop ? "drop-menu active" : "drop-menu"}>
                                            <div className="content" ref={cat8Menu}>
                                                <div className="items">
                                                    <div className="item" onClick={() => changeTypeTrailingSyop("%")}>%</div>
                                                    <div className="item" onClick={() => changeTypeTrailingSyop("USDT")}>USDT</div>
                                                </div>
                                                <div onClick={() => setShowTypeTrailingStop(false)} className="cancel">Cansel</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={limtDrop ? "limit active" : "limit"}>
                                <div className="value">{changeCurrency(counter)}</div>
                                <div className="controll">
                                    <div className="minus" onClick={() => setCounter(counter - 1)}>-</div>
                                    <div className="plus" onClick={() => setCounter(counter + 1)}>+</div>
                                </div>
                            </div>
                            <div className="text">
                                <input type="number" placeholder='Amount' />
                                <div className="type-amount">
                                    <div className="default-type" ><div className="menu" onClick={() => setShowTypeAmount(true)}>{valueTypeAmount} <TiArrowSortedDown /></div>
                                        <div className={showTypeAmount ? "drop-menu active" : "drop-menu"}>
                                            <div className="content" ref={cat5Menu}>
                                                <div className="items">
                                                    <div className="title">Contract Unit</div>
                                                    <div className="item" onClick={() => changeTypeAmount("BTC")}>BTC</div>
                                                    <div className="item" onClick={() => changeTypeAmount("USDT")}>USDT</div>
                                                </div>
                                                <div onClick={() => setShowTypeAmount(false)} className="cancel">Cansel</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="label">
                                <span><div className="value">Avail.(Long)(USDT)</div><div className="amount">0.0000</div></span>
                                <span><div className="value">Avail.(Aort)(USDT)</div><div className="amount red">0.0000</div></span>
                            </div>

                            <input className='range' type="range" />
                            <div className={activeSelect === 'Open' ? "tp-sl active" : "tp-sl"}>
                                <div className="btn">
                                    <input type="checkbox" onChange={() => setShowTPSL(!showTPSL)} />
                                    <div className="value">TP/SL</div>
                                </div>
                                <div className={showTPSL ? "amount active" : "amount"}>

                                    <input className='tp-amount' type="number" placeholder='Take Profit' />


                                    <input className="sl-amount" type="number" placeholder='Stop Loss' />

                                </div>

                            </div>
                        </div>

                        <div className="btns">
                            <div className="group">
                                <div className="label">
                                    <span>Margin</span>
                                    <span>--USDT</span>
                                </div>
                                <div className={activeSelect === "Close" ? "btn red" : "btn"}>{activeSelect === "Open" ? "Open Long" : "Close Long"}</div>
                            </div>
                            <div className="group">
                                <div className="label">
                                    <span>Margin</span>
                                    <span>--USDT</span>
                                </div>
                                <div className={activeSelect === "Open" ? "btn red" : "btn"}>{activeSelect === "Close" ? "Close Short" : "Open Short"}</div>
                            </div>
                        </div>


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

export default PerpetualFutures