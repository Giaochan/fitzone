import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'FitZone | Transforma tu cuerpo y mente',
  description: 'Alcanza tus metas de fitness con nuestros entrenadores expertos, equipos de última generación y un ambiente que te motiva a superarte.',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-gray-950 text-white font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
