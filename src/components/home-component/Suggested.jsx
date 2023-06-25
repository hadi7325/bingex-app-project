import React from 'react'
import "./home.scss"
import { Link } from 'react-router-dom'

const Suggested = () => {
  return (
    <div className="custom-container">

    <div className="offer-box">
        <div className="desc">
                 <div className="title">Copy elite trader, Profit easily</div>
                 <span>Copy elite trader, Profit automaticly</span>
                 <Link className='link' to="/">Try It Now</Link>
        </div>
    </div>
    </div>

  )
}

export default Suggested