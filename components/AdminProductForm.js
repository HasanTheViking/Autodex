import { useState } from 'react'

export default function AdminProductForm({ setProducts }) {
  const [product, setProduct] = useState({ name: '', desc: '', price: '' })

  const handleChange = e => setProduct({ ...product, [e.target.name]: e.target.value })

  const handleAdd = async e => {
    e.preventDefault()
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('token') },
      body: JSON.stringify({ ...product, price: Number(product.price) }),
    })
    setProduct({ name: '', desc: '', price: '' })
    const newProducts = await res.json()
    setProducts(newProducts)
  }

  return (
    <form onSubmit={handleAdd}>
      <input name="name" value={product.name} onChange={handleChange} placeholder="Názov produktu" required />
      <input name="desc" value={product.desc} onChange={handleChange} placeholder="Popis" required />
      <input name="price" value={product.price} onChange={handleChange} placeholder="Cena" type="number" required />
      <button type="submit">Pridať produkt</button>
    </form>
  )
}
