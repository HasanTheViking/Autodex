export default function ProductCard({ product }) {
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    alert('Pridané do košíka!')
  }

  return (
    <div style={{border: "2px solid #e00", borderRadius: 8, padding: 16, width: 250, background: "#222", color: "#fff"}}>
      <h3>{product.name}</h3>
      <div>{product.desc}</div>
      <div><b>{product.price} €</b></div>
      <button style={{background: "#e00", color: "#fff"}} onClick={addToCart}>Pridať do košíka</button>
    </div>
  )
}
