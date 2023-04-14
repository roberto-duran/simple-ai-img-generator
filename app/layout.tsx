import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Simple Image Generator',
  description: 'Using Dall-e 2 and chatGPT to generate images'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {/* Prompt Input */}
        <main>{children}</main>
      </body>
    </html>
  )
}
