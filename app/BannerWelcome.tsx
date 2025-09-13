"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
export default function BannerWelcome(){ 
  const [visible,setVisible]=useState(true); const [text,setText]=useState(''); const full='Bienvenido a Sombrerería La Palma de Oro – Artesanía con Estilo';
  useEffect(()=>{
    const already=localStorage.getItem('bannerPlayed');
    if(already){ setVisible(false); return; }
    let i=0;
    const typing=setInterval(()=>{ setText(full.slice(0,i+1)); i++; const audio=new Audio('/typewriter.mp3'); audio.volume=0.3; audio.play().catch(()=>{}); if(i===full.length) clearInterval(typing); },60);
    const t=setTimeout(()=>{ setVisible(false); localStorage.setItem('bannerPlayed','1'); },6500);
    return ()=>{ clearInterval(typing); clearTimeout(t); }
  },[]);
  return (
    <AnimatePresence>{ visible && (
      <motion.div initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-100,opacity:0}} transition={{duration:0.8}} className="fixed top-0 left-0 w-full bg-black text-white text-center py-3 shadow-md z-50 font-mono text-lg">
        {text}<span className="animate-pulse">|</span>
      </motion.div>
    )}</AnimatePresence>
  )
}
