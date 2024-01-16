"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'


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
                markers: true,
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
                        <h1 className='text-7xl font-bold bg-white p-10'>⬅ Variant Rasa</h1>
                    </div>
                    <div className='w-screen  flex items-center h-screen justify-around bg-white '>
                    
                    </div>
                    <div className='w-screen  flex items-center h-screen justify-around bg-black '>
                    
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default MenuKami