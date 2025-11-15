'use client'
import Image from 'next/image'
import React, { useRef, useState, useEffect, SetStateAction, Dispatch } from 'react'
import { useTheme } from 'next-themes'
import { assets } from '../../assets/assets'

// import close_white from './close-white.png';


const Navbar = () => {
    
    const {theme, setTheme} = useTheme();
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef<HTMLUListElement |null>(null);
    const openMenu = ()=>{
        sideMenuRef.current?.style && (sideMenuRef.current.style.transform = 'translateX(-16rem)');
    }
    const closeMenu = ()=>{
        sideMenuRef.current?.style && (sideMenuRef.current.style.transform = 'translateX(16rem)');
    }

    useEffect(() => {
  const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
useEffect(() => {
  if (mounted) {
    console.log('Theme changed:', theme);
  }
}, [theme, mounted]);
    if (!mounted) return null;



  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="" className='w-full'/></div>

    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "navbar-bg" : ""}`}>
    {/* // "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:bg-opacity-50 */}
        <a href='#top'>
            <Image src={theme==='dark'? assets.logo_dark:assets.logo} alt = "Logo"
            className='w-28 cursor-pointer mr-14'
            />
            
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50  dark:border dark:border-white/50 dark:bg-transparent"} `}>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About Me</a></li>
            <li><a className='font-Ovo' href="#services">Services</a></li>
            <li><a className='font-Ovo' href="#work">My Work</a></li>
            <li><a className='font-Ovo' href="#contact">Contact Me</a></li>
        </ul>
        <div className='flex items-center gap-4'>

            <button onClick={()=> setTheme(theme === 'light'? 'dark' : 'light')}>
                <Image src={theme==='light'? assets.moon_icon: assets.sun_icon} alt="theme toggle icon" className='w-6'/>
            </button>

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>Contact <Image src={theme==='dark'?assets.arrow_icon_dark:assets.arrow_icon} alt='' className='w-3'/></a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={theme==='dark'?assets.menu_white:assets.menu_black} alt="" className='w-6'/>
                
            </button>
        </div>

        {/* Mobile icons */}

          <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-black' 
          >
            {/* style={theme==='dark'? {background:'#000', color:'#fff'}:{}} */}


            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={theme==='dark' ? "/close-white.png":assets.close_black} alt="" width={20} height={20} className='w-5 cursor-pointer'/>
                
            </div>
            <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
