'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css';
import  gsap  from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type props ={
  bodyRef:React.RefObject<HTMLDivElement>
}
const Hero = (props:props) => {
  const produk = useRef<HTMLImageElement>(null)
  const body = useRef<HTMLDivElement>(null)
  const texthero = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLHeadingElement>(null)
  useEffect(() => {



  
 const timeline = gsap.timeline()

 timeline.fromTo(text.current,{
   opacity:0
 },{
  opacity:1,
  delay:1,
  duration:1
 })



timeline.from(produk.current,{
  opacity:0,  
  yPercent:500,
  rotateZ:360

}).to(produk.current,{
  opacity:1,
  duration:0.8,
  transition:0.3,
  delay:1,
  rotateZ:0,
  yPercent:0
})


  gsap.registerPlugin(ScrollTrigger)

 


  const tm = gsap.timeline({
    scrollTrigger:{
      start:"55% center",
      end: "550% center",
      trigger:body.current,
      scrub:true,
      markers:false
    },
    
  })


  const heightbody = props.bodyRef.current?.clientHeight

  if(heightbody){
    tm.to(produk.current,{
      y:heightbody +200,
      duration:5,
      rotateZ:300
    })
  }

  const tm2 = gsap.timeline({
    scrollTrigger:{
      start:"55% center",
      end: "200% center",
      trigger:body.current,
      scrub:true,
      markers:false
    },
    
  })
  tm2.to(texthero.current,{
    y:900,
    opacity:0,
  })

  // const tm3 = gsap.timeline({
  //   scrollTrigger:{
  //     start:"55% center",
  //     end: "200% center",
  //     trigger:body.current,
  //     scrub:true,
  //     markers:false
  //   },
    
  // })


  // // tm3.to(split.chars,{
  // //   duration: 2, 
  // //   y: 500, 
  // //   opacity: 0,
  // //   stagger: 0.05
  // // })
  


  },[])
  return (
    <div ref={body} className='bg-black h-screen flex   overflow-hidden justify-center'>
      <div ref={texthero}  className='absolute z-0 w-full left-0 overflow-x-hidden flex h-full -translate-y-400'>
        <Image alt='fallCoffe' fill className='object-cover ' src={"/fallCoffe.png"} />
      </div>
      <div className='w-3/5 pt-40 max-sm:mt-10'>
        <h1  ref={text}  className='text-white    text-9xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-[600px]:text-6xl relative  max-sm:-translate-y-12 text-center font-Abril'><span className='relative z-20'>Make Your Day Chills Like An</span> <span className='relative z-40 text-white'>Water</span></h1>
      </div>
      <div  className='absolute z-30 h-full mt-10 max-md:h-96 max-md:top-1/3 max-sm:h-72 max-[600px]:h-64 sm:max-w-md max-sm:max-w-sm  md:w-1/4 w-3/5  justify-center flex items-center'>
      <Image ref={produk} alt='product1' className='object-contain ' fill src="/Carausel1.png"/>
      </div>
    </div>
  )
}

export default Hero