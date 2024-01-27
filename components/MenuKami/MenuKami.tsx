"use client"
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import { FaCartShopping, FaEye } from 'react-icons/fa6'
import { useDispatch } from "react-redux";
import { Appdispatch} from "@/redux/store";
import { increment } from '@/redux/feature/Cart-slice'


const MenuKami = () => {
    const bodyMenu = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const [details, setDetails] = useState("")
    const dispact = useDispatch<Appdispatch>();

    const Variant = [
        {
            kopi: "Putih",
            backgroundText: "black",
            bg: "white",
            text: "white",
            img: "/produkk",
            decription: 'Kopi Putih, sentuhan kelembutan dalam setiap tegukan. Diproses secara alami oleh luwak, kopi ini menggoda dengan aroma halus dan karakter rasa istimewa. Keanggunan yang tak tertandingi, kini hadir dalam setiap cangkir. Nikmati kelembutan Kopi Luwak White, pengalaman kopi yang eksklusif dan mewah.'
        },
        {
            kopi: "Hitam",
            backgroundText: "white",
            bg: "black",
            text: "black",
            img: "/produkk",
            decription: 'Kopi Hitam, puncak kekuatan dan kegelapan dalam secangkir. Dipilih dari biji kopi pilihan, setiap tegukan menggambarkan kekayaan rasa dan aroma tegas. Berbeda dengan kopi putih yang menonjolkan kelembutan, Kopi Hitam menawarkan pengalaman kuat yang membangkitkan semangat.'
        },
    ]
    useEffect(() => {
        const pin = gsap.fromTo(bodyMenu.current, {
            translateX: 0,
        }, {
            translateX: "-300vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "3000 top",
                pin: true,
                scrub: 4
            },
        })


        return () => {
            pin.kill()
        }

    }, [])




   
    const HandleClick = (e:Cartitems) => {
        dispact(increment(e))
   }
    return (
        <div className='overflow-hidden relative font-Poppins  z-menu '>

            <div ref={triggerRef}>

                <div ref={bodyMenu} className='h-screen flex flex-row w-v relative'>
                    <div className='w-screen flex items-center  h-screen justify-center bg-black/75 backdrop-blur-md'>
                        <h1 className='text-7xl max-md:text-4xl flex justify-center items-end relative font-bold bg-white p-10'>Variant Rasa <span className='text-xl bottom-0 absolute'>Keep Scrolling</span></h1>
                    </div>

                    {
                        Variant.map((e,index) => (

                    <div key={index} className={`w-screen gap-2 max-md:px-5 max-md:pt-10 text-${e.text} shadow-xl shadow-${e.bg} flex max-md:flex-col items-center h-screen justify-center bg-${e.bg} `}>
                        <h1 className={`text-9xl max-md:text-4xl font-Abril bg-${e.backgroundText} border-4  p-5 rounded-xl `}>Kopi <span className='md:hidden'>{e.kopi}</span></h1>
                        <div className={`relative overflow-hidden h-96 max-w-full justify-center flex items-center w-72 shadow-xl rounded-lg bg-${e.backgroundText}`}>
                            <div className={`${details === e.kopi? "translate-y-0" : "-translate-y-full"} duration-300 absolute h-full bottom-0 w-full bg-${e.backgroundText}  z-50`}>
                                <h1 className={`absolute top-0 w-full border-b border-${e.text} bg-${e.backgroundText} p-1  text-2xl `}>Rp.25.000</h1>
                                <h1 onClick={() => setDetails("")} className='bg-red-500 top-3 text-center  w-5 h-5 flex justify-center items-center rounded-full absolute right-3'>X</h1>
                                <div className='pt-10 px-5'>
                                    <p className={`text-${e.text} text-md`}>{e.decription}</p>
                                    <button onClick={() => HandleClick({ProductName:e.kopi,Price:25000,id:String(index+1),Qty:1,img:e.img,stock:5,isChecked:false})} className={`p-3 bg-${e.text} text-${e.backgroundText} cursor-pointer hover:bg-${e.backgroundText} hover:text-${e.text} rounded-xl border`}>Add To Cart</button>
                                </div>
                            </div>
                            <button onClick={() => setDetails(e.kopi)} className={`p-3 bg-${e.backgroundText} rounded-xl relative cursor-pointer hover:bg-${e.text} hover:text-${e.backgroundText} z-40 border flex gap-2 items-center`}><FaCartShopping /> Beli</button>
                            <Image alt='product1' className='object-contain ' fill src="/produkk.png" />
                        </div>
                        <h1 className={`text-9xl max-md:hidden max-md:text-4xl font-Abril p-5 border-4 text-${e.backgroundText} border-${e.backgroundText} rounded-xl`}>{e.kopi}</h1>
                    </div>
                        ))
                    }
                    <div className='bg-white h-screen w-screen'>
                        
                    </div>


                </div>
            </div>
        </div>
    )
}

export default MenuKami

function useCart(arg0: (state: any) => any) {
    throw new Error('Function not implemented.')
}
