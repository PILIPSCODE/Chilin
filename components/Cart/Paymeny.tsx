import { Appdispatch, useAppSelector } from '@/redux/store'
import React from 'react'
import { FaCircleXmark } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
type props = {
  PayPopup: Boolean,
  SetPayPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const Paymeny = (props: props) => {
  const Checkout = useAppSelector((state) => state.CartReducer.Cart);

  return (
    <div className='fixed z-50  py-20 left-0 flex justify-center top-0 h-full w-full'>
      <div className='w-10/12 bg-black/85 border border-white relative  rounded-lg h-full'>

        {Checkout?.filter((e) => e.isChecked === true).map((e, index) => (
          
            <div key={index} className='relative bg-black shadow-sm shadow-white my-2 text-white md:gap-5 max-md:py-5  md:items-center px-4 flex-col md:flex-row flex rounded-md justify-around w-full h-24'>
              <div className='flex items-center gap-3'>
                <div className='h-16 w-16 max-md:w-8 max-md:h-8 relative bg-white  '>
                  <Image src={"/produkk.png"} fill className='object-contain' alt="img-produk" />
                </div>
                <h1 className='text-xl max-md:text-base'>Kopi {e.ProductName}</h1>
              </div>
              <h1 >{String((Number(e.Qty) * Number(e.Price)).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }))}</h1>
              <div className='flex items-center max-md:justify-end gap-2'>
                <h1>x {e.Qty}</h1>
              </div>
            </div>
        
          ))}


      </div>

    </div>
  )
}

export default Paymeny