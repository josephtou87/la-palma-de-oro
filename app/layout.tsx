import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sombrerería La Palma de Oro',
  description: 'Artesanía en sombreros de palma desde Guerrero',
}
export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
