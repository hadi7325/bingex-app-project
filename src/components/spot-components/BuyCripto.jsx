import React from 'react'
import HeaderSpot from './HeaderSpot'
import { TiArrowSortedDown } from "react-icons/ti"
import { MdAttachMoney } from "react-icons/md"
import { BiMessageRoundedCheck } from "react-icons/bi"
import { BsSearch } from "react-icons/bs";

import { BsCardList } from "react-icons/bs"
import { useState } from 'react'
import data from "./data/data-type.json"
import "./spot.scss"

const BuyCripto = () => {


    const [cryptoType, setCryptoType] = useState("USDT")
    const [showList,setShowList] = useState(false)
    const [type,setType] = useState("CHF")

    const changeTypeCurrency = (value) => {
     setType(value)
     setShowList(false)
    }
   
    return (
        <>
            <HeaderSpot />
            <div className="custom-container">
                <div className="buy-crypto">
                    <div className="types">
                        <span onClick={() => setCryptoType("USDT")} className={cryptoType === "USDT" ? "type active" : "type"}>USDT</span>
                        <span onClick={() => setCryptoType("ETH")} className={cryptoType === "ETH" ? "type active" : "type"}>ETH</span>
                        <span onClick={() => setCryptoType("BTC")} className={cryptoType === "BTC" ? "type active" : "type"}>BTC</span>
                    </div>
                    <div className="amount">
                        <div className="title">Amount</div>
                        <div className="amount-box">
                            <input type="number" placeholder='Enter Amount' />
                            <div className="type-anmount" onClick={() => setShowList(true)}>
                                <span> | </span>
                                <div className="defualt">{type}</div>
                                <TiArrowSortedDown />
                            </div>
                        </div>
                    </div>
                    <div className="Guide">
                        <div className="question">
                            How to Buy Crypto ?
                        </div>
                        <ul className="list">
                            <li><BsCardList /> Enter amount</li>
                            <li><MdAttachMoney /> Select service provider and pay</li>
                            <li><BiMessageRoundedCheck /> Wait for the asset to arive</li>
                        </ul>
                    </div>

                    <div className={showList ? "type-list active" : "type-list"}>
                        <div className="search-box">
                           <div className="search">
                           <BsSearch />
                            <input type="text" placeholder='Enter currency' />
                           </div>
                           <div className="cancel"onClick={() => setShowList(false)}>Cancel</div>
                        </div>

                        <div className="list">
                            {
                                data.types.map((item) => (
                                    <div className="item" key={item.id} onClick={() =>changeTypeCurrency(item.name)}>
                                        <div className="name">{item.name}</div>
                                        <div className="currency">{item.currency}</div>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyCripto