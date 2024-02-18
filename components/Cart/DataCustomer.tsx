// import { DataCustome, totalIsQty } from '@/redux/feature/Cart-slice';
// import { Appdispatch, useAppSelector } from '@/redux/store';
// import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast';
// import { FaCirclePlus, FaPencil, FaTrash } from 'react-icons/fa6'
// import { useDispatch, useSelector } from 'react-redux';

// const DataCustomer = () => {
//     const dispact = useDispatch<Appdispatch>();
//     const [Customer, SetCustomer] = useState<DataCustomer[]>([])
//     const [Cost, SetCost] = useState<any>(null)
//     const [Addres, SetAddrees] = useState(0)
//     const Handleclick = (e: DataCustomer) => {
//         dispact(DataCustome(e))
//     }
//     const Qty = useSelector(totalIsQty)
//     const CheckOuut = useAppSelector((state) => state.CartReducer.DataCustomer).filter((e) => e.Selected === true);
//     const DataCus = useAppSelector((state) => state.CartReducer.DataCustomer);


//     useEffect(() => {
//         SetAddrees(CheckOuut[0]?.CityID)
//     }, [CheckOuut])

//     useEffect(() => {
//         SetCustomer(DataCus)
//     }, [DataCus])

//     const HandleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {

//         const res = await fetch("/api/ongkir", {
//             method: "POST",
//             body: JSON.stringify({
//                 des: Addres,
//                 qty: Qty,
//                 kurir: e.target.value
//             }),

//         })
//         const data = await res.json()
//         SetCost(data)


//     }
//     const HandleChangeCost = (e:React.ChangeEvent<HTMLSelectElement>) => {

//     }
   
//     return (
//         <div className='font-Poppins'>

//             <div className='border relative p-3 mb-4 rounded-lg z-50 text-black bg-white flex flex-col gap-2 border-white'>
//                 {
//                     Customer.length === 0 ?
//                         <h1>No Addrees Click Plus to Add</h1>
//                         :
//                         Customer.map((e, index) => (
//                             <div key={index} className='flex gap-3 relative'>
//                                 <div onClick={() => Handleclick(e)} className={`${e.Selected ? "bg-white border-4 border-black" : 'bg-black'}  w-6 h-6 rounded-full`}>

//                                 </div>
//                                 <div className='flex '>

//                                     <h1>{e.Fname},{e.Lname}</h1>
//                                     <span>,</span>
//                                     <h1>{e.City},{e.Phone}</h1>
//                                 </div>
//                                 <div className='absolute right-5 flex gap-1'>
//                                     <div className='text-blue-500'>

//                                         <FaPencil />
//                                     </div>
//                                     <div className='text-red-500'>

//                                         <FaTrash />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                 }
               
//             </div>

//             <div  onClick={() => Qty === 0?toast.error("Select min 1 items"):""}  className='bg-white p-5 rounded-lg mb-4'>
//                 <h1>Kurir</h1>
//                 <select defaultValue={"Pilih Kurir"} onChange={(e) => HandleChange(e)} className={`w-full ${Addres !== 0 && Qty === 0? "pointer-events-none" : ""} bg-black text-white rounded-lg text-lg p-2 mb-4`}>
//                     <option  disabled> Pilih Kurir</option>
//                     <option value="jne">JNE</option>
//                     <option value="pos">POS INDONESIA</option>
//                     <option value="tiki">TIKI</option>
//                 </select>
//                 <div className={`${Cost === null ? "hidden" : ""}`}>
//                 <h1>Pilih Layanan</h1>
//                     <select onChange={(e) => HandleChangeCost(e)} defaultValue={"Pilih Layanan"} className={`bg-black text-white w-full rounded-lg text-lg p-2 mb-4`}>
//                         <option disabled> Pilih Layanan</option>
//                         {
//                             Cost?.rajaongkir.results[0].costs.map((e: any, index: any) => (

//                                 <option className='flex justify-between border border-black' key={index} value={e?.cost[0].value}>{e.service} Estimsasi:{e?.cost[0].etd}</option>
//                             ))
//                         }
//                     </select>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DataCustomer