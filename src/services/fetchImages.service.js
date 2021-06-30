import axios from "axios"

export const fetchImages = async (id) => {
   try {
    const images = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    return {
        status: true,
        data: images.data
    }
   }catch (error) {
       return {
           status: false,
           error: error
       }
   }
}