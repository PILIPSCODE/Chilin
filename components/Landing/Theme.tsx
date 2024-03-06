"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { Appdispatch, useAppSelector } from '@/redux/store'
import { SetTheme } from '@/redux/feature/Cart-slice'
const Theme = () => {
    const Active = 'relative z-0 '
    const inActive = 'relative z-10 opacity-0 '
    const dispact = useDispatch<Appdispatch>();
    
    const themes = useAppSelector((state) => state.CartReducer.Theme);
    const [theme, setTheme] = useState<String>("")
    useEffect(() => {
        setTheme(themes)
    },[themes])
    


    return (
        <div className='fixed h-full right-4 flex items-center theme'>
            <div  className={`w-20 h-20   rounded-lg flex justify-center items-center ${theme === "dark" ? "bg-white" :"bg-black"}  border-4 relative border-gray-400`}>


                <div className='h-16 w-16 hover:h-40 cursor-pointer hover:w-40  relative duration-200  '>
                    <Image src={"/produkkPutih.png"} onClick={() => dispact(SetTheme("light"))} className={`object-contain ${theme === "light" ? Active : inActive}`} alt='pakput' fill />
                    <Image src={"/produkkHitam.png"} onClick={() => dispact(SetTheme("dark"))} className={`object-contain ${theme === "dark" ? Active : inActive}`} fill alt='pakput' />

                </div>
            </div>
        </div>
    )
}

export default Theme