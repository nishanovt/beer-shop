import React from 'react'
import { Market } from '..'
import { GoodTypes } from 'types/good'
import { useAppSelector } from 'hooks/redux'

const useList = () => {
  const page = useAppSelector(state => state.appSlice.currentPage)
  const [allGoods, setAllGoods] = React.useState<GoodTypes.Card[]>([])
  const [isLoading, setIsLoading] = React.useState(false)

  const getAll = React.useCallback(async () => {
    setIsLoading(true)

    try {
      const { data } = await Market.API.List.getAll(page, 30)

      setAllGoods(data)

    } catch (e) {
      console.log(e)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [page, ])

  React.useEffect(() => {
    getAll()
  }, [page, getAll])

  return {
    isLoading,
    allGoods,
    page,
  }
}

export const use = useList
