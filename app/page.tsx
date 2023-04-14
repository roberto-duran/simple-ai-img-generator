import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <div>
      <h1 className='text-2xl '>Simple Image Generator</h1>
    </div>
  )
}
