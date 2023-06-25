import React from 'react'
import { useState } from 'react';
import changeCurrency from '../../Util';
import data from "./data/data-crypto.json"
import "./Markets.scss"

const categories = ["All",...new Set(data.crypto.map((item) => item.cat))]

const CryptoListMarket = () => {
    const [items, setItems] = useState(data.crypto)
    const [active, setActive] = useState([categories[0]])

    const filterProduct = (categori) => {
        setActive(categori)
            if(categori === "All"){
                return setItems(data.crypto)
            }
        
        const newItem = data.crypto.filter((item) => item.cat === categori)
        setItems(newItem)
    }
    return (
        <div className="custom-container">
            <div className='crypto-list-markets'>
                <div className="crypto-list-markets-menu">
                    <div className="menu-item">
                        {
                            categories.map((item, index) => (
                                <div onClick={() => filterProduct(item)} key={index} className={item === active ? "item active" : "item"}>{item}</div>
                            ))
                        }
                    </div>

                </div>

                <div className="crypto-list-item">
                    <div className="title">
                        <div className="name">name</div>
                        <div className="price">
                            <div className="last-price">Last price</div>
                            <div className="change">Change</div>
                        </div>
                    </div>
                    {
                        items.map((item) =>

                        (
                            <div className="item" key={item.id}>
                                <div className="name">{item.name}</div>
                                <div className="desc">
                                    <div className="price">
                                        <div className="least">{changeCurrency(item.least)}</div>
                                        <div className="most">{changeCurrency(item.most)}</div>
                                    </div>
                                    <div className={item.status.includes("-") ? "percentage red" : "percentage"}>{item.status}</div>
                                </div>

                            </div>

                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default CryptoListMarket