import React from 'react'
import data from "./data/data-crypto.json"
import "./home.scss"
import { useState } from 'react';
import changeCurrency from '../../Util';

const categories = [...new Set(data.crypto.map((item) => item.cat))]
const CryptoList = () => {
    const defultItems = data.crypto.filter((item) => item.cat === "Perpetual Futures")
    const [items, setItems] = useState(defultItems)
    const [active, setActive] = useState("Perpetual Futures")
   
    const filterProduct = (categori) => {
        console.log(categori)
        setActive(categori)

    
        const newItem = data.crypto.filter((item) => item.cat === categori)
        setItems(newItem)
    }

    return (
        <div className="custom-container">
            <div className='crypto-list'>
                <div className="home-crypto-list-menu">
                    <div className="menu-item">
                        {
                            categories.map((item, index) => (
                                <div onClick={() => filterProduct(item)} key={index} className={item ===  active ? "item active" : "item"}>{item}</div>
                            ))
                        }
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
                                        <div className="least">{changeCurrency(item.least)}</div>
                                        <div className="most">{changeCurrency(item.most)}</div>
                                    </div>
                                    <div className={item.status.includes("-") ? "percentage red" : "percentage"}>{item.status}</div>
                                </div>

                            </div>
            
                        ) )
                    }
                </div>
            </div>

        </div>
    )
}

export default CryptoList