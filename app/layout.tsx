import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ChatWidget from '@/components/ChatWidget'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})
const inter = Inter({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
})
export const metadata: Metadata = {
  title: 'Yan Property - Dutaland Residence',
  description: 'Dutaland Residence - Hunian Modern di Lokasi Strategis dengan Fasilitas Lengkap. Terjangkau, Berkualitas, Aman.',
  generator: 'v0.app',
  metadataBase: new URL('https://yan-property.vercel.app'),
  openGraph: {
    title: 'Yan Property - Dutaland Residence',
    description: 'Hunian modern dengan harga terjangkau dan fasilitas lengkap',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="id" 
      className={`${poppins.variable} ${inter.variable}`}
      style={{
        backgroundImage: 'url(/background-blur.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <body className="font-sans antialiased">
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
