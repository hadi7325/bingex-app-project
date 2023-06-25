import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { RiListSettingsFill } from "react-icons/ri";
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import { FaBars } from "react-icons/fa"


import "./futures.scss"
const HeaderFutures = () => {

    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState("/futuers/perpetual");
    const [showSearch, setShowSerach] = useState(false)
    const [showSetting, setShowSetting] = useState(false)

    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);


    return (
        <>
            <div className="main">
                <div className="custom-container">

                    <ul className="content-tab">
                        <div className="links">
                            <div className="link">
                                <Link className={"tab-link" + (url === "/futuers/perpetual" ? " active" : "")} to="/futuers/perpetual">Perpetual Futures</Link>
                                <Link className={"tab-link" + (url === "/futures/standard-futures" ? " active" : "")} to='/futures/standard-futures'>Standard Futures</Link>
                            </div>

                        </div>
                        <div className="icons">
                            <li onClick={() => setShowSetting(true)} className="tab-link"><RiListSettingsFill /></li>
                            <li onClick={() => setShowSerach(true)} className="tab-link"><BsSearch /></li>
                        </div>
                    </ul>

                </div>
            </div>
            <div className={showSearch ? 'search-page active' : "search-page"}>
                <div className="search">
                    <input type="text" placeholder='Search' />
                    <div onClick={() => setShowSerach(false)} className="cancel">Cansel</div>
                </div>
            </div>
            <div className={showSetting ? 'setting-page active' : "setting-page"}>
                <div className="title">
                    <div className="back" onClick={() => setShowSetting(false)}><MdOutlineArrowBackIosNew /></div>
                    <div className="text">Edit Order</div>
                </div>
                <div className="label">
                    <span>Futures</span>
                    <span>Drag</span>
                </div>
                <div className="setting-items">
                    <div className="item">
                        <div className="text">Perpetual Futures</div>
                        <div className="icon"><FaBars /></div>
                    </div>
                    <div className="item">
                        <div className="text">Std.Futures</div>
                        <div className="icon"><FaBars /></div>
                    </div>
                </div>
            </div>
        </>


    )

}

export default HeaderFutures