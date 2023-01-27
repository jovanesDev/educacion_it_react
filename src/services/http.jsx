import { axiosClient } from "./axiosClient"

// axiosClient = adentro tiene url fijo que es http://localhost:3001
export const get = async ( url ) => {
    // /products
    try {
        const res = await axiosClient.get(url)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const post = async ( url , data) => {
    try {
        const res = await axiosClient.post(url,data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}