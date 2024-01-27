"use client"

import React, { useState } from 'react'
import { FaCartShopping, FaPhone, FaX } from "react-icons/fa6"
import { MdDashboard } from "react-icons/md"
import { useEffect } from 'react'
import { useAppSelector } from '@/redux/store'
import Image from 'next/image'
import Link from 'next/link'




const NavBar = () => {
    const [showNav, setShowNav] = useState(false)
    const [onscroll, setonScrool] = useState(false)
    const jmlhCart= useAppSelector((state) => state.CartReducer.jmlh);
    const [Qty,Setjmlhcart] = useState(0)
    useEffect(() => {
      Setjmlhcart(Number(jmlhCart))
    },[jmlhCart])
    
    
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            let scY = window.scrollY
            if (scY <= 100) {
                setonScrool(false)
            } else {
                setonScrool(true)
            }
        })
    }, [])
    return (
        <div className={`flex justify-center  ${onscroll ? "backdrop-blur-md bg-black/45" : "bg-transparent"}  font-Poppins navb  fixed w-full h-20 items-center`}>
            <div className='w-9/12 text-white flex justify-between  '>
                <Link href={"/"} className='flex gap-2 items-center text-2xl font-Abril'>
                    <Image className='rounded-full' src="/logo.png" width={50} height={50} alt='logo' />
                    <h1>Chillin</h1>
                </Link>
                <div className={`${showNav ? "max-md:absolute " : "max-md:hidden"} right-5 flex-col flex  justify-center items-center  top-36 max-md:bg-white max-md:h-36 max-md:w-36 rounded-full  text-white`}>
                    <div className='flex gap-7 justify-center items-center w-full h-1/2 max-md:border-b-2 border-black'>
                        <Link href={'/#about'} className='my-auto pt-3'>
                            <Image className='bg-white md:hidden rounded-full' src="/logo.png" width={40} height={40} alt='logo' />
                            <h1 className='max-md:hidden'>About Us</h1>
                        </Link>
                        <div className='my-auto pt-3'>
                            <div className='text-4xl text-black md:hidden'><FaPhone /></div>
                            <h1 className='max-md:hidden'>Contact Us</h1>
                        </div>
                    </div>
                    <div className='flex gap-7 justify-center items-center w-full  h-1/2 max-md:border-t-2 border-black'>

                    </div>
                </div>
                <div className='absolute  right-12 -translate-x-4  top-48  justify-center shadow-3xl  flex items-center text-white bg-black border w-12 h-12 md:hidden rounded-full'>
                    <div className={`h-full w-full ${!showNav ? "hidden" : "flex justify-center items-center"}`} onClick={() => setShowNav(false)}>
                        <FaX />
                    </div>
                    <div onClick={() => setShowNav(true)} className={`h-full w-full ${!showNav ? "flex justify-center items-center" : "hidden"}`}>
                        <MdDashboard />
                    </div>
                </div>
                <div className='flex gap-9 items-center'>
                    <Link className='flex items-center gap-1' href={'/Cart'}><FaCartShopping /><span className='text-white absolute translate-x-6'>{String(Qty)}</span></Link>

                    <h1 className='bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white hover:border-2 border-2'>Variant</h1>
                </div>
            </div>
        </div>
    )
}

export default NavBar