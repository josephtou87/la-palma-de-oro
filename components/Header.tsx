import Link from 'next/link';
export default function Header(){ return (
  <header className="container" style={{padding:'1rem 0'}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <div style={{width:48,height:48,borderRadius:8,background:'#b07a2a',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:700}}>SP</div>
        <div><div style={{fontWeight:700}}>Sombrerería La Palma de Oro</div><div style={{fontSize:12,color:'#6b6b6b'}}>Artesanía en palma</div></div>
      </div>
      <nav><Link href="/">Inicio</Link> | <Link href="/productos">Catálogo</Link> | <Link href="/carrito">Carrito</Link></nav>
    </div>
  </header>
) }
