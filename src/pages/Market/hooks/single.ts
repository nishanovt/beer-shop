import React from 'react'
import { GoodTypes } from 'types/good'
import { Market } from '..'
import { useParams } from 'react-router-dom'

const useSingle = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [goods, setGoods] = React.useState<GoodTypes.Card | undefined>()
  const [goodsGreater, setGoodsGreater] = React.useState<GoodTypes.Card[]>([])
  const [goodsMilder, setGoodsMilder] = React.useState<GoodTypes.Card[]>([])
  const { beer_name } = useParams()

  const getSingle = React.useCallback(async (beerName: string | undefined) => {
    setIsLoading(true)

    try {
      const { data } = await Market.API.Single.getSingle(beerName)
      if (data && data.length > 0) {
        setGoods(data[0])
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const getAbvGreater = React.useCallback(async (abvGt: number | undefined) => {
    setIsLoading(true)

    try {
      const { data } = await Market.API.Single.getAbvGreater(abvGt)
      setGoodsGreater(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const getAbvMilder = React.useCallback(async (abv_lt: number) => {
    setIsLoading(true)

    try {
      const { data } = await Market.API.Single.getAbvMilder(abv_lt)
      setGoodsMilder(data)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  React.useEffect(() => {
    getSingle(beer_name)
  }, [beer_name, getSingle])

  React.useEffect(() => {
    if (goods && goods.abv) {
      getAbvGreater(goods.abv)
    }
  }, [goods, getAbvGreater])

  React.useEffect(() => {
    if (goods && goods.abv) {
      getAbvMilder(goods.abv)
    }
  }, [goods, getAbvMilder])

  return {
    isLoading,
    goodsGreater,
    goodsMilder,
    goods,
  }
}

export const use = useSingle
