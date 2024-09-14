import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { Provider } from '@components/templates'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
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
      <body className={`${ubuntu.className} bg-magnolia antialiased`}>
        <main className='min-w-screen container flex min-h-screen items-center justify-center'>
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  )
}
