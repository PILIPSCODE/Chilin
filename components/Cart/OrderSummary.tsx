import { totalIsSelect } from '@/redux/feature/Cart-slice'
import { Appdispatch, useAppSelector } from '@/redux/store';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

type props = {
  diskon: number,
  PayPopup: Boolean,
  SetPayPopup: React.Dispatch<React.SetStateAction<boolean>>,
}
const OrderSummary = (props: props) => {
  const CheckOuut = useAppSelector((state) => state.CartReducer.DataCustomer).filter(e => e.Selected === true);
  const totalslect = useAppSelector(totalIsSelect).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
  
  const Subtotal = useAppSelector(totalIsSelect)
  const total = Math.floor(Subtotal - Subtotal / 100 * props.diskon).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
  
  const Checkout = CheckOuut.length !== 0 && Subtotal !== 0



  return (
    <div className='bg-white rounded-xl font-Poppins p-5 mb-4'>
      <h1 className='font-bold text-3xl'>Ringkasan Pesanan</h1>
      <div className='flex text-base mt-2 justify-between'>
        <div className='flex flex-col gap-2'>
          <h1>SubTotal</h1>
          <h1>Diskon</h1>
          <h1>Ongkir</h1>
          <h1 className='font-bold text-xl '>Total</h1>
        </div>
        <div className='flex flex-col gap-2'>
          <h1>{totalslect}</h1>
          <h1>{props.diskon} %</h1>
          <h1>0</h1>
          <h1 className='font-bold text-xl border-t-2'>{total}</h1>
        </div>

      </div>
      <button onClick={() => Checkout?props.SetPayPopup(true):(CheckOuut.length === 0?toast.error("Select Addrees"):toast.error("Select items min 1"))} className={`p-3 ${Checkout ? "bg-black text-white" : "bg-white  text-black"} bg-black rounded-lg  w-full text-center  shadow-lg relative cursor-pointer hover:bg-white hover:text-black  border`}>CheckOut Now</button>
    </div>
  )
}

export default OrderSummary