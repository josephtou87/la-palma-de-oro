'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import FloatingButtons from '@/components/FloatingButtons';
import { productos } from '@/lib/db';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductosPage(){
  const [cart, setCart] = useState([]);
  const add = (p) => {
    setCart(prev=>[...prev,p]);
    // save to localStorage for carrito page
    const existing = JSON.parse(localStorage.getItem('cart')||'[]');
    localStorage.setItem('cart', JSON.stringify([...existing,p]));
  };
  return (
    <div>
      <Header />
      <main className="container" style={{paddingTop:20}}>
        <h2>Catálogo</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:20, marginTop:12}}>
          {productos.map(p=> <ProductCard key={p.id} producto={p} onAdd={add} />)}
        </div>
        <div style={{marginTop:20}}>
          <Link href="/carrito">Ver carrito</Link>
        </div>
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  )
}
