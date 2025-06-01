export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { meno, adresa, email, cart } = req.body
  // Tu by si poslal email (napr. cez EmailJS, Resend alebo len vypíšeš do konzoly)
  console.log('OBJEDNÁVKA', meno, adresa, email, cart)
  res.status(200).json({ message: 'Objednávka prijatá' })
}
