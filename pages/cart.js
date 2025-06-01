import { useState, useEffect } from 'react'
import Router from 'next/router'

export default function Cart() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(localCart)
  }, [])

  const remove = (id) => {
    const newCart = cart.filter(p => p.id !== id)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  return (
    <div>
      <h2>Košík</h2>
      {cart.length === 0 && <p>Košík je prázdny.</p>}
      {cart.map(item => (
        <div key={item.id}>
          {item.name} ({item.price} €)
          <button onClick={() => remove(item.id)}>Vymazať</button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={() => Router.push('/checkout')}>Pokračovať k objednávke</button>}
    </div>
  )
}
