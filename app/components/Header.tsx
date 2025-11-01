import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen pt-32 flex flex-col items-center justify-start gap-4 md:justify-center md:pt-12'>
      <div>
        <Image src={assets.logo_dark} alt='' className='rounded-full w-32'/>
      </div>
      <h3 className='flex item-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I am Moshahid Raza <Image src={assets.hand_icon} alt='' className='w-6'/></h3>
      <h1 className='text-3xl sm:text-6xl lg-text-[66px] font-Ovo'>Fullstack Developer based in mountains</h1>
      <p className='max-w-2xl mx-auto font-Ovo'>I am a software developer who likes to put life into an idea.</p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border-white rounded-full bg-black text-white flex items-center gap-2'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>

        <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
      </div>
    </div>
  )
}

export default Header
