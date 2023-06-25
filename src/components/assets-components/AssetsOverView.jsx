import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti"
import { CgEnter } from "react-icons/cg"
import { MdOutlineExitToApp } from "react-icons/md"
import { BiTransferAlt } from "react-icons/bi"
import { RiExchangeFundsFill } from "react-icons/ri"
import { MdOutlineArrowForwardIos } from "react-icons/md"

import { BsEye } from "react-icons/bs"
import { useState } from 'react'
import { useRef } from 'react'
import "./assets.scss"
export const AssetsOverView = () => {

    const [activeMenu, setActiveMenu] = useState(false)
    const [valueActiveMenu,setValueActiveMenu] = useState("USDT")
    const catMenu = useRef(null)

    const closeOpenMenus = (e) => {
        if (catMenu.current && activeMenu && !catMenu.current.contains(e.target)) {
            setActiveMenu(false)
        }
    }
   const changeValue = (value ) => {
    setValueActiveMenu(value)
    setActiveMenu(false)
   }

    document.addEventListener("click", closeOpenMenus)
    return (
        <>
            <div className="access-box">
                <div className="custom-container">
                    <div className="filter-access" ref={catMenu}>
                        <div className="default" onClick={() => setActiveMenu(!activeMenu)}>Total Asset Value({valueActiveMenu}) <TiArrowSortedDown />
                        </div>
                        <div className={activeMenu ? "drop active" : "drop"}>
                            <li onClick={ () => changeValue("USDT") }>USDT</li>
                            <li  onClick={ () => changeValue("BTC") }>BTC</li>
                        </div>
                        <div className="hidden"><BsEye/></div>
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

            <div className="overview">
                <div className="custom-container">
                    <div className="title">Account Details</div>

                    <div className="overview-items">
                        <div className="item">
                            <div className="text">Fund Account</div>
                            <div className="amount">
                                   <div className="value">
                                       <p>0.00 USDT</p>
                                       <span> $0.00</span>
                                   </div>
                                <div className="icon"><MdOutlineArrowForwardIos/></div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text">Fund Account</div>
                            <div className="amount">
                                   <div className="value">
                                       <p>0.00 USDT</p>
                                       <span> $0.00</span>
                                   </div>
                                <div className="icon"><MdOutlineArrowForwardIos/></div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text">Fund Account</div>
                            <div className="amount">
                                   <div className="value">
                                       <p>0.00 USDT</p>
                                       <span> $0.00</span>
                                   </div>
                                <div className="icon"><MdOutlineArrowForwardIos/></div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text">Fund Account</div>
                            <div className="amount">
                                   <div className="value">
                                       <p>0.00 USDT</p>
                                       <span> $0.00</span>
                                   </div>
                                <div className="icon"><MdOutlineArrowForwardIos/></div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text">Fund Account</div>
                            <div className="amount">
                                   <div className="value">
                                       <p>0.00 USDT</p>
                                       <span> $0.00</span>
                                   </div>
                                <div className="icon"><MdOutlineArrowForwardIos/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
