import React, { useState } from 'react'
import Addrees from './Addrees'
import { FaCircleXmark } from 'react-icons/fa6'
import { Appdispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { DataCustome } from '@/redux/feature/Cart-slice'


type props = {
    AddreesPopup:boolean,
    SetAddreesPopup:React.Dispatch<React.SetStateAction<boolean>>
}
const AddAddrees = (props:props) => {
  const [Fname,SetFName] = useState("")
  const [Lname,SetLName] = useState("")
  const [Phone,SetPhone] = useState("")
  const [Email,SetEmail] = useState("")

  const Addresid = useAppSelector((state) => state.CartReducer.CheckOut);
 
  const dispact = useDispatch<Appdispatch>();
  const HandleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      Fname,
      Lname,
      Phone,
      Email,
      Selected:false,
      City: Addresid.city,
      CityID:Addresid.Address
    }

    dispact(DataCustome(data))
    SetEmail("")
    SetPhone("")
    SetLName("")
    SetFName("")
    props.SetAddreesPopup(false)

  }
  return (
    <div className={`fixed w-full left-0 z-50 h-full flex justify-center top-0 py-20 ${props.AddreesPopup?"":"hidden"}`}>
        <form onSubmit={(e) => HandleSubmit(e)} className='w-9/12 text-white flex flex-col gap-6 bg-black/85 border p-14 rounded-lg h-full relative'>
            <div onClick={() => props.SetAddreesPopup(false)} className='absolute right-3 top-3 text-red-500 text-2xl'><FaCircleXmark/></div>
            <input onChange={(e) => SetFName(e.target.value)} value={Fname} required className='bg-transparent px-2 ouline-none border-b h-10' placeholder='Nama Depan' type="text" />
            <input onChange={(e) => SetLName(e.target.value)} value={Lname} required className='bg-transparent px-2 ouline-none border-b h-10' placeholder='Nama Belakang' type="text" />
            <input onChange={(e) => SetPhone(e.target.value)} value={Phone} required className='bg-transparent px-2 ouline-none border-b h-10' placeholder='Phone' type="text" />
            <input onChange={(e) => SetEmail(e.target.value)} value={Email}  className='bg-transparent px-2 ouline-none border-b h-10' placeholder='Email' type="email" />
            <Addrees/>
            <div className='w-full flex justify-end'>
            <button className='bg-black border rounded-lg px-6 py-2 text-white'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddAddrees