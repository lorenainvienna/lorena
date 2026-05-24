import './globals.css'

export const metadata = {
  title: "Lorena's Blog",
  description: 'A very personal blog from a trans woman in Vienna.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
