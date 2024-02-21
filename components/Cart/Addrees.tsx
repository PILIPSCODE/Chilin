"use client"
import { CheckOut, totalIsQty } from '@/redux/feature/Cart-slice';
import { Appdispatch } from '@/redux/store';
import { Check } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';


const Addrees = () => {
    const [data, setData] = useState([]);
  const [cities, setCities] = useState("");
  const [onfocuss,setOnfocuss] =useState(false)
  const [cliked,setCliked] =useState(false)
  const dispact = useDispatch<Appdispatch>();
  const handleClick = async(e:any) => {
    setCliked(!cliked)
   
    setOnfocuss(false)
    setCities(e.city_name)
    dispact(CheckOut(e.city_id))
    console.log(data)
  }
  useEffect(() => {
    const Address = async () => {
      const city = await fetch("/api/addrees");
      const data = await city.json();
      setData(data.rajaongkir.results);
    };
    Address();
    return(() => {
    })
  }, []);
  return (
    <div className='bg-white rounded-xl font-Poppins p-5 mb-4'>
    <h1 className='font-bold text-3xl text-black mb-2'>Alamat</h1>
    <div>
      <div className="relative text-black">
        <h1>Asal Kota/Kabupaten</h1>
        <input
          required
          type="text"
          onFocus={() => setOnfocuss(true)}
          onBlur={() => {
            if (cliked || cities !== "") {
              setTimeout(() => { setOnfocuss(false) }, 300)
            } 
          }

          }
          id="otherInput"
          autoComplete='off'
          value={cities}
          onChange={(e) => {
            setCities(e.target.value);
            dispact(CheckOut(0))
          }}
          name="otherInput"
          placeholder="Contoh:Surakarta"
          className=" p-3 rounded-lg bg-black text-white relative max-lg:w-11/12 max-lg:mx-3 w-80 "
        />
        <div
          className={`absolute ${onfocuss ? "" : "hidden"} p-2 translate-y-16 rounded-lg overflow-y-scroll -bottom-full z-50 w-full h-32 bg-black text-white border`}
        >
          {data
            ?.filter((e: any) => {
              if (cities !== "") {
                return e.city_name.toLowerCase().includes(
                  cities.toLowerCase());
              }
              return e
            })
            .map((e: any, index: any) => {
              return (
                <h1 onClick={(res) => handleClick(e)} className="hover:bg-blue-300" key={index}>
                  {e.city_name}
                </h1>
              )
            }

            )}
        </div>
      </div>
    </div>


  </div>
  )
}

export default Addrees