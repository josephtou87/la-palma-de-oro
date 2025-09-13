'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { useState, useEffect } from 'react';

export default function CarritoPage(){
  const [items, setItems] = useState([]);
  useEffect(()=>{ const raw = localStorage.getItem('cart') || '[]'; setItems(JSON.parse(raw)); },[]);
  const total = items.reduce((s,i)=> s + (i.precio||0),0);
  return (
    <div>
      <Header />
      <main className="container" style={{paddingTop:20}}>
        <h2>Carrito</h2>
        <div style={{display:'grid', gap:12}}>
          {items.length===0 ? <p>No hay productos en el carrito.</p> : items.map((it,idx)=> (
            <div key={idx} className="card" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div>
                <div style={{fontWeight:700}}>{it.nombre}</div>
                <div style={{color:'#6b6b6b'}}>${it.precio}</div>
              </div>
              <div>${it.precio}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:12}} className="card">
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>Total</div>
            <div style={{fontWeight:700}}>${total}</div>
          </div>
        </div>
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  )
}
