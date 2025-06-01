import ProductCard from '../components/ProductCard'

export default function Home({ products }) {
  return (
    <div>
      <h1>Autodex - Eshop s autodetailingom a gadgetmi</h1>
      <div style={{display: "flex", flexWrap: "wrap", gap: "2rem"}}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/products')
  const products = await res.json()
  return { props: { products } }
}
