export default function Product(item) {
    return(
      <article id={getName()}
       style={{
       backgroundColor:item.soldOut ? "#90ee90" : "#ffcccb"
      }}>
        <h2>{getName()}</h2>
        <p>Price is {item.price}$</p>
      </article>
    )

  function getName () {
    return item.name ? item.name : item.productDisplayName
  }
  }
