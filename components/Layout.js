import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div style={{ background: "#111", color: "#e00", minHeight: "100vh", padding: 20 }}>
      <nav style={{marginBottom: 30}}>
        <Link href="/"><b style={{color: "#fff"}}>Autodex</b></Link>
        {" | "}
        <Link href="/cart" style={{color: "#fff"}}>Košík</Link>
        {" | "}
        <Link href="/login" style={{color: "#fff"}}>Prihlásenie</Link>
        {" | "}
        <Link href="/register" style={{color: "#fff"}}>Registrácia</Link>
        {" | "}
        <Link href="/admin" style={{color: "#fff"}}>Admin</Link>
      </nav>
      {children}
    </div>
  )
}
