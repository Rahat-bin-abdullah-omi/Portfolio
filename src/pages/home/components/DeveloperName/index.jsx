import React from 'react'
const firstName = ['M', 'O', 'H', 'D', '.', 'R', 'A', 'H', 'A', 'T', ' B', 'I', 'N']
const lastName = ['A', 'B', 'D', 'U', 'L', 'L', 'A', 'H']
const DeveloperName = () => {
  return (
    <h1 className='md:leading-tight'>
      <span className='text-4xl leading-snug md:text-6xl font-medium md:leading-tight text-white mr-2'>
        I'm
      </span>
      {firstName?.map((letter, i) => (
        <span
          key={i}
          className='cursor-pointer inline-block text-4xl leading-snug md:text-6xl md:leading-tight font-bold text-teal-500 hover:animate-wiggle transition-all duration-200'
        >
          {letter}
        </span>
      ))}{' '}
      {lastName?.map((letter, i) => (
        <span
          key={i}
          className='cursor-pointer inline-block  text-4xl leading-snug md:text-6xl md:leading-tight font-bold text-teal-500 hover:animate-wiggle transition-all duration-200'
        >
          {letter}
        </span>
      ))}
    </h1>
  )
}

export default DeveloperName
