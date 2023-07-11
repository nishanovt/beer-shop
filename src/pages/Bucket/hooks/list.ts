import React from 'react'
import { GoodTypes } from 'types/good'
import { Bucket } from '..'
import { useAppSelector } from 'hooks/redux'

const useList = () => {
  const ids = useAppSelector(state => state.appSlice.bucket).join('|')
  const [isLoading, setIsLoading] = React.useState(false)
  const [goods, setGoods] = React.useState<GoodTypes.Card[]>([])

  const getAll = React.useCallback(async (ids: string) => {
    setIsLoading(true)

    try {
      const { data } = await Bucket.API.List.getList(ids)

      setGoods(data)
    } catch (e) {
      console.log(e)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    }
  }, [])

  React.useEffect(() => {
    getAll(ids)
  }, [ids, getAll])

  return {
    isLoading,
    goods,
  }
}

export const use = useList
