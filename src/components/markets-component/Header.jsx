import React from 'react'
import { BsSearch } from "react-icons/bs"

import "./Markets.scss"
import { useState } from 'react'
const Header = () => {
    const [show,setShow] = useState(false) 
    const [active,setActive] = useState("Spot")
    const changeTab = (status) => {

        setActive(status)

        if(status === "Favorite"){
            setShow(true)
        }else{
            setShow(false)

        }
   }
    return (
        <>
            <div className="header-markets">
                <div className="main">
                    <div className="custom-container">
                        <div className="content">
                            <ul className="content-tab">

                                <li onClick={() => changeTab("Favorite")} className={ active === "Favorite" ? "link active" : "link"}>Favorite</li>
                                <li onClick={() => changeTab("Spot")} className={ active === "Spot" ? "link active" : "link"}>Spot</li>
                                <li onClick={() => changeTab("Futures")} className={ active === "Futures" ? "link active" : "link"}>Futures</li>

                            </ul>

                            <div className="header-right">

                                <div className="search-icon"><BsSearch /></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className={show ? "favorite-menu-page active" : "favorite-menu-page"}>
                <div className="content">
                <div className="custom-container">
                   <div className="menu">
                      <div className="item">Spot</div>
                      <div className="item">Futures</div>
                   </div>
                   

                </div>

                </div>
                <div className="message"> No Record</div>
            </div>
        </>
    )
}

export default Header