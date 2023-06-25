import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react'
import "./spot.scss"

const HeaderSpot = () => {
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState("/spot/single-post");
   
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
   

    return (
        <div className="main">
            <div className="custom-container">

                <ul className="content-tab">

                    <Link  className={"tab-link" + (url === "/spot/single-post" ?" active" : "")}  to="/spot/single-post">Spot</Link>
                    <Link className={"tab-link" + (url === "/spot/buy-crypto" ?" active" : "")}  to='/spot/buy-crypto'>Buy Crypto Widht Cards</Link>
                    <Link className={"tab-link" + (url === "/spot/p2p" ?" active" : "")} to="/spot/p2p">P2P</Link>

                </ul>

            </div>
        </div>


    )
}

export default HeaderSpot