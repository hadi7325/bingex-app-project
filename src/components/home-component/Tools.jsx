import React from 'react'
import data from "./data/data-tolls.json"
import { Link } from 'react-router-dom'
const Tools = () => {
    return (
        <div className="tools">
            <div className="custom-container">
                <div className="row">
                    {
                        data.tools.map((item) => (
                                <Link to="/" className="link" key={item.id}>
                                    <img src={item.image} alt="" />
                                    <div className="name">{item.name}</div>

                                </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tools