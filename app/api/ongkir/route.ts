import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    const {des,qty,kurir} = await req.json()
    const requestOptions: RequestInit = {
        method: 'POST',
        headers: {
            key: process.env.RAJA_ONGKIR_API_KEY || "",
            "content-Type": "application/json"
        },
        body:JSON.stringify({origin: "433", destination: des, weight: 80 * qty, courier: kurir})
        
    };
    try {
        const response = await fetch('https://api.rajaongkir.com/starter/cost', requestOptions);
        const city = await response.json();
        return NextResponse.json(city);

    } catch (error) {
        console.error(error);
    }
};