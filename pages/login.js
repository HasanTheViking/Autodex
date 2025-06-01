import { useState } from 'react'
import Router from 'next/router'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password })
    })
    if (res.ok) {
      Router.replace('/')
    } else {
      const data = await res.json()
      setError(data.message)
    }
  }

  return (
    <div>
      <h2>Prihlásenie</h2>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Používateľské meno" required />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Heslo" type="password" required />
        <button type="submit">Prihlásiť sa</button>
      </form>
      {error && <div style={{color: "red"}}>{error}</div>}
    </div>
  )
}
