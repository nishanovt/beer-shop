import { axiosRequest } from 'config'

export const getAll = (page: number, per_page: number) => {
  return axiosRequest.get('/beers', {
    params: {
      page,
      per_page,
    }
  })
}
