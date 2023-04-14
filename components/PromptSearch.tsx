'use client'
import { useState } from 'react'

export default function PromptSearch () {
  const [prompt, setPrompt] = useState('')

  return (
    <div className='m-10'>
      <form className='flex flex-col md:flex-row md:divide-x'>
        <textarea
          className='flex-1 border-2 border-gray-300 p-2 rounded-sm '
          placeholder='Enter a prompt...'
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button
          className='bg-blue-500 rounded-sm text-white p-2
            disabled:bg-gray-300'
          disabled={!prompt}
        >
          Generate
        </button>
        <button className='bg-cyan-400 text-white p-2 rounded-sm'>
          Suggestion
        </button>
      </form>
    </div>
  )
}
