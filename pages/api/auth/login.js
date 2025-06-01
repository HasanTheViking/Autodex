import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const ADMIN = {
  username: 'admin',
  passwordHash: bcrypt.hashSync('admin123', 8),
}

let users = [
  { username: ADMIN.username, passwordHash: ADMIN.passwordHash, isAdmin: true }
]

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { username, password } = req.body
  const user = users.find(u => u.username === username)
  if (!user) return res.status(401).json({ message: 'Zlé meno alebo heslo' })
  if (!bcrypt.compareSync(password, user.passwordHash)) return res.status(401).json({ message: 'Zlé meno alebo heslo' })
  const token = jwt.sign({ username: user.username, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1d' })
  res.json({ token })
}
