import React, { useRef } from 'react'
import HeaderCpoyTrading from './HeaderCpoyTrading'
import { useState } from 'react'
import { BsThreeDots } from "react-icons/bs"
import {BiLike} from "react-icons/bi"
import {FiShare} from "react-icons/fi"
import {GoComment} from "react-icons/go"

const Feed = () => {

  const [avtiveTab, setActiveTab] = useState("Recommended")
  const [showMenuPost, setShowMenuPost] = useState(false)
  const [valeuSend, setValueSend] = useState("")

  const catMenu = useRef(null)
  const sendVaule = (value) => {
    setValueSend(value)
    setShowMenuPost(false)
  }

  const closeOpenMenus = (e) => {
    if (catMenu.current && showMenuPost && !catMenu.current.contains(e.target)) {
      setShowMenuPost(false)
    }
  }

  document.addEventListener("mousedown", closeOpenMenus)

  return (
    <>
      <HeaderCpoyTrading />
      <div className="feed">
        <div className="custom-container">
          <div className="tab-feed">
            <div className={avtiveTab === "Following" ? "tab active" : "tab"} onClick={() => setActiveTab("Following")}>Following</div>
            <div className={avtiveTab === "Recommended" ? "tab active" : "tab"} onClick={() => setActiveTab("Recommended")}>Recommended</div>
            <div className={avtiveTab === "Influencer" ? "tab active" : "tab"} onClick={() => setActiveTab("Influencer")}>Influencer</div>
          </div>


          <div className={avtiveTab === "Recommended" ? "recomended-section active" : "recomended-section"}>


            <div className="posts">
              <div className="post">
                <div className="name-box">
                  <div className="intro">
                    <img src="/image/user.jpg" alt="" />
                    <div className="text">
                      <div className="name">morteza-m</div>
                      <div className="time">14h ago</div>
                    </div>
                  </div>
                  <div className="menu">
                    <BsThreeDots onClick={() => setShowMenuPost(true)}  />
                    <div className={showMenuPost ? "drop-menu active" : "drop-menu"}>
                      <div className="content" ref={catMenu}>
                        <div className="items">
                          <div className="item" onClick={() => sendVaule("ّFollowing")}>Following</div>
                          <div className="item" onClick={() => sendVaule("Block CryptoGodJohn")}> Block CryptoGodJohn</div>
                          <div className="item" onClick={() => sendVaule("Report")}>Report</div>

                        </div>
                        <div onClick={() => setShowMenuPost(false)} className="cancel">Cansel</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title">
                  <div className="text">steady daily income for you</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni maxime reiciendis dignissimos quasi, provident voluptates eaque quo minima corporis blanditiis voluptatem. Quaerat officiis, culpa veniam in nisi laboriosam expedita.</div>
                </div>
                <div className="post-img">
                  <img src="/image/slide1.webp" alt="" />
                </div>
                <div className="setting">
                  <div className="share"><FiShare /><div className="text">Share</div></div>
                  <div className="comment"><GoComment /><div className="text">Comment <div className="count">2</div></div></div>
                  <div className="share"><BiLike /><div className="text">Like <div className="count">3</div></div></div>
                </div>
                <div className="send">
                  <input type="text" placeholder='Share your thoughts' />
                </div>
              </div>
            </div>
          </div>
          <div className={avtiveTab === "Following" ? "following-section active" : "following-section"}>
            <div className="message">
              <p>No Record</p>
              <div className="link">Go Follow</div>
            </div>
          </div>
          <div className={avtiveTab === "Influencer" ? "influencer-section active" : "influencer-section"}>
            <div className="posts">
              <div className="post">
                <div className="name-box">
                  <div className="intro">
                    <img src="/image/user.jpg" alt="" />
                    <div className="text">
                      <div className="name">reza</div>
                      <div className="time">14h ago</div>
                    </div>
                  </div>
                  <div className="menu">
                    <BsThreeDots onClick={() => setShowMenuPost(true)} />
                    <div className={showMenuPost ? "drop-menu active" : "drop-menu"}>
                      <div className="content" ref={catMenu}>
                        <div className="items">
                          <div className="item" onClick={() => sendVaule("ّFollowing")}>Following</div>
                          <div className="item" onClick={() => sendVaule("Block CryptoGodJohn")}> Block CryptoGodJohn</div>
                          <div className="item" onClick={() => sendVaule("Report")}>Report</div>

                        </div>
                        <div onClick={() => setShowMenuPost(false)} className="cancel">Cansel</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title">
                  <div className="text">steady daily income for you</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni maxime reiciendis dignissimos quasi.</div>
                </div>

                <div className="setting">
                  <div className="share"><FiShare /><div className="text">Share</div></div>
                  <div className="comment"><GoComment /><div className="text">Comment <div className="count">2</div></div></div>
                  <div className="share"><BiLike /><div className="text">Like <div className="count">3</div></div></div>
                </div>
                <div className="send">
                  <input type="text" placeholder='Share your thoughts' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Feed