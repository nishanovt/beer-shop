import React from 'react'
import { useAppSelector } from 'hooks/redux'
import { NavLink } from 'react-router-dom'
import { Bucket } from '..'
import {
  Skeleton,
  PageTitle,
  Grid,
  Card,
} from 'components'

export const List = () => {
  const { goods, isLoading } = Bucket.Hooks.List.use()
  const bucket = useAppSelector(state => state.appSlice.bucket)

  const loader = () => (
    <Grid>
      {Array.from({ length: bucket.length }, (_, i) => <Skeleton key={i} />)}
    </Grid>
  )

  const renderGoods = () => (
    <Grid>
      {goods.map(good => <Card good={good} key={good.id} />)}
    </Grid>
  )

  const renderEmptyState = () => (
    <div className="text-center text-xl p-10">
      Список корзины пока пуст!<br />
      Вернитесь в
      <NavLink to="/market" className="border-b border-slate-500 cursor-pointer">
        {' '}
        каталог
        {' '}
      </NavLink>
      и добавьте товар
    </div>
  )

  return (
    <div className="min-h-screen">
      <PageTitle title="Корзина" path="Bucket /" />

      {isLoading ? loader() : goods.length > 0 ? renderGoods() : renderEmptyState()}
    </div>
  )
}
