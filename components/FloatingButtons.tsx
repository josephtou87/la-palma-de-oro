"use client";
export default function FloatingButtons(){ const wa='+527561223464'; const phone='+527561223464'; return (
  <div className="float-buttons">
    <a className="float-btn float-whatsapp" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.1c0 4.9-3.9 8.8-8.8 8.8a8.7 8.7 0 01-4.6-1.3L3 21l1.7-4.7A8.8 8.8 0 012.2 12C2.2 7 6 3.2 11 3.2S21 7 21 12.1z" fill="white"/></svg>
    </a>
    <a className="float-btn float-call" href={`tel:${phone}`} aria-label="Llamar">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6 10.2a16 16 0 006.3 6.3l2.2-2.2a1 1 0 011.1-.2c1.2.5 2.6.8 4 .8a1 1 0 011 1v3.2a1 1 0 01-1 1C9.6 20.4 3.6 14.4 3.6 6.2A1 1 0 014.6 5.2H7.8a1 1 0 011 1c0 1.4.3 2.8.8 4 .1.4 0 .9-.2 1.1L6.6 10.2z" fill="white"/></svg>
    </a>
  </div>
) }
