"use client"

import React, { useState } from 'react'
import { FaBars, FaCartShopping, FaPhone, FaX } from "react-icons/fa6"
import { CgYinyang } from "react-icons/cg";
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'


import { useAppSelector } from '@/redux/store'


const NavBar = () => {
    const themes = useAppSelector((state) => state.CartReducer.Theme);
    const [theme, setTheme] = useState<String>("")
    const [showNav, setShowNav] = useState(false)
    const [onscroll, setonScrool] = useState(false)
    const jmlhCart = useAppSelector((state) => state.CartReducer.jmlh);
    const [Qty, Setjmlhcart] = useState(0)
    
    useEffect(() => {
        setTheme(themes)
    },[themes])
    
    useEffect(() => {
        Setjmlhcart(Number(jmlhCart))
    }, [jmlhCart])


    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            let scY = window.scrollY
            if (scY <= 4) {
                setonScrool(false)
            } else {
                setonScrool(true)
            }
        })
    }, [])



    return (
        <div className={`flex justify-center ${theme === "dark"? " text-white" : "text-black"}  ${onscroll ? `backdrop-blur-md ${theme === "dark"? " bg-black/45" : "bg-white/45"} ` : "bg-transparent"}  font-Poppins nav  fixed w-full h-20 items-center`}>
            <div className='w-9/12 flex justify-between  '>
                <Link href={"/"} className='flex gap-2 items-center relative z-20 max-sm:text-base text-2xl font-Abril'>
                    <Image className='rounded-full' src="/logo.png" width={50} height={50} alt='logo' />
                    <h1 className='typo'>Chillin</h1>
                </Link>


                <div className={`${showNav? "opacity-100  border z-10 top-20 ":" max-md:opacity-0 z-0 -top-20"}  duration-700 flex gap-7 max-md:absolute justify-center md:items-center rounded-lg   w-9/12 max-md:bg-black py-1 md:h-20`}>
                    <Link href={'/#about'} className=' flex gap-2 justify-center items-center'>
                        <CgYinyang />
                        <h1 >About Us</h1>
                    </Link>
                    <div className=' flex gap-2 justify-center items-center'>
                        <FaPhone />
                        <h1>Contact Us</h1>
                    </div>
                </div>




                <div className='flex gap-9 items-center relative'>
                    <Link className='flex items-center gap-1' href={'/Cart'}><FaCartShopping /><span className=' absolute translate-x-6'>{String(Qty)}</span></Link>

                    <h1 className='bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white hover:border-2 border-2'>Variant</h1>
                <div onClick={() => setShowNav(!showNav)} className='md:hidden absolute  -right-7'>
                    {showNav?
                    <FaX/>
                    :
                    <FaBars />

                }
                </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar