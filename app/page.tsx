import BannerWelcome from './BannerWelcome';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home(){
  return (
    <div>
      <Header />
      <BannerWelcome />
      <main className="container" style={{paddingTop:20}}>
        <section className="card" style={{textAlign:'center'}}>
          <h2 style={{fontSize:28}}>Bienvenido a Sombrerería La Palma de Oro</h2>
          <p style={{color:'#6b6b6b'}}>Artesanía en sombreros de palma — calidad y tradición</p>
          <div style={{marginTop:16}}><a href="/productos" className="btn">Ver catálogo</a></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
