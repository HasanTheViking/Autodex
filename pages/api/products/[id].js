let products = [
  {id: 1, name: "Mikrovláknová utierka", desc: "Utierka na sušenie karosérie.", price: 5.90},
  {id: 2, name: "Vôňa do auta", desc: "Citrónová aróma.", price: 2.50},
]

export default function handler(req, res) {
  const id = Number(req.query.id)
  if (req.method === 'DELETE') {
    products = products.filter(p => p.id !== id)
    res.json(products)
  } else {
    res.status(405).end()
  }
}
