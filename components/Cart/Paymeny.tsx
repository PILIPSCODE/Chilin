"use client"
import { Appdispatch, useAppSelector } from '@/redux/store'
import React, { useState } from 'react'
import Image from 'next/image'
import OrderSummary from './OrderSummary'
import { FaCircleXmark } from 'react-icons/fa6'
type props = {
  PayPopup: Boolean,
  diskon:number,
  SetPayPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const Paymeny = (props: props) => {
  const Checkout = useAppSelector((state) => state.CartReducer.Cart);

  return (
    <div className='fixed z-50  pt-20 left-0 flex justify-center top-0 h-full w-full'>
      <div className='w-10/12 flex flex-col justify-between bg-black/85 border border-white relative  rounded-lg h-full'>
      <div onClick={() => props.SetPayPopup(false)} className='absolute z-50 right-3 top-3 text-red-500 text-2xl'><FaCircleXmark/></div>

        <div>
        {Checkout?.filter((e) => e.isChecked === true).map((e, index) => (
          
            <div key={index} className='relative bg-black shadow-sm shadow-white my-2 text-white md:gap-5 max-md:py-5  md:items-center px-4 flex-col md:flex-row flex rounded-md justify-around w-full h-24'>
              <div className='flex items-center gap-3'>
                <div className='h-16 w-16 max-md:w-8 max-md:h-8 relative bg-white  '>
                  <Image src={`${e.img}.png`} fill className='object-contain' alt="img-produk" />
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
          <OrderSummary PayPopup={props.PayPopup} SetPayPopup={props.SetPayPopup} diskon={props.diskon} in='Pay'/>

      </div>

    </div>
  )
}

export default Paymeny