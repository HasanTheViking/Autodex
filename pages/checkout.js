import { useState, useEffect } from 'react'

export default function Checkout() {
  const [cart, setCart] = useState([])
  const [form, setForm] = useState({ meno: '', adresa: '', email: '' })
  const [done, setDone] = useState(false)

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'))
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('/api/orders', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ ...form, cart })
    })
    localStorage.removeItem('cart')
    setDone(true)
  }

  if (done) return <div>Objednávka bola odoslaná! Skontrolujte svoj email.</div>

  return (
    <div>
      <h2>Objednávka</h2>
      <form onSubmit={handleSubmit}>
        <input name="meno" value={form.meno} onChange={handleChange} required placeholder="Meno a priezvisko" />
        <input name="adresa" value={form.adresa} onChange={handleChange} required placeholder="Adresa" />
        <input name="email" value={form.email} onChange={handleChange} required placeholder="Email" />
        <button type="submit">Odoslať objednávku</button>
      </form>
    </div>
  )
}
