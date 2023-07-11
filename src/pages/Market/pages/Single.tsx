import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Market } from '..'
import { PageTitle, Slider } from 'components'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { appSlice } from 'store/reducers/appSlice'
import { GoodTypes } from 'types/good'

export const Single = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { isLoading, goodsGreater, goodsMilder, goods } = Market.Hooks.Single.use()
  const bucket = useAppSelector(state => state.appSlice.bucket)
  const { addToBucket, removeFromBucket } = appSlice.actions
  const [goodInBucket, setGoodInBucket] = React.useState(false)

  React.useEffect(() => {
    if (goods && goods.id) {
      setGoodInBucket(bucket.includes(goods.id))
    }
  }, [bucket, goods])

  const handleToggleBucket = () => {
    if (goods) {
      if (goodInBucket) {
        dispatch(removeFromBucket(goods.id))
      } else {
        dispatch(addToBucket(goods.id))
      }
    }
  }

  const goCatalog = () => navigate('/market')

  if (isLoading || !goods) {
    return <h1>Loading...</h1>
  }

  const renderGoodsSection = (goodsArray: GoodTypes.Card[], title: string) => {
    if (goodsArray.length === 0) return null

    return (
      <div className="mt-5 phone:px-1 tablet:px-3 laptop:px-10">
        <div className="text-xl border-b border-slate-500 px-4 py-1 font-semibold">{title}</div>
        <div className="py-2">
          <Slider goods={goodsArray} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <PageTitle
        title={goods.name}
        path={`Каталог / ${goods.name}`}
        withBack
        onBack={goCatalog}
      />

      <div className="flex flex-wrap py-4 phone:px-1 tablet:px-3 laptop:px-10">
        <div className="basis-32 flex-1 flex justify-center">
          <img src={goods.image_url} alt={goods.name} className="h-96" />
        </div>
        <div className="basis-96 grow-[3] py-3 px-5 space-y-2">
          <div className="space-x-2 text-sm">
            <span className="text-red-500 font-medium">Tag:</span>
            <span>{goods.tagline}</span>
          </div>

          <div className="text-2xl font-semibold tracking-wide underline">{goods.name}</div>

          <div className="space-x-2">
            <span className="text-red-500 font-medium">Крепость:</span>
            <span>{goods.abv}%</span>
          </div>

          <div className="space-x-2 text-sm">
            <span className="text-red-500 font-medium">Description:</span>
            <span>{goods.description}</span>
          </div>

          <div className="text-red-500 underline font-medium">
            {goods.volume.value} {goods.volume.unit}
          </div>

          <div className="ml-auto text-lg">
            <button
              className="border border-slate-600 px-2 py-1 rounded-md"
              onClick={handleToggleBucket}
            >
              {goodInBucket ? 'Удалить товар' : 'Добавить товар'}
            </button>
          </div>
        </div>
      </div>

      {renderGoodsSection(goodsGreater, 'Пиво покрепче этого')}
      {renderGoodsSection(goodsMilder, 'Пиво полегче этого')}
    </div>
  )
}
