'use client'
import {FormEvent, useState} from 'react'
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(response => response.json())

export default function PromptSearch () {
  const [prompt, setPrompt] = useState('')

  const {data: suggestion, error, isLoading, mutate, isValidating } = useSWR('/api/suggestion', fetcher, {
    revalidateOnFocus: false
  })

  const handleMutate = () => {
    if (!prompt) mutate()
  }

  const submitPrompt = async (useSuggestion?: boolean) => {
    const inputPrompt = useSuggestion ? suggestion : prompt
    setPrompt('')

    const res = await fetch('/api/generateImage', {
      method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: inputPrompt })
    })

    const data = await res.json()

    console.log('data', data)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await submitPrompt()
  }

  return (
    <div className='m-10'>
      <form className='flex flex-col md:flex-row md:divide-x' onSubmit={handleSubmit}>
        <textarea
          className='flex-1 border-2 border-gray-300 p-2 rounded-sm '
          placeholder={
              isLoading
                  ? "ChatGPT is thinking of a suggestion..."
                  : suggestion || "Enter a prompt..."
          }
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button
          className='bg-blue-700 rounded-sm text-white p-2 px-5
            disabled:bg-gray-300 hover:bg-blue-800 disabled:cursor-not-allowed'
          disabled={!prompt}
        >
          Generate
        </button>
        <button
            className='bg-blue-500 text-white p-2 rounded-sm hover:bg-blue-600 px-5'
        >
          Use Suggestion
        </button>
        <button
            onClick={e => { e.preventDefault(); handleMutate()}}
            className='bg-cyan-400 text-white p-2 rounded-sm hover:bg-cyan-600 px-5'>
          Suggestion
        </button>
      </form>

      {prompt && (
          <p className='italic pt-2 pl-2 font-light'>
            Suggestion: {" "}
            <span className='text-blue-500'>
                {isLoading? "ChatGPT is thinking..." : suggestion}
            </span>
          </p>
      )}
    </div>
  )
}
