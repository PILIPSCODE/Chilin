import React from 'react'
import Addrees from './Addrees'
import { FaCircleXmark } from 'react-icons/fa6'


type props = {
    AddreesPopup:boolean,
    SetAddreesPopup:React.Dispatch<React.SetStateAction<boolean>>
}
const AddAddrees = (props:props) => {
  return (
    <div className={`fixed w-full left-0 z-50 h-full flex justify-center top-0 py-20 ${props.AddreesPopup?"":"hidden"}`}>
        <form className='w-9/12 text-white flex flex-col gap-6 bg-black/85 border p-14 rounded-lg h-full relative'>
            <div onClick={() => props.SetAddreesPopup(false)} className='absolute right-3 top-3 text-red-500 text-2xl'><FaCircleXmark/></div>
            <input className='bg-transparent px-2 ouline-none border-b h-10' placeholder='Nama Depan' type="text" />
            <input className='bg-transparent px-2 ouline-none border-b h-10' placeholder='Nama Belakang' type="text" />
            <input className='bg-transparent px-2 ouline-none border-b h-10' placeholder='Phone' type="text" />
            <input className='bg-transparent px-2 ouline-none border-b h-10' placeholder='Email' type="email" />
            <Addrees/>
            <div className='w-full flex justify-end'>
            <button className='bg-black border rounded-lg px-6 py-2 text-white'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddAddrees