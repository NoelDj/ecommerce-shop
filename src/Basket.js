import MyBasket from "./MyBasket.js"
import CheckoutForm from "./CheckoutForm.js"
export default function Basket(props) {
    return(
      <aside>
        <h2>Basket</h2>
        <MyBasket {...props}/>
        <CheckoutForm />
      </aside>
    )
  }
