import Image from 'next/image'
import React from 'react'
import { FaCopyright, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='bg-white text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className='bg-black relative '>
                <div className='w-9/12 mx-auto items-center  flex justify-between'>
                    <div >
                        <div className='flex items-center gap-2  justify-center'>
                            <Image src={'/logo.png'} width={60} height={60} alt='logo' />
                            <h1 className='font-Abril text-3xl '>Chillin</h1>
                        </div>
                        <div className='flex items-center text-3xl mt-2 justify-center gap-2'>
                            <FaInstagram />
                            <FaTiktok />
                            <FaWhatsapp />
                        </div>
                    </div>
                    <h1 className='text-2xl w-1/4'>Santai Sejenak, Rasakan Kelezatan Kopi Sejati</h1>
                </div>
                <div className=' w-full flex justify-center mt-8 text-white'>
                    <h1 className='flex text-2xl items-center gap-1'>Copy Right <FaCopyright /> 2024 By Pilips</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer