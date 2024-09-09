import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import '@styles/globals.css'

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Multi Step Form',
  description: 'A multi-step form built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${ubuntu.className} antialiased bg-magnolia`}>
        <main className='flex items-center justify-center min-h-screen container'>
          {children}
        </main>
      </body>
    </html>
  )
}
