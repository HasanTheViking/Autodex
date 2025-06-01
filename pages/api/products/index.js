let products = [
  {id: 1, name: "Mikrovláknová utierka", desc: "Utierka na sušenie karosérie.", price: 5.90},
  {id: 2, name: "Vôňa do auta", desc: "Citrónová aróma.", price: 2.50},
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.json(products)
  } else if (req.method === 'POST') {
    const { name, desc, price } = req.body
    const newProduct = { id: Date.now(), name, desc, price }
    products.push(newProduct)
    res.json(products)
  } else {
    res.status(405).end()
  }
}
