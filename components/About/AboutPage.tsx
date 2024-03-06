'use client'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import {  useAppSelector } from '@/redux/store'
const AboutPage = () => {
  const themes = useAppSelector((state) => state.CartReducer.Theme);
  const [theme, setTheme] = useState<String>("")

  const text = useRef<HTMLHeadingElement>(null)
  const ArrAbout = [
    {
      img: "/KopiPilihan1.jpeg",
      text: "Biji Kopi Chillin Dipilih Dengan Hati Dan Perasaan, Seperti Kasih SayangMU Kepada PacarMu"
    },
    {
      img: "/KopiPilihan2.jpeg",
      text: "Dipilih Oleh Ahli kami, sesuai dengan Warna Terbaik dan Aroma yang Harum"
    },
    {
      img: "/ChillHouse.jpeg",
      text: "Di Prosess Sedemikian Rupa Di Chills House "
    },
    {
      img: "/CalltoAction.png",
      text: "Menghasilkan Kopi Nikmat Dan Menyantaikan"
    }
  ]

  
  useEffect(() => {
    Aos.init()
  },[])

  useEffect(() => {
    setTheme(themes)
},[themes])



  return (
    <div id='about' className={`h-about p-20 ${theme === "dark"? "text-white  bg-black/75" :" text-black bg-gray-500/65"}  relative backdrop-blur-md  font-Poppins z-50`}>
      <div className='sm:w-9/12 w-full mx-auto'>
        <h1 ref={text} className='text-4xl border-2 mb-20 text-center max-sm:text-3xl font-bold font-Poppins max-md:pb-5' ><span data-aos="fade-up">Kenapa Sih Saya Harus Memilih Chillin? <span className={`border-2  ${theme === "light"? "bg-white":"bg-black"}  mx-2`}>  ↩Enter</span></span> </h1>
        {
          ArrAbout.map((el, index) => (
            <div key={index}>
              {
                index % 2 === 0 ?
                  <div  data-aos="fade-right" className='flex-col relative flex gap-3 items-start'>
                    <div className='relative h-16 w-16  '>
                      <Image alt='bot' fill src="/bot1.gif" />
                    </div>
                    <h1>bot 1</h1>
                  </div>
                  :
                  <div  data-aos="fade-left" className='flex-col relative flex gap-3 items-end'>
                    <div className='relative h-16 w-16 right-0 flex gap-3'>
                      <Image alt='bot' fill src="/bot2.gif" />
                    </div>
                    <h1>bot 2</h1>
                  </div>
              }
              <div  data-aos="fade-up" className={`relative flex z-10 my-20  ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>

                <div className={`sm:grid-cols-2  lg:w-1/2 grid ${theme === "dark"? "bg-white":"bg-black"}  rounded-lg overflow-hidden`}>
                  <div className='relative  h-36 '>
                    <Image src={el.img} className='object-cover' fill alt='kopi-Pilihan' />
                  </div>
                  <div className='h-full flex items-center max-sm:py-5'>
                    <p className={`text-xl text-center  ${theme === "dark"? "text-black":"text-white"} font-bold`}>{el.text}</p>
                  </div>
                </div>
              </div>
            </div>

          ))
        }

      </div>


    </div>
  )
}

export default AboutPage