import { axiosRequest } from 'config'

export const getList = (ids: string) => {
  return axiosRequest.get('/beers', {
    params: { ids }
  })
}
