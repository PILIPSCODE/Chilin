import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    const requestOptions: RequestInit = {
        method: 'GET',
        headers: {
            key: process.env.RAJA_ONGKIR_API_KEY || "",
        },
    };
    try {
        const response = await fetch('https://api.rajaongkir.com/starter/city', requestOptions);
        const city = await response.json();
        return NextResponse.json(city);

    } catch (error) {
        console.error(error);
    }
};