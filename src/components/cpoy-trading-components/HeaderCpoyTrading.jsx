import React from 'react'
import "./copy-trading.scss"
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { RiUserHeartLine } from 'react-icons/ri'
import { BiUserPin } from 'react-icons/bi'
import { MdOutlineLiveHelp } from 'react-icons/md'
import { BsGiftFill } from 'react-icons/bs'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
const HeaderCpoyTrading = () => {

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
    document.addEventListener("mousedown",closeOpenMenus)
    return (
        <div className="header-copy-trading">
            <div className="header-left">
                <Link className={"link" + (url === "/copy-trading/traders" ? " active" : "")} to="/copy-trading/traders">Traders</Link>
                <Link className={"link" + (url === "/copy-trading/feed" ? " active" : "")} to="/copy-trading/feed">Feed</Link>
            </div>
            <div className="header-right" ref={catMenu}>
                <div className="menu" onClick={() => setACtiveMenuHeader(!activeMenuHeader)}>
                    <div className="text"> My Trades</div>
                    <div className="icon">{activeMenuHeader ? <FaTimes /> : <FaBars />}</div>
                </div>
                <ul className={activeMenuHeader ? "header-menu-drop active" : "header-menu-drop"}>
                    <li><AiOutlineUser /> <div className="text">Profile</div></li>
                    <li><RiUserHeartLine /> <div className="text">Following</div></li>
                    <li><BiUserPin /> <div className="text">Apply to be trader</div></li>
                    <li><BsGiftFill className='gift' /> <div className="text">Recommend to Earn</div></li>
                    <li><MdOutlineLiveHelp /> <div className="text">Help Center for Copy Traing</div></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderCpoyTrading