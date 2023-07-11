import axios from 'axios'

export const BASE_URL = 'https://api.punkapi.com/v2'

export const axiosRequest = axios.create({
  baseURL: BASE_URL
})

export const searchBeer = async (beer_name: string) => {
  try {
    const { data } = await axiosRequest.get(`/beers`, {
      params: {
        beer_name,
      },
    })

    return await data
  } catch (e) {
    console.log(e)
  }
}
