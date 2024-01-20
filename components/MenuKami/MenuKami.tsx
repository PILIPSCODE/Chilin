"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

const MenuKami = () => {
    const bodyMenu = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const pin = gsap.fromTo(bodyMenu.current, {
            translateX: 0,
        }, {
            translateX: "-200vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                pin: true,
                scrub: 4
            },
        })


        return () => {
            pin.kill()
        }

    }, [])
    return (
        <div className='overflow-hidden relative font-Poppins  z-menu '>

            <div ref={triggerRef}>

                <div ref={bodyMenu} className='h-screen flex flex-row w-v relative'>
                    <div className='w-screen flex items-center  h-screen justify-center bg-black/75 backdrop-blur-md'>
                        <h1 className='text-7xl max-md:text-4xl flex justify-center items-end relative font-bold bg-white p-10'>Variant Rasa <span className='text-xl bottom-0 absolute'>Keep Scrolling</span></h1>
                    </div>
                    <div className='w-screen max-md:gap-2 max-md:pt-10 flex max-md:flex-col items-center h-screen justify-center bg-white '>
                       
                        <h1 className='text-9xl max-md:text-6xl font-Abril bg-black text-white border-4  p-5 rounded-xl '>Kopi</h1>
                        <div className='relative h-96 w-96'>
                            <Image alt='product1' className='object-contain ' fill src="/produkk.png" />
                        </div>
                        <h1 className='text-9xl max-md:text-7xl font-Abril p-5 border-4 border-black rounded-xl'>Putih</h1>

                        
                    </div>
                    <div className='w-screen max-md:gap-2 max-md:pt-10 flex max-md:flex-col items-center h-screen justify-center bg-black '>
                    <h1 className='text-9xl max-md:text-6xl font-Abril bg-black text-white border-4 border-white p-5 rounded-xl '>Kopi</h1>
                        <div className='relative h-96 w-96'>
                            <Image alt='product1' className='object-contain ' fill src="/produkk.png" />
                        </div>
                        <h1 className='text-9xl max-md:text-7xl font-Abril bg-white p-5 border-4 rounded-xl'>Hitam</h1>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default MenuKami