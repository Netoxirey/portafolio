import NavBar from '@/components/NavBar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

const poppins = Poppins({
  weight: ["400", "700", "900"],
  subsets: ["latin-ext"],
 })

export const metadata = {
  title: 'Ernesto Serna Portfolio',
  description: 'Full Stack developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
       
    </html>
  )
}
