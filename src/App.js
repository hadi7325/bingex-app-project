import { Route, Routes, BrowserRouter,HashRouter } from "react-router-dom";

import Home from "./routes/Home"
import Navbar from "./routes/Navbar";
import Markets from "./routes/Markets";
import Spot from "./routes/Spot";
import Futures from "./routes/Futures";
import { CopyTrading } from "./routes/CopyTrading";
import Assets from "./routes/Assets";
import P2P from "./components/spot-components/P2P";
import BuyCripto from "./components/spot-components/BuyCripto";
import SingleSpot from "./components/spot-components/SingleSpot";
import SingleCrypto from "./components/spot-components/SingleCrypto";
import CryptoListFutures from "./components/futures-components/CryptoListFutures";
import SingleCryptoFuture from "./components/futures-components/SingleCryptoFuture";
import Feed from "./components/cpoy-trading-components/Feed";
import { AsstesFunds } from "./components/assets-components/AsstesFunds";
import AssetsGrid from "./components/assets-components/AssetsGrid";
import AssetsCopyTrading from "./components/assets-components/AssetsCopyTrading";
import { AssetsFutures } from "./components/assets-components/AssetsFutures";
function App() {
  

  console.log(window.innerWidth )
  
   if(window.innerWidth < 768){
    return(
      <div className="App">
        
      <HashRouter >
          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route path='/markets' element={<Markets />} />
            <Route path='/spot/single-post' element={<Spot />} />
            <Route path='/spot/p2p' element={<P2P />} />
            <Route path='/spot/buy-crypto' element={<BuyCripto />} />
            <Route path='/spot/single-post' element={<SingleSpot />} />
            <Route path='/spot/single-post/single-crypto' element={<SingleCrypto />} />
            <Route path='/futuers/perpetual' element={<Futures />} />
            <Route path='/futures/standard-futures' element={<CryptoListFutures />} />
            <Route path='/futures/perpetual/single-crypto' element={<SingleCryptoFuture />} />
            <Route path='/copy-trading/traders' element={<CopyTrading />} />
            <Route path='/copy-trading/feed' element={<Feed />} />
            <Route path='/assets/overview' element={<Assets />} />
            <Route path='/assets/funds' element={<AsstesFunds />} />
            <Route path='/assets/grid' element={<AssetsGrid />} />
            <Route path='/assets/copy-trading' element={<AssetsCopyTrading />} />
            <Route path='/assets/futures' element={<AssetsFutures />} />

          </Routes>
          <Navbar />
      </HashRouter>

        
      </div>

    )

   }else{
      return(
        <div className="error">
        <p>This website is available for devices with screen width less than 768px</p>
        
      </div>
      )
   }
    

    // return (

    //    <div className="error">
    //       <p>
    //            please enter with mobile or tablet device (maximum : 768px)
    //       </p>
    //    </div>
    // )


  }


export default App;
