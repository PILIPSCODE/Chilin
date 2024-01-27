"use client"
import { Appdispatch, useAppSelector } from '@/redux/store';
import React from 'react'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '@/redux/feature/Cart-slice';
import { FaCheck } from 'react-icons/fa6';

const Cart = () => {
  const inCarto = useAppSelector((state) => state.CartReducer.product);
  const dispact = useDispatch<Appdispatch>();

  return (
    <div className='h-full w-9/12  mx-auto grid lg:grid-cols-3 gap-4 pt-32 font-Poppins'>
      <div className='col-span-2 '>
        {inCarto.map((e, index) => (
          <div key={index} className='relative bg-black shadow-sm shadow-white my-2 text-white md:gap-5 max-md:py-5  md:items-center px-4 flex-col md:flex-row flex rounded-md justify-around w-full h-24'>
            <div className='absolute w-5 h-5 max-lg:bottom-2 border left-2 flex justify-center items-center text-green-500'> <div className='absolute z-10 text-3xl'><FaCheck /></div></div>
            <div className='flex items-center gap-3'>
              <div className='h-16 w-16 max-md:w-8 max-md:h-8 relative bg-white  '>
                <Image src={"/produkk.png"} fill className='object-contain' alt="img-produk" />
              </div>
              <h1 className='text-xl max-md:text-base'>Kopi {e.ProductName}</h1>
            </div>
              <h1 >Rp.{String(e.Price)}</h1>
            <div className='flex items-center max-md:justify-end gap-2'>
              <div className='max-md:flex'>
                <h1 onClick={() => dispact(increment(e))} className='border text-lg h-7 w-7 flex items-center justify-center'>+</h1>
                <h1 onClick={() => dispact(decrement(e))} className='border text-lg  h-7 w-7 flex items-center justify-center'>-</h1>
              </div>
              <h1>x {e.Qty}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className='max-lg:col-span-2  col-span-1'>
        <div className='bg-white rounded-xl font-Poppins p-5'>
          <h1 className='font-bold text-3xl'>Order Summary</h1>
          <div className='flex text-base mt-2 justify-between'>
            <div className='flex flex-col gap-2'>
              <h1>SubTotal</h1>
              <h1>Biaya Ongkir</h1>
              <h1>Diskon</h1>
              <h1 className='font-bold text-xl '>Total</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <h1>0</h1>
              <h1>0</h1>
              <h1>0</h1>
              <h1 className='font-bold text-xl border-t-2'>0</h1>
            </div>

          </div>
          <button className={`p-3 bg-black rounded-lg text-white w-full text-center  shadow-lg relative cursor-pointer hover:bg-white hover:text-black  border`}>CheckOut Now</button>
        </div>
      </div>
    </div>
  )
}

export default Cart