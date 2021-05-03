import Product from "./Product.js"
import SeeMore from "./SeeMore.js"
export default function ProductList(props) {
    return(
      <main>
        <h1>Our Products</h1>
        <Product {...props}/>
        <Product name="t-shirt" price="32"/>
        <Product name="jeans"/>
        <Product name="jacket"/>
        <Product name="hat"/>
        <Product name="socks"/>
        <SeeMore />
      </main>
    )
  }
