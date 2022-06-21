import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <div className='flex justify-start items-center gap-4 mt-2'>
      <a
        href='https://www.linkedin.com/in/mohd-rahat-bin-abdullah-omi/'
        target={'_blank'}
        rel='noreferrer'
      >
        <BsLinkedin className='w-8 h-8 text-teal-500 ' />
      </a>
      <a
        href='https://www.facebook.com/rahat.binabdullahomi'
        target={'_blank'}
        rel='noreferrer'
      >
        <BsFacebook className='w-8 h-8 text-teal-500' />
      </a>
      <a
        href='https://github.com/Rahat-bin-abdullah-omi'
        target={'_blank'}
        rel='noreferrer'
      >
        <BsGithub className='w-8 h-8 text-teal-500' />
      </a>
    </div>
  )
}

export default SocialLinks
