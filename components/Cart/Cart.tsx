"use client"
import { Appdispatch, useAppSelector } from '@/redux/store';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { CheckOut, RemoveProduct, RemoveProductAll, SetCheck, SetCheckAll, decrement, increment } from '@/redux/feature/Cart-slice';
import { FaCheck, FaCirclePlus, FaTrash } from 'react-icons/fa6';
import OrderSummary from './OrderSummary';
import Paymeny from './Paymeny';
import DataCustomer from './DataCustomer';
import AddAddrees from './AddAddrees';

const Cart = () => {
  const [CheckAll, SetCheckAl] = useState(false)
  const [PayPopup, SetPayPopup] = useState(false)
  const [AddresPopup, SetAddresPopup] = useState(false)
  const [diskon, Setdiskon] = useState(0)
  const [inCarto, Setin] = useState<Cartitems[]>([])

  const inCart = useAppSelector((state) => state.CartReducer.Cart);
  useEffect(() => {
    Setin(inCart)
  }, [inCart])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value === "ChillsCaffein" ? Setdiskon(30) : (e.target.value === "Wimerce" ? Setdiskon(20) : Setdiskon(0))

  }

  const dispact = useDispatch<Appdispatch>();

  return (
    <div className='h-full w-9/12  mx-auto grid xl:grid-cols-3 gap-4 pt-20 font-Poppins'>
      <div className='col-span-2 relative'>
        <div className='flex items-center gap-2 text-white'>
          <div onClick={() => { dispact(SetCheckAll(CheckAll)), SetCheckAl(!CheckAll) }} className='ml-1 w-5 h-5 max-xl:bottom-2 border left-2 flex justify-center items-center text-green-500'> <div className={`${CheckAll ? "absolute" : "hidden"} z-10 text-3xl`}><FaCheck /></div></div>
          <h1>Pilih Semua</h1>
          <div className={`${CheckAll ? "flex items-center gap-3 mx-3" : "hidden"} border-red-600 border text-red-600 max-xl:top-3`} onClick={() => dispact(RemoveProductAll())}>
            <FaTrash />
            <h1>Hapus Semua</h1>
          </div>
        </div>
        {
          inCarto.map((e, index) => (
            <div key={index} className='relative bg-black shadow-sm shadow-white my-2 text-white md:gap-5 max-md:py-5  md:items-center px-4 flex-col md:flex-row flex rounded-md justify-around w-full h-24'>
              <div onClick={() => dispact(SetCheck(e))} className='absolute w-5 h-5 max-lg:bottom-2 border left-2 flex justify-center items-center text-green-500'> <div className={`${e.isChecked ? "absolute" : "hidden"} z-10 text-3xl`}><FaCheck /></div></div>
              <div className='flex items-center gap-3'>
                <div className='h-16 w-16 max-md:w-8 max-md:h-8 relative bg-white  '>
                  <Image src={"/produkk.png"} fill className='object-contain' alt="img-produk" />
                </div>
                <h1 className='text-xl max-md:text-base'>Kopi {e.ProductName}</h1>
              </div>
              <h1 >{String((Number(e.Qty) * Number(e.Price)).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }))}</h1>
              <div className='flex items-center max-md:justify-end gap-2'>
                <div className='max-md:flex'>
                  <h1 onClick={() => dispact(increment(e))} className='border text-lg h-7 w-7 flex items-center justify-center'>+</h1>
                  <h1 onClick={() => dispact(decrement(e))} className='border text-lg  h-7 w-7 flex items-center justify-center'>-</h1>
                </div>
                <h1>x {e.Qty}</h1>
              </div>
              <div className='absolute right-3 text-red-600 max-lg:top-3 ' onClick={() => dispact(RemoveProduct(e))}>
                <FaTrash />
              </div>
            </div>


          ))}
      </div>

      <div className='max-xl:col-span-2  col-span-1 '>
       
        <div onClick={() => {SetAddresPopup(true)}} className=' text-white flex w-full justify-end gap-2 mb-4 items-center  text-2xl'>
           <h1 className='text-lg'>Add Addrees</h1>
          <FaCirclePlus />
        </div>
      

        <DataCustomer />
        <AddAddrees AddreesPopup={AddresPopup} SetAddreesPopup={SetAddresPopup} />
        <OrderSummary in='Cart' PayPopup={PayPopup} SetPayPopup={SetPayPopup} diskon={diskon} />
        <div className={`${PayPopup ? "" : "hidden"}`}>

          <Paymeny diskon={diskon} PayPopup={PayPopup} SetPayPopup={SetPayPopup} />
        </div>
        <div className='bg-white rounded-xl font-Poppins p-5'>
          <input onChange={(e) => handleChange(e)} className='p-3 w-full rounded-lg bg-black text-white' type="text" placeholder='Masukan Kupon' />
        </div>
      </div>
    </div>
  )
}

export default Cart