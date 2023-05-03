import './App.css';
import Header from "./component/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import Basket from "./component/Basket";
import Favorite from "./component/Favorite";
import ProductDetails from "./page/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/product" element={ <Product/> }/>
            <Route path="/basket" element={ <Basket/> }/>
            <Route path="/favorite" element={ <Favorite/> }/>
            <Route path="/details/:id" element={ <ProductDetails/> }/>
        </Routes>
    </div>
  );
}

export default App;
