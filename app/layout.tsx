import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'
import PromptSearch from '@/components/PromptSearch'

const inter = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
})
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
    <html lang='en' className={inter.className}>
      <body>
        <Header />
        <PromptSearch />
        <main>{children}</main>
      </body>
    </html>
  )
}
