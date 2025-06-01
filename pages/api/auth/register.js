import bcrypt from 'bcryptjs'

let users = []

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { username, password } = req.body
  if (!username || !password) return res.status(400).json({ message: 'Meno a heslo sú povinné' })
  if (users.find(u => u.username === username)) return res.status(409).json({ message: 'Používateľ už existuje' })
  users.push({ username, passwordHash: bcrypt.hashSync(password, 8), isAdmin: false })
  res.status(201).json({ message: 'OK' })
}
