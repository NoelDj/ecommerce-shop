import './App.css';
import Nav from "./Nav.js"
import Basket from "./Basket.js"
import ProductList from "./ProductList"

function App() {

  const item = {
    id:143,
    productDisplayName:"Round Neck Jersey",
    price : 30,
    soldOut : 1
  }

  return (
  <div className="app">
    <Nav />
    <ProductList {...item}/>
    <Basket products={["t-shirt","jeans","hat","jacket","sweater"]}/>
    </div>
  );
}

export default App;
