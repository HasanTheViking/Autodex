import { useState, useEffect } from 'react'
import AdminProductForm from '../components/AdminProductForm'

export default function Admin() {
  const [products, setProducts] = useState([])
  const [auth, setAuth] = useState(false)
  const [login, setLogin] = useState({ u: '', p: '' })

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('/api/products', { headers: { Authorization: token }})
      .then(res => res.json())
      .then(setProducts)
  }, [auth])

  const handleLogin = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username: login.u, password: login.p }),
    })
    if (res.ok) {
      const { token } = await res.json()
      localStorage.setItem('token', token)
      setAuth(true)
    }
  }

  if (!auth)
    return (
      <form onSubmit={handleLogin}>
        <input placeholder="admin" value={login.u} onChange={e => setLogin({ ...login, u: e.target.value })} />
        <input type="password" placeholder="heslo" value={login.p} onChange={e => setLogin({ ...login, p: e.target.value })} />
        <button>Prihlásiť sa ako admin</button>
      </form>
    )

  return (
    <div>
      <h2>Admin panel</h2>
      <AdminProductForm setProducts={setProducts} />
      <h3>Produkty</h3>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} ({p.price} €)
            <button onClick={async () => {
              await fetch(`/api/products/${p.id}`, { method: 'DELETE', headers: { Authorization: localStorage.getItem('token') } })
              setProducts(products.filter(pr => pr.id !== p.id))
            }}>Vymazať</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
