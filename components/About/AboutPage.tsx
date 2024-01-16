'use client'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import gsap from 'gsap'
// import { SplitText } from 'gsap-trial/SplitText'
import React, { useEffect, useRef } from 'react'

const AboutPage = () => {
  const refAbout = useRef<Array<HTMLDivElement | null>>([])
  const text = useRef<HTMLHeadingElement>(null)
  const bot1 = useRef<Array<HTMLDivElement | null>>([])
  const bot2 = useRef<Array<HTMLDivElement | null>>([])
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

 
    // gsap.registerPlugin(SplitText)
    // const tm = gsap.timeline({
    //   scrollTrigger: {
    //     start: "30% bottom",
    //     end: "140% center",
    //     trigger: text.current,
    //     scrub: 0.6,
    //     markers: false
    //   }
    // });

    // const split = new SplitText(text.current, { type: "words,chars" });
    // tm.from(split.chars, {
    //   duration: 1,
    //   x: 5,
    //   autoAlpha: 0,
    //   stagger: 0.05
    // });





    gsap.registerPlugin(ScrollTrigger)
    refAbout.current.forEach((e, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const Bottype = gsap.timeline({
        scrollTrigger: {
          start: "0% bottom",
          end: " center",
          trigger: e,
          scrub: 0.6,
          markers: false
        }
      });

      Bottype.from(bot1.current[index], {
        x: -200,
        opacity: 0,
      }).to(bot1.current[index], {
        x: 0,
        ease: "sine",
        opacity: 1,
      });
      Bottype.from(bot2.current[index], {
        x: 200,
        opacity: 0,
      }).to(bot2.current[index], {
        x: 0,
        ease: "sine",
        opacity: 1,
      });




      const tm = gsap.timeline({
        scrollTrigger: {
          start: "-10% bottom",
          end: "50 center",
          trigger: e,
          scrub: 0.6,
          markers: false
        }
      });

     
      tm.from(e, {
        x: direction * 200,
        opacity: 0,
      }).to(e, {
        delay: 1,
        x: 0,
        ease: "sine",
        opacity: 1,
      });






    });



  }, [])



  return (
    <div className='h-about p-20 bg-black/75  relative text-white backdrop-blur-md  font-Poppins z-50 '>
      <div className='sm:w-9/12 w-full mx-auto'>
        <h1 ref={text} className='text-4xl border-2 mb-20 text-center  font-bold font-Poppins '>Kenapa Sih Saya Harus Memilih Chillin? <span className='border-2 bg-black mx-2'>  ↩Enter</span></h1>
        {
          ArrAbout.map((el, index) => (
            <div key={index}>
              {
                index % 2 === 0 ?
                  <div ref={(e) => (bot1.current[index + 1] = e)} className='flex-col relative flex gap-3 items-start'>
                    <div className='relative h-16 w-16  '>
                      <Image alt='bot' fill src="/bot1.gif" />
                    </div>
                    <h1>bot 1 is Typing</h1>
                  </div>
                  :
                  <div ref={(e) => (bot2.current[index + 1] = e)} className='flex-col relative flex gap-3 items-end'>
                    <div className='relative h-16 w-16 right-0 flex gap-3'>
                      <Image alt='bot' fill src="/bot2.gif" />
                    </div>
                    <h1>bot 2 is Typing</h1>
                  </div>
              }
              <div ref={(e) => (refAbout.current[index + 1] = e)} className={`relative flex z-10 my-20  ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>

                <div className='sm:grid-cols-2  lg:w-1/2 grid bg-white rounded-lg overflow-hidden'>
                  <div className='relative  h-36 '>
                    <Image src={el.img} className='object-cover' fill alt='kopi-Pilihan' />
                  </div>
                  <div className='h-full flex items-center max-sm:py-5'>
                    <p className='text-xl text-center text-black font-bold'>{el.text}</p>
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