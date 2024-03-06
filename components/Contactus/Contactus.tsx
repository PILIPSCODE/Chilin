import Image from 'next/image'
import React from 'react'

const Contactus = () => {
  return (
    <div className='p-10 font-Poppins bg-white' id='contactus'>
      <div className=' overflow-hidden  grid md:grid-cols-2 '>
        <div
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d247.18868869820048!2d110.74256656093225!3d-7.572904814641776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzQnMjIuOCJTIDExMMKwNDQnMzMuOCJF!5e0!3m2!1sid!2sid!4v1705843127986!5m2!1sid!2sid"
            className="w-full border-4 border-black rounded-lg"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className='md:px-10 max-md:pt-6 text-2xl'>
          <div>
            <h1>Name</h1>
            <input type="text" placeholder='Type Here' className='w-full text-lg text-white px-2 h-14 bg-black rounded-md' />
          </div>
          <div className=' my-5'>
            <h1>Email/Instagram/No</h1>
            <input type="text" placeholder='Type Here' className='w-full px-2 text-lg  text-white h-14 bg-black rounded-md' />
          </div>
          <div className=' mb-5'>
            <h1>Masukan</h1>
            <textarea placeholder='Type Here' className='resize-none p-2 text-lg  text-white w-full h-32 bg-black rounded-md' />
          </div>
          <div className='flex justify-end text-white'>

            <button className='cursor-pointer p-2  bg-black'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus