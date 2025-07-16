import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LenientTree',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
       <link rel="icon" href="./lenienttree.png" />
      <body>{children}</body>
    </html>
  )
}
