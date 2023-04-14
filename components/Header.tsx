import Image from 'next/image'
import Link from 'next/link'

export default function Header () {
  return (
    <header
      className='flex justify-between items-center p-3 sticky 
    top-0 bg-white z-20 shadow-sm text-gray-700'
    >
      <div className='flex space-x-2 items-center text-xl '>
        <Image
          src='/images/openai.png'
          width={30}
          height={30}
          alt='OpenAi Logo'
        />
        <div>
          <h1 className='font-bold'>
            The Image{' '}
            <span className='bg-clip-text text-fill-transparent bg-gradient-to-r from-blue-500 to-cyan-500  '>
              Generator
            </span>
          </h1>
          <h2 className='text-sm '>
            Power by{' '}
            <Link
              href='https://openai.com/product/dall-e-2'
              target='_blank'
              className='hover:underline'
            >
              Dall-E
            </Link>{' '}
            &{' '}
            <Link
              href='https://chat.openai.com/'
              target='_blank'
              className='hover:underline'
            >
              ChatGPT
            </Link>
          </h2>
        </div>
      </div>

      <div>
        <Link
          href='https://github.com/roberto-duran/simple-ai-img-generator'
          target='_blank'
          className='hover:underline'
        >
          Github Repo
        </Link>
        {/* here the dark ckeck */}
        <div className=''></div>
      </div>
    </header>
  )
}
