import React from 'react';
import { BsSearch } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { VscBell } from "react-icons/vsc";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri"
import "./home.scss"
import { useState } from 'react';

const Header = () => {

    const [scroll, setScroll] = useState(false)
     const [show,setShow] = useState(false) 
    window.addEventListener("scroll", function () {
        if (window.scrollY > 30) {
            setScroll(true)
        } else {
            setScroll(false)

        }

    })

    return (
        <div className={scroll ? "header active" : "header"}>
            <div className="custom-container">
                <div className="content">
                    <div className="user-icon" onClick={()=> setShow(true)}>
                        <img src="image/user.jpg" alt="" />
                    </div>
                    <div className="header-right">
                        <div className="search-icon"><BsSearch /></div>
                        <div className="support-icon"><BiSupport /></div>
                        <div className="notif-icon"><VscBell /></div>
                    </div>

                </div>
            </div>

            <div className={show ? "user-menu-page active" : "user-menu-page"}>
                    <div  className="exit-icon"><RiArrowLeftSLine onClick={() => setShow(false)} /></div>
                <div className="custom-container">
                    <div className="user-informaion">
                        <img src="image/user.jpg" alt="" />
                        <div className="email">
                            <div className="text">hadyjmaly184@gmail.com</div>
                            <div className="id">UID : 06556656</div>
                        </div>
                    </div>
                    <div className=" item vip">
                        <div className="text">vip</div>
                        <div className="icon"><RiArrowRightSLine /></div>
                    </div>
                    <div className="item">
                        <div className="text">New user</div>
                        <div className="icon"><RiArrowRightSLine /></div>
                    </div>
                    <div className="item">
                        <div className="text">My Rewards</div>
                        <div className="icon"><RiArrowRightSLine /></div>
                    </div>
                    <div className="item">
                        <div className="text">Invite To Earn</div>
                        <div className="icon"><RiArrowRightSLine /></div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Header