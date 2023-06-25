import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import "./assets.scss"
const HeaderAssets = () => {

    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState("/copy-trading/traders");
    const [activeMenuHeader, setACtiveMenuHeader] = useState(false)

    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    const catMenu = useRef(null)
    const closeOpenMenus = (e) => {

        if (catMenu.current && activeMenuHeader && !catMenu.current.contains(e.target)) {
            setACtiveMenuHeader(false)

        }
    }
    document.addEventListener("mousedown", closeOpenMenus)
    return (
        <div className="header-assets">
            <div className="title">
                <div className="text">My Assets</div>
                <div className="link">PnL Analysis</div>
            </div>


            <ul className="tab-filter-header">
                <div className="links">
                    <Link to="/assets/overview" className={"link" + (url === "/assets/overview" ? " active" : "")}>Overview</Link>
                    <Link to="/assets/funds"  className={"link" + (url === "/assets/funds" ? " active" : "")}>Funds</Link>
                    <Link to="/assets/futures" className={"link" + (url === "/assets/futures" ? " active" : "")}>Futures</Link>
                    <Link to="/assets/copy-trading" className={"link" + (url === "/assets/copy-trading" ? " active" : "")}>Copy Trading</Link>
                    <Link to="/assets/grid" className={"link" + (url === "/assets/grid" ? " active" : "")}>Grid</Link>
                </div>
            </ul>
        </div>

    )
}

export default HeaderAssets