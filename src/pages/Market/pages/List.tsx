import React from 'react'
import { Market } from '..'
import {
  Card,
  Grid,
  PageTitle,
  Pagination,
  Skeleton,
} from 'components'

export const List = () => {
  const { isLoading, allGoods } = Market.Hooks.List.use()

  const renderGoods = () => {
    if (isLoading) {
      return Array.from({ length: 30 }, (_, index) => <Skeleton key={index} />)
    } else {
      return allGoods.map(good => <Card good={good} key={good.id} />)
    }
  }

  return (
    <div className="min-h-screen">
      <PageTitle title="Список товаров" path="Market/" />
      <Grid>{renderGoods()}</Grid>
      <Pagination />
    </div>
  )
}
